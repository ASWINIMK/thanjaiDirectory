import { FiMenu, FiBell, FiSun } from "react-icons/fi";

const Header = () => {
  return (
    <header className="w-full h-16 bg-[#1b2636] flex items-center justify-between px-6">
      {/* Left */}
      <div className="flex items-center gap-4">
        <FiMenu className="text-emerald-400 text-22 cursor-pointer" />
        <span className="text-white font-medium text-lg">
          Dashboard Overview
        </span>
      </div>

      {/* Right */}
      <div className="flex items-center gap-6">
        {/* Language */}
        <div className="flex items-center gap-2 text-gray-300 text-sm cursor-pointer">
          <img
            src="https://flagcdn.com/w20/us.png"
            alt="EN"
            className="w-5 h-3"
          />
          <span>ENGLISH</span>
        </div>

        {/* Theme icon */}
        <FiSun className="text-emerald-400 text-xl cursor-pointer" />

        {/* Notification */}
        <div className="relative">
          <FiBell className="text-gray-300 text-xl cursor-pointer" />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs h-5 w-5 flex items-center justify-center rounded-full">
            15
          </span>
        </div>

        {/* Profile */}
        <div className="h-9 w-9 rounded-full bg-gray-500 flex items-center justify-center text-white font-semibold cursor-pointer">
          S
        </div>
      </div>
    </header>
  );
};

export default Header;
