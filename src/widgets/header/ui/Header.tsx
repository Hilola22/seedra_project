import { memo, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "@/shared/assets/logo.svg";
import { AiFillInstagram, AiOutlineHeart } from "react-icons/ai";
import { IoCartOutline } from "react-icons/io5";
import { BsFacebook } from "react-icons/bs";
import { HiOutlineSearch } from "react-icons/hi";
import { HiMenu, HiX } from "react-icons/hi";

export const Header = memo(() => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "text-green-700 border-b-2 border-green-700 pb-1"
      : "text-gray-600 hover:text-green-700";

  return (
    <header className="w-full shadow-lg bg-white">
      <div className="container mx-auto px-4 flex items-center justify-between h-[72px]">
        <div
          className="cursor-pointer hover:opacity-80 transition"
          onClick={() => navigate("/")}
        >
          <img className="w-[97px] h-[21px]" src={logo} alt="logo" />
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-600 hover:text-green-700 focus:outline-none"
          aria-label="Toggle menu"
        >
          {menuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
        </button>

        <nav
          className={`flex flex-col md:flex-row md:items-center md:gap-6 absolute md:static top-[72px] left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none transition-transform transform md:translate-x-0 z-50 ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0`}
        >
          <ul className="flex flex-col md:flex-row uppercase font-normal text-[14px]">
            <li className="py-2 px-4 border-b border-gray-200 md:border-b-0 md:border-r md:border-gray-200">
              <NavLink to="/#" className="text-gray-600 hover:text-green-700">
                ALL PRODUCTS
              </NavLink>
            </li>
            <li className="py-2 px-4 border-b border-gray-200 md:border-b-0 md:border-r md:border-gray-200">
              <NavLink to="/about" className={linkClass}>
                ABOUT SEEDRA
              </NavLink>
            </li>
            <li className="py-2 px-4 border-b border-gray-200 md:border-b-0 md:border-r md:border-gray-200">
              <NavLink to="/#" className="text-gray-600 hover:text-green-700">
                OUR BLOG
              </NavLink>
            </li>
            <li className="py-2 px-4">
              <NavLink to="/#" className="text-gray-600 hover:text-green-700">
                CONTACTS
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <AiFillInstagram
            size={25}
            className="text-gray-400 hover:text-pink-500 cursor-pointer transition"
          />
          <BsFacebook
            size={21}
            className="text-gray-400 hover:text-blue-600 cursor-pointer transition"
          />
          <div className="max-w-[285px] w-full h-[48px] border border-gray-300 rounded-4xl px-4 flex items-center hover:border-green-600 focus-within:border-green-600 transition">
            <HiOutlineSearch size={20} className="text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="ml-2 w-full bg-transparent outline-none text-gray-700 placeholder-gray-500"
            />
          </div>
          <AiOutlineHeart
            size={23}
            className="text-green-700 hover:text-green-900 cursor-pointer transition"
          />
          <IoCartOutline
            size={23}
            className="text-green-700 hover:text-green-900 cursor-pointer transition"
          />
        </div>
      </div>
    </header>
  );
});
