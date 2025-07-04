import { Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Icon from "@/components/ui/icon";

const orderItems = [
  {
    id: 1,
    name: "Футболка тигриная",
    price: 700,
    quantity: 1,
    image: "/img/bc43d4c9-e05f-45cd-b445-2218296b53af.jpg",
  },
  {
    id: 2,
    name: "Стильный набор",
    price: 2500,
    quantity: 1,
    image: "/img/8a5277b9-cfe2-4538-99f8-d3384e3b2421.jpg",
  },
];

const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [deliveryMethod, setDeliveryMethod] = useState("courier");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    comment: "",
  });
  const { toast } = useToast();

  const subtotal = orderItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const delivery = deliveryMethod === "courier" ? 300 : 0;
  const total = subtotal + delivery;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    toast({
      title: "Заказ отправлен!",
      description:
        "Мы свяжемся с вами в ближайшее время для подтверждения заказа.",
    });
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
                className="relative text-gray-700 hover:text-purple-600 transition-colors"
              >
                <Icon name="ShoppingCart" className="h-6 w-6" />
                <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {orderItems.reduce((sum, item) => sum + item.quantity, 0)}
                </span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Оформление заказа
          </h1>
          <p className="text-lg text-gray-600">
            Заполните данные для доставки и оплаты
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Order Form */}
            <div className="space-y-6">
              {/* Contact Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="User" className="mr-2 h-5 w-5" />
                    Контактная информация
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="name">Имя и фамилия *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Иван Иванов"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Номер телефона *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+7 (999) 123-45-67"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="ivan@example.com"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Delivery */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="Truck" className="mr-2 h-5 w-5" />
                    Доставка
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <RadioGroup
                    value={deliveryMethod}
                    onValueChange={setDeliveryMethod}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="courier" id="courier" />
                      <Label
                        htmlFor="courier"
                        className="flex-1 cursor-pointer"
                      >
                        <div className="flex justify-between">
                          <span>Курьерская доставка</span>
                          <span className="font-semibold">300 ₽</span>
                        </div>
                        <p className="text-sm text-gray-600">
                          Доставка в течение 1-3 дней
                        </p>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="pickup" id="pickup" />
                      <Label htmlFor="pickup" className="flex-1 cursor-pointer">
                        <div className="flex justify-between">
                          <span>Самовывоз</span>
                          <span className="font-semibold">Бесплатно</span>
                        </div>
                        <p className="text-sm text-gray-600">
                          Получение в пункте выдачи
                        </p>
                      </Label>
                    </div>
                  </RadioGroup>

                  <div>
                    <Label htmlFor="address">Адрес доставки *</Label>
                    <Textarea
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      placeholder="Улица, дом, квартира, подъезд, этаж"
                      required
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Payment */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="CreditCard" className="mr-2 h-5 w-5" />
                    Способ оплаты
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <RadioGroup
                    value={paymentMethod}
                    onValueChange={setPaymentMethod}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="card" id="card" />
                      <Label
                        htmlFor="card"
                        className="flex items-center cursor-pointer"
                      >
                        <Icon name="CreditCard" className="mr-2 h-4 w-4" />
                        Банковская карта
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="cash" id="cash" />
                      <Label
                        htmlFor="cash"
                        className="flex items-center cursor-pointer"
                      >
                        <Icon name="Banknote" className="mr-2 h-4 w-4" />
                        Наличными при получении
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="transfer" id="transfer" />
                      <Label
                        htmlFor="transfer"
                        className="flex items-center cursor-pointer"
                      >
                        <Icon name="Smartphone" className="mr-2 h-4 w-4" />
                        Переводом (СБП)
                      </Label>
                    </div>
                  </RadioGroup>
                </CardContent>
              </Card>

              {/* Comment */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="MessageSquare" className="mr-2 h-5 w-5" />
                    Комментарий к заказу
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Textarea
                    name="comment"
                    value={formData.comment}
                    onChange={handleInputChange}
                    placeholder="Дополнительные пожелания или инструкции"
                    rows={3}
                  />
                </CardContent>
              </Card>
            </div>

            {/* Order Summary */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Ваш заказ</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {orderItems.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center space-x-4"
                      >
                        <div className="w-16 h-16 flex-shrink-0">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover rounded-lg"
                          />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold">{item.name}</h4>
                          <p className="text-sm text-gray-600">
                            Количество: {item.quantity}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold">
                            {(item.price * item.quantity).toLocaleString()} ₽
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <Separator className="my-6" />

                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Товары</span>
                      <span>{subtotal.toLocaleString()} ₽</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Доставка</span>
                      <span>{delivery.toLocaleString()} ₽</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between text-lg font-bold">
                      <span>Итого</span>
                      <span className="text-purple-600">
                        {total.toLocaleString()} ₽
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Telegram Bot Info */}
              <Card className="bg-gradient-to-r from-purple-100 to-pink-100">
                <CardHeader>
                  <CardTitle className="flex items-center text-purple-800">
                    <Icon name="MessageCircle" className="mr-2 h-5 w-5" />
                    Telegram Bot
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-purple-700 mb-4">
                    После оплаты вы получите доступ к нашему Telegram-боту для
                    управления заказами. Просто отправьте фото товара с
                    описанием и ценой!
                  </p>
                  <div className="bg-white rounded-lg p-3 text-center">
                    <p className="text-sm font-semibold text-gray-800">
                      @StyleShopBot
                    </p>
                    <p className="text-xs text-gray-600">
                      Нажмите на ссылку после оплаты
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 text-lg py-6"
              >
                <Icon name="CreditCard" className="mr-2 h-5 w-5" />
                Оформить заказ на {total.toLocaleString()} ₽
              </Button>

              <div className="text-center text-sm text-gray-600">
                <p>
                  Нажимая кнопку, вы соглашаетесь с условиями обработки
                  персональных данных
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
