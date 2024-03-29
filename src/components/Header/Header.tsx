import { useEffect, useState } from "react";
import Github from "../Icon/Github";
import Linkedin from "../Icon/Linkedin";
import "./Header.scss";

export default function Navbar() {
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);

  useEffect(() => {
    // remove scroll ability when hamburger menu is open
    document.body.style.overflow = isHamburgerMenuOpen ? "hidden" : "auto";
  }, [isHamburgerMenuOpen]);

  return (
    <header className="header">
      <div className="header__outer-wrapper">
        <a className="header__link" href="/">
          Dudeldups
        </a>
        <div className="header__inner-wrapper">
          <Github />
          <Linkedin />
        </div>
      </div>

      <button
        className="hamburger-btn"
        aria-controls="nav__list"
        onClick={() => setIsHamburgerMenuOpen(prev => !prev)}>
        <span className="sr-only">
          {isHamburgerMenuOpen ? "Show" : "Hide"} navigation list
        </span>
        <span className="hamburger-btn__bar"></span>
      </button>

      <nav className="nav" aria-expanded={isHamburgerMenuOpen}>
        <ul id="nav__list" className="nav__list">
          <li className="nav__item">
            <a className="nav__link" href="#about">
              About me
            </a>
          </li>
          <li className="nav__item">
            <a className="nav__link" href="#projects">
              Projects
            </a>
          </li>
          <li className="nav__item">
            <a className="nav__link" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
