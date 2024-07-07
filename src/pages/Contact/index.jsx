import "./Contact.css";
import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Mensagem enviada", { name, email, message });
  };

  return (
    <div className="contact-img">
      <img
        src="/src/assets/investimentos.jpg"
        alt="img-one"
        className="invest"
      />
      <img
        src="/src/assets/GettyImages-1311598658.jpg"
        alt="img-two"
        className="invest"
      />
      <img src="/src/assets/images (1).jpeg" alt="img-one" className="invest" />
      <img
        src="/src/assets/images.jpeg"
        alt="img-three"
        className="invest"
      />{" "}
      <div className="contact">
        <div className="contact-container">
          <h1 className="title">Fale Conosco</h1>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Nome:</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Mensagem:</label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>
            <button type="submit">Enviar</button>
          </form>
        </div>{" "}
      </div>
    </div>
  );
};

export default Contact;
