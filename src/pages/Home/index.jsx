import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
    <h1>Bem-vindo Invest.com</h1>
    <section className="intro-section">
      <h2>A Importância de Investir</h2>
      <p>
        Investir é fundamental para garantir um futuro financeiro seguro. Através de investimentos, você pode fazer seu dinheiro trabalhar para você, aumentando seu patrimônio ao longo do tempo. 
        Além disso, investir pode ajudar a proteger seu dinheiro da inflação e alcançar seus objetivos financeiros.
      </p>
    </section>
    <section className="variable-income-section">
      <h2>Renda Variável</h2>
      <p>
        A renda variável inclui investimentos como ações, fundos imobiliários e ETFs. Esses tipos de investimentos podem oferecer retornos significativos, mas também vêm com um nível maior de risco. 
        É importante entender bem o mercado e diversificar seus investimentos para gerenciar riscos.
      </p>
    </section>
    <div className="login-prompt">
      <p>Faça login para saber mais novidades sobre investimentos e orientações.</p>
      <Link to="/login" className="login-button">Login</Link>
    </div>
  </div>
);
};

export default Home;
