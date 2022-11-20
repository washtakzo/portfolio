import React, { useState } from "react";
import { HiBars3 } from "react-icons/hi2";
import { HiOutlineXMark } from "react-icons/hi2";
import CTAButton from "./CTAButton";
import "./Header.css";

const Header = () => {
  const [isBurgerMenuClicked, setIsBurgerMenuClicked] = useState(false);

  const mobileBurgerButton = (
    <button
      className="h-10 w-auto lg:hidden"
      onClick={() => setIsBurgerMenuClicked((prevState) => !prevState)}
    >
      {!isBurgerMenuClicked && <HiBars3 className="w-[100%] h-[100%]" />}
      {isBurgerMenuClicked && <HiOutlineXMark className="w-[100%] h-[100%]" />}
    </button>
  );
  const mobileBurgerMenu = isBurgerMenuClicked && (
    <div className="relative">
      <div
        className={`header__burger_menu pt-5 h-72 shadow-xl z-10 absolute w-full bg-white 
          ${isBurgerMenuClicked && "header__burger_menu_isOpen"}`}
      >
        <a
          href=""
          className="block w-full text-center text-primary text-xl p-5 font-normal hover:text-secondary"
        >
          Projets
        </a>
        <a
          href=""
          className="block w-full text-center text-primary text-xl p-5 font-normal hover:text-secondary"
        >
          Linkedin
        </a>
        <CTAButton className="block m-auto mt-2">Contactez-moi</CTAButton>
      </div>
    </div>
  );
  const computerScreenLinks = (
    <div className="hidden lg:flex justify-between items-center w-[460px]">
      <a
        href=""
        className="text-center text-primary text-xl p-5 font-normal hover:text-secondary"
      >
        Projets
      </a>
      <a
        href=""
        className="text-center text-primary text-xl p-5 font-normal hover:text-secondary"
      >
        Linkedin
      </a>
      <CTAButton className="">Contactez-moi</CTAButton>
    </div>
  );

  return (
    <header className="mx-auto lg:w-[90%] xl:w-[70%]">
      <div className="flex items-center justify-between p-4">
        <h1 className="font-serif text-3xl text-primary">
          Zoher Ouazzar<span className="text-secondary">.</span>
        </h1>
        {mobileBurgerButton}
        {computerScreenLinks}
      </div>
      {mobileBurgerMenu}
    </header>
  );
};

export default Header;
