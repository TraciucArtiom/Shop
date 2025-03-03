import { FaShoppingCart, FaUser } from "react-icons/fa";
import { Search, ShoppingCart, User } from "lucide-react";

const Navbar = () => {
  return (
    <header className="bg-[rgba(104,107,85,1)] text-white p-4 flex items-center justify-around">
      {/* Логотип и название */}
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
          <span className="text-black font-bold text-[14px]">L</span> {/* Временный логотип */}
        </div>
        <h1 className="text-xl font-semibold text-[14px]">Название сайта</h1>
      </div>

      {/* Поисковик */}
      <div className="flex relative w-1/3">
        <input
          type="text"
          placeholder="Найти..."
          className="w-full p-2 pl-10 rounded-lg text-black bg-white text-[14px]"
        />
        <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-black text-[14px]" />
      </div>

      {/* Кнопки корзины и профиля */}
      <div className="flex items-center gap-4">
        <button className="p-2 bg-white text-black rounded-full text-[14px]">
          <ShoppingCart />
        </button>
        <button className="p-2 bg-white text-black rounded-full text-[14px]">
          <User />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
