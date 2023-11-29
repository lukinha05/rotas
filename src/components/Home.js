import React from 'react';
import { Link } from 'react-router-dom';
import bannerImage from '../onibus.jpg';
import './styles.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="banner" style={{ backgroundImage: `url(${bannerImage})` }}>
        <div className="overlay"></div>
        <div className="banner-content">
          <h1>O melhor app de Transporte público simplificado</h1>
        </div>
        <div className="top-right-links">
          <Link to="/servicos" className="link-bold">Serviços</Link>
          <Link to="/sobre" className="link-bold">Sobre</Link>
        </div>
      </div>
      <div className="separator-bar"></div>


      <div className="content-below-banner">
        <div className="download-section">
          <div className="dialog-box">
            <p>Deseja baixar o aplicativo?</p>
            <button className="download-button">Clique aqui</button>
          </div>
        </div>
      </div>
      <p className="objective-text">
          O nosso objetivo é proporcionar uma solução moderna para os desafios enfrentados no transporte público, melhorando a experiência dos usuários e otimizando a operação dos serviços de transporte. Além disso, ele contribuirá para a modernização da infraestrutura de transporte e para a adoção de tecnologias inovadoras no setor.
        </p>
    </div>
    
  );
};

export default Home;