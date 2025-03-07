import { FaInstagram, FaFacebookF, FaPinterestP, FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#6B6B52] text-white py-8 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-bold mb-2">Без Название</h3>
          <p className="text-sm text-gray-300">
            Мы – команда, которая заботится о вашем комфорте и уюте. Мы предлагаем только
            качественное постельное бельё, которое подарит вам уютные ночи и стильный интерьер.
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="bg-black p-2 rounded-full text-white">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="bg-black p-2 rounded-full text-white">
              <FaFacebookF size={20} />
            </a>
            <a href="#" className="bg-black p-2 rounded-full text-white">
              <FaPinterestP size={20} />
            </a>
            <a href="#" className="bg-black p-2 rounded-full text-white">
              <FaTiktok size={20} />
            </a>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-2">КАТЕГОРИЙ</h3>
          <ul className="space-y-1 text-sm text-gray-300">
            <li>Подушки</li>
            <li>Одеяло</li>
            <li>Комплекты</li>
            <li>Эстетика</li>
            <li>Недавно Добавлены</li>
            <li>Тренды</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-2">SUPPORT</h3>
          <ul className="space-y-1 text-sm text-gray-300">
            <li>Help & Support</li>
            <li>Teams & Conditions</li>
            <li>Privacy Policy</li>
            <li>Help</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-2">НОВОЕ ПИСЬМО</h3>
          <div className="flex space-x-2 mb-2">
            <input
              type="email"
              placeholder="Your email"
              className="p-2 w-full rounded text-black"
            />
            <button className="bg-blue-500 px-4 py-2 rounded">Subscribe</button>
          </div>
          <p className="text-sm text-gray-300">
            Клиент очень важен, за клиентом пойдёт клиент. Ибо никакого тинциданта не было.
          </p>
        </div>
      </div>
      <div className="border-t border-gray-600 mt-6 pt-4 flex flex-col md:flex-row justify-between text-sm text-gray-400">
        <p>© 2025 – сайт – Дизайнер DEFAulTN</p>
        <div className="flex space-x-4">
          <span>💳</span>
          <span>💳</span>
          <span>💳</span>
        </div>
      </div>
    </footer>
  );
}
