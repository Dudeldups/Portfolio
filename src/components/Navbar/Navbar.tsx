import "./Navbar.scss";

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="nav__wrapper">
        <a href="/">Dudeldups</a>

        <ul className="nav__list">
          <li>
            <a href="#about">About me</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
