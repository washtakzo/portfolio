import React, { useState } from "react";
import { HiBars3 } from "react-icons/hi2";
import { HiOutlineXMark } from "react-icons/hi2";
import CTAButton from "./CTAButton";
import "./Header.css";

const Header = () => {
  const [isBurgerMenuClicked, setIsBurgerMenuClicked] = useState(false);
  const scrollToSectionId = (id: string) => {
    const section = document.getElementById(id);
    section && section.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const mobileBurgerButton = (
    <button
      className="h-6 w-auto sm:h-10 lg:hidden"
      onClick={() => setIsBurgerMenuClicked((prevState) => !prevState)}
    >
      {!isBurgerMenuClicked && <HiBars3 className="h-[100%] w-[100%]" />}
      {isBurgerMenuClicked && <HiOutlineXMark className="h-[100%] w-[100%]" />}
    </button>
  );
  const mobileBurgerMenu = isBurgerMenuClicked && (
    <div className="relative lg:hidden">
      <div
        className={`header__burger_menu absolute z-10 h-72 w-full cursor-pointer bg-white pt-5 shadow-xl 
          ${isBurgerMenuClicked && "header__burger_menu_isOpen"}`}
      >
        <a
          onClick={(e) => {
            e.preventDefault();
            setIsBurgerMenuClicked(false);
            scrollToSectionId("projects");
          }}
          className="block w-full p-5 text-center text-xl font-normal text-primary hover:text-secondary"
        >
          Projets
        </a>
        <a
          href="https://www.linkedin.com/in/zoher-ouazzar-3b12b6b8/"
          target="_blank"
          className="block w-full p-5 text-center text-xl font-normal text-primary hover:text-secondary"
          onClick={() => setIsBurgerMenuClicked(false)}
        >
          Linkedin
        </a>
        <CTAButton
          className="m-auto mt-2 block"
          link="https://calendly.com/zoher-ouazzar/30min"
        >
          Contactez-moi
        </CTAButton>
      </div>
    </div>
  );
  const computerScreenLinks = (
    <div className="hidden w-[460px] items-center justify-between lg:flex">
      <a
        className="cursor-pointer p-5 text-center text-xl font-normal text-primary hover:text-secondary"
        onClick={(e) => {
          e.preventDefault();
          scrollToSectionId("projects");
        }}
      >
        Projets
      </a>
      <a
        href="https://www.linkedin.com/in/zoher-ouazzar-3b12b6b8/"
        target="_blank"
        className="p-5 text-center text-xl font-normal text-primary hover:text-secondary"
      >
        Linkedin
      </a>
      <CTAButton className="" link="https://calendly.com/zoher-ouazzar/30min">
        Contactez-moi
      </CTAButton>
    </div>
  );

  return (
    <header className="mx-auto max-w-[1500px] lg:w-[90%] xl:w-[70%]">
      <div className="flex items-center justify-between p-4">
        <h1
          className="cursor-pointer font-serif text-xl text-primary sm:text-3xl"
          onClick={() => location.reload()}
        >
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
