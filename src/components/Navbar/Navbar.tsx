import { useState } from "react";
import Github from "../Icon/Github";
import Linkedin from "../Icon/Linkedin";
import "./Navbar.scss";

export default function Navbar() {
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);

  const toggleHamburgerMenu = () => setIsHamburgerMenuOpen(prev => !prev);

  return (
    <header className="header">
      <nav className="nav">
        <div className="nav__left-wrapper">
          <a className="nav__link nav__link--main" href="/">
            Dudeldups
          </a>
          <Github />
          <Linkedin />
        </div>

        <button
          className="nav__hamburger-btn"
          aria-controls="nav__list"
          aria-expanded={isHamburgerMenuOpen}
          onClick={() => toggleHamburgerMenu}>
          <span className="sr-only">
            {isHamburgerMenuOpen ? "Show" : "Hide" + " navigation list"}
          </span>
        </button>

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
