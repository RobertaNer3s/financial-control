import { Link } from "react-router-dom";
import "./Home.css";
// import { useEffect, useState } from "react";
// import { getUser } from "../../services/get-user";

const Home = () => {
  // const [user, setUser] = useState(null);

  // useEffect(() => {
  //   const handleGetUser = async () => {
  //     const response = await getUser();

  //     setUser(response);
  //   };

  //   handleGetUser();
  // }, []);

  return (
    <div className="container-itens">
      <div className="home-container">
        <div className="card">
          <section className="intro-section">
            <img
              src="/src/assets/imgs.jpg"
              alt="img-two"
              className="img-home"
            />
            <h2 className="item-text">A Importância de Investir</h2>
            <p className="item-text">
              Investir é fundamental para garantir um futuro financeiro seguro.
              Através de investimentos, você pode fazer seu dinheiro trabalhar
              para você, aumentando seu patrimônio ao longo do tempo. Além
              disso, investir pode ajudar a proteger seu dinheiro da inflação e
              alcançar seus objetivos financeiros.
            </p>
          </section>
        </div>
        <div className="card">
          <section className="variable-income-section">
            <h2 className="item-text">Renda Fixa</h2>
            <p className="item-text">
              Renda Fixa: Características: São investimentos onde a forma de
              remuneração é conhecida no momento da aplicação. Retorno:
              Geralmente oferecem retornos mais previsíveis e estáveis, baseados
              em taxas de juros, índices de correção monetária ou uma combinação
              desses fatores. Exemplos: Tesouro Direto (títulos públicos), CDB
              (Certificado de Depósito Bancário), LCI (Letra de Crédito
              Imobiliário), LCA (Letra de Crédito do Agronegócio), entre outros.
              Risco: Costumam apresentar menor risco em comparação com
              investimentos em renda variável.
            </p>
          </section>
        </div>

        <div className="card">
          <section className="variable-income-section">
            <h2 className="item-text">Renda Variável</h2>
            <p className="item-text">
              Renda Variável: Características: São investimentos cujo retorno
              não pode ser dimensionado no momento da aplicação, podendo variar
              positiva ou negativamente ao longo do tempo. Retorno: Oferecem a
              possibilidade de retornos mais altos em comparação com a renda
              fixa, porém com maior volatilidade e incerteza. Exemplos: Ações,
              fundos imobiliários, ETFs (Exchange Traded Funds), contratos
              futuros, entre outros. Risco: Apresentam um nível de risco maior
              devido à volatilidade dos preços de mercado e à possibilidade de
              perdas significativas em determinados períodos.
            </p>
          </section>
        </div>
        <div className="card">
          <div className="login-prompt">
            <p className="item-text">
              Faça login para saber mais novidades sobre investimentos e
              orientações.
            </p>
            <Link to="/login" className="login-button">
              Faça login
            </Link>
          </div>
        </div>
      </div>
      <div  className="container-img">
        <img src="/src/assets/home.jpg" alt="img-one" className="home-invest" />
      </div>
    </div>
  );
};

export default Home;
