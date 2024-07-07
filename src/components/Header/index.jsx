import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img
          src="/src/assets/favicon-logo.png"
          alt="Logo da Empresa"
          className="logo"
        />
        <span className="company-name">Invest.com</span>
      </div>
      <nav className="nav-desktop">
        <ul className="nav-links">
          <li>
            <Link to="/">Início</Link>
          </li>
          <li>
            <a href="/fale-conosco">Fale Conosco</a>
          </li>
          <li>
            <a href="/login">Login</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
