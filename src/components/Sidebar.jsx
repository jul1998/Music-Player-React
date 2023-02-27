import { useState } from "react";
import { NavLink } from "react-router-dom";
import { RiCloseLine } from "react-icons/ri";
import { HiOutlineMenu } from "react-icons/hi";

import { logo } from "../assets";
import { links } from "../assets/constants";

const NavLinks = ({ handleClick }) => {

  return (
    <div className="mt-10">
      {links.map((item) => (
        <NavLink
          key={item.id}
          to={item.to}
          className="flex items-center gap-4
          text-white text-lg font-medium
          hover:text-[#1DB954] py-2 px-4 rounded-lg
          transition duration-200"
          activeClassName="bg-[#1DB954] text-white"
          onClick={() => handleClick && handleClick()}
        >
          <item.icon className="text-2xl" />
          {item.name}
        </NavLink>
      ))}
    </div>
  );
};

const Sidebar = () => {
  const [movileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div
        className="md:flex hidden flex-col w-[240px]
    py-10 px-4 bg-[#191624]"
      >
        <img
          src={logo}
          alt="logo"
          className="w-full h-14
            object-contain"
        ></img>
        <NavLinks />
      </div>

      

      <div className="absolute md:hidden block top-6 right-3">
        {movileMenuOpen ? (
          <RiCloseLine
            className="text-white text-2xl cursor-pointer"
            onClick={() => setMobileMenuOpen(false)}
          />
        ) : (
          <HiOutlineMenu
            className="text-white text-2xl cursor-pointer"
            onClick={() => setMobileMenuOpen(true)}
          />
        )}
      </div>

      <div       

        className={`md:hidden block fixed top-0 left-0
    w-full h-full bg-[#191624] z-10 transition duration-200
    transform ${movileMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex flex-col h-full justify-between">
          <div className="flex flex-col gap-4 px-4 py-10">
            <img
              src={logo}
              alt="logo"
              className="w-full h-14
          object-contain"
            ></img>
            <NavLinks handleClick={() => setMobileMenuOpen(false)} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
