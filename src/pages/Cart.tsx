import { Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const products = [
  {
    id: 1,
    name: "Футболка тигриная",
    price: 700,
    image: "/img/bc43d4c9-e05f-45cd-b445-2218296b53af.jpg",
    category: "Футболки",
  },
  {
    id: 2,
    name: "Стильный набор",
    price: 2500,
    image: "/img/8a5277b9-cfe2-4538-99f8-d3384e3b2421.jpg",
    category: "Наборы",
  },
  {
    id: 3,
    name: "Уличная коллекция",
    price: 3200,
    image: "/img/1f68538b-7b80-4bd1-a61d-75e7e2400fb9.jpg",
    category: "Уличная одежда",
  },
];

interface CartItem {
  id: number;
  quantity: number;
}

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { id: 1, quantity: 1 },
    { id: 2, quantity: 1 },
  ]);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity === 0) {
      setCartItems((prev) => prev.filter((item) => item.id !== id));
    } else {
      setCartItems((prev) =>
        prev.map((item) =>
          item.id === id ? { ...item, quantity: newQuantity } : item,
        ),
      );
    }
  };

  const removeItem = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const cartProducts = cartItems.map((cartItem) => {
    const product = products.find((p) => p.id === cartItem.id);
    return {
      ...product!,
      quantity: cartItem.quantity,
      total: product!.price * cartItem.quantity,
    };
  });

  const subtotal = cartProducts.reduce((sum, item) => sum + item.total, 0);
  const delivery = 300;
  const total = subtotal + delivery;

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Link to="/" className="flex items-center space-x-2">
                <Icon name="ShoppingBag" className="h-8 w-8 text-purple-600" />
                <span className="text-2xl font-bold text-gray-900">
                  Style Shop
                </span>
              </Link>
            </div>
            <div className="flex items-center space-x-6">
              <Link
                to="/catalog"
                className="text-gray-700 hover:text-purple-600 transition-colors"
              >
                Каталог
              </Link>
              <Link
                to="/cart"
                className="relative text-purple-600 font-semibold"
              >
                <Icon name="ShoppingCart" className="h-6 w-6" />
                <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
                </span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Корзина
          </h1>
          <p className="text-lg text-gray-600">
            Проверьте свой заказ перед оплатой
          </p>
        </div>

        {cartItems.length === 0 ? (
          <div className="text-center py-12">
            <Icon
              name="ShoppingCart"
              className="h-16 w-16 text-gray-400 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Корзина пуста
            </h3>
            <p className="text-gray-600 mb-6">
              Добавьте товары из каталога, чтобы сделать заказ
            </p>
            <Button asChild className="bg-purple-600 hover:bg-purple-700">
              <Link to="/catalog">
                <Icon name="ShoppingBag" className="mr-2 h-4 w-4" />
                Перейти в каталог
              </Link>
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-4">
                    Товары в корзине
                  </h2>
                  <div className="space-y-4">
                    {cartProducts.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center space-x-4 py-4 border-b border-gray-200 last:border-b-0"
                      >
                        <div className="w-20 h-20 flex-shrink-0">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover rounded-lg"
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900">
                            {item.name}
                          </h3>
                          <p className="text-gray-600 text-sm">
                            {item.category}
                          </p>
                          <p className="text-purple-600 font-bold">
                            {item.price.toLocaleString()} ₽
                          </p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                          >
                            <Icon name="Minus" className="h-4 w-4" />
                          </Button>
                          <span className="w-8 text-center font-semibold">
                            {item.quantity}
                          </span>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                          >
                            <Icon name="Plus" className="h-4 w-4" />
                          </Button>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-lg">
                            {item.total.toLocaleString()} ₽
                          </p>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeItem(item.id)}
                            className="text-red-600 hover:text-red-800"
                          >
                            <Icon name="Trash2" className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-4">Сводка заказа</h2>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">
                        Товары (
                        {cartItems.reduce(
                          (sum, item) => sum + item.quantity,
                          0,
                        )}
                        )
                      </span>
                      <span className="font-semibold">
                        {subtotal.toLocaleString()} ₽
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Доставка</span>
                      <span className="font-semibold">
                        {delivery.toLocaleString()} ₽
                      </span>
                    </div>
                    <Separator />
                    <div className="flex justify-between text-lg font-bold">
                      <span>Итого</span>
                      <span className="text-purple-600">
                        {total.toLocaleString()} ₽
                      </span>
                    </div>
                  </div>

                  <div className="mt-6 space-y-3">
                    <Button
                      asChild
                      className="w-full bg-purple-600 hover:bg-purple-700"
                    >
                      <Link to="/checkout">
                        <Icon name="CreditCard" className="mr-2 h-4 w-4" />
                        Оформить заказ
                      </Link>
                    </Button>
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/catalog">
                        <Icon name="ShoppingBag" className="mr-2 h-4 w-4" />
                        Продолжить покупки
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Promo Code */}
              <Card className="mt-4">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3">Промокод</h3>
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      placeholder="Введите промокод"
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                    <Button variant="outline">Применить</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
