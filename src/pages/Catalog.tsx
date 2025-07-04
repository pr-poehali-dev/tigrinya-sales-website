import { Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const products = [
  {
    id: 1,
    name: "Футболка тигриная",
    price: 700,
    image: "/img/bc43d4c9-e05f-45cd-b445-2218296b53af.jpg",
    category: "Футболки",
    inStock: true,
  },
  {
    id: 2,
    name: "Стильный набор",
    price: 2500,
    image: "/img/8a5277b9-cfe2-4538-99f8-d3384e3b2421.jpg",
    category: "Наборы",
    inStock: true,
  },
  {
    id: 3,
    name: "Уличная коллекция",
    price: 3200,
    image: "/img/1f68538b-7b80-4bd1-a61d-75e7e2400fb9.jpg",
    category: "Уличная одежда",
    inStock: true,
  },
  {
    id: 4,
    name: "Джинсы классические",
    price: 1800,
    image: "/img/8a5277b9-cfe2-4538-99f8-d3384e3b2421.jpg",
    category: "Джинсы",
    inStock: true,
  },
  {
    id: 5,
    name: "Свитшот модный",
    price: 1200,
    image: "/img/1f68538b-7b80-4bd1-a61d-75e7e2400fb9.jpg",
    category: "Свитшоты",
    inStock: false,
  },
  {
    id: 6,
    name: "Кроссовки стильные",
    price: 4500,
    image: "/img/8a5277b9-cfe2-4538-99f8-d3384e3b2421.jpg",
    category: "Обувь",
    inStock: true,
  },
];

const categories = [
  "Все",
  "Футболки",
  "Наборы",
  "Уличная одежда",
  "Джинсы",
  "Свитшоты",
  "Обувь",
];

const Catalog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Все");
  const [cart, setCart] = useState<number[]>([]);

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "Все" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const addToCart = (productId: number) => {
    setCart((prev) => [...prev, productId]);
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
              <Link to="/catalog" className="text-purple-600 font-semibold">
                Каталог
              </Link>
              <Link
                to="/cart"
                className="relative text-gray-700 hover:text-purple-600 transition-colors"
              >
                <Icon name="ShoppingCart" className="h-6 w-6" />
                <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cart.length}
                </span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Каталог товаров
          </h1>
          <p className="text-lg text-gray-600">
            Найди свой стиль среди наших уникальных вещей
          </p>
        </div>

        {/* Search */}
        <div className="mb-8">
          <div className="relative max-w-md mx-auto">
            <Icon
              name="Search"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
            />
            <Input
              type="text"
              placeholder="Поиск товаров..."
              className="pl-10 pr-4 py-2 w-full"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Categories */}
        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={
                  selectedCategory === category
                    ? "bg-purple-600 hover:bg-purple-700"
                    : ""
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-3xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative overflow-hidden aspect-square">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <Button
                    size="sm"
                    variant="secondary"
                    className="rounded-full"
                  >
                    <Icon name="Heart" className="h-4 w-4" />
                  </Button>
                </div>
                {!product.inStock && (
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <Badge variant="destructive" className="text-lg px-4 py-2">
                      Нет в наличии
                    </Badge>
                  </div>
                )}
              </div>

              <div className="p-6">
                <div className="mb-2">
                  <Badge variant="secondary" className="text-xs">
                    {product.category}
                  </Badge>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {product.name}
                </h3>
                <p className="text-3xl font-bold text-purple-600 mb-4">
                  {product.price.toLocaleString()} ₽
                </p>

                <div className="flex gap-2">
                  <Button
                    className="flex-1 bg-purple-600 hover:bg-purple-700"
                    onClick={() => addToCart(product.id)}
                    disabled={!product.inStock}
                  >
                    <Icon name="ShoppingCart" className="mr-2 h-4 w-4" />В
                    корзину
                  </Button>
                  <Button variant="outline" size="icon">
                    <Icon name="Eye" className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <Icon
              name="Search"
              className="h-16 w-16 text-gray-400 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Товары не найдены
            </h3>
            <p className="text-gray-600">
              Попробуйте изменить критерии поиска или выбрать другую категорию
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Catalog;
