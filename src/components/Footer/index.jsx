import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container-footer">
        <div className="footer-content">
          <p>&copy; 2024 Site de Investimentos. Todos os direitos reservados.</p>
          <nav className="footer-nav">
            <ul>
              <li><a href="#">Sobre</a></li>
              <li><a href="#">Contato</a></li>
              <li><a href="#">Política de Privacidade</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;