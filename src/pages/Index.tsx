import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Icon name="ShoppingBag" className="h-8 w-8 text-purple-600" />
              <span className="text-2xl font-bold text-gray-900">
                Style Shop
              </span>
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
                  0
                </span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Стильная одежда
              <br />
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                в Instagram стиле
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Уникальные вещи, которые подчеркнут твой стиль. Быстрая доставка
              по всей России.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-purple-600 hover:bg-purple-700"
              >
                <Link to="/catalog">
                  <Icon name="ShoppingBag" className="mr-2 h-5 w-5" />
                  Посмотреть каталог
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="#featured">
                  <Icon name="Heart" className="mr-2 h-5 w-5" />
                  Популярное
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="featured" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Хиты продаж
            </h2>
            <p className="text-lg text-gray-600">
              Самые популярные товары этого месяца
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Product 1 */}
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl bg-gray-100 aspect-square mb-4">
                <img
                  src="/img/8a5277b9-cfe2-4538-99f8-d3384e3b2421.jpg"
                  alt="Модная одежда"
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
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Стильный набор
              </h3>
              <p className="text-2xl font-bold text-purple-600">2 500 ₽</p>
            </div>

            {/* Product 2 */}
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl bg-gray-100 aspect-square mb-4">
                <img
                  src="/img/bc43d4c9-e05f-45cd-b445-2218296b53af.jpg"
                  alt="Футболка тигриная"
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
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Футболка тигриная
              </h3>
              <p className="text-2xl font-bold text-purple-600">700 ₽</p>
            </div>

            {/* Product 3 */}
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl bg-gray-100 aspect-square mb-4">
                <img
                  src="/img/1f68538b-7b80-4bd1-a61d-75e7e2400fb9.jpg"
                  alt="Уличная одежда"
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
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Уличная коллекция
              </h3>
              <p className="text-2xl font-bold text-purple-600">3 200 ₽</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
              <Link to="/catalog">
                Посмотреть все товары
                <Icon name="ArrowRight" className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Icon name="Truck" className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Быстрая доставка
              </h3>
              <p className="text-gray-600">
                Доставим в течение 1-3 дней по всей России
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Гарантия качества
              </h3>
              <p className="text-gray-600">Возврат товара в течение 14 дней</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Icon name="CreditCard" className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Удобная оплата
              </h3>
              <p className="text-gray-600">
                Оплата картой, переводом или наличными
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Icon name="ShoppingBag" className="h-8 w-8 text-purple-400" />
              <span className="text-2xl font-bold">Style Shop</span>
            </div>
            <p className="text-gray-400 mb-6">
              Стильная одежда для современных людей
            </p>
            <div className="flex justify-center space-x-6">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Icon name="Instagram" className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Icon name="MessageCircle" className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Icon name="Phone" className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
