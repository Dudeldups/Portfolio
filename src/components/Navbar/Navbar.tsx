import Github from "../Icon/Github";
import Linkedin from "../Icon/Linkedin";
import "./Navbar.scss";

export default function Navbar() {
  return (
    <div className="nav__outer-wrapper">
      <nav className="nav">
        <div className="nav__left-wrapper">
          <a className="nav__link nav__link--main" href="/">
            Dudeldups
          </a>
          <Github />
          <Linkedin />
        </div>

        <ul className="nav__list">
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
    </div>
  );
}
