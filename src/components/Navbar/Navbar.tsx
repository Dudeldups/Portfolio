import "./Navbar.scss";

export default function Navbar() {
  return (
    <div className="nav__wrapper">
      <nav className="nav">
        <a className="nav__link nav__link--main" href="/">
          Dudeldups
        </a>

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
