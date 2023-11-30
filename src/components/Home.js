import React from 'react';
import { Link } from 'react-router-dom';
import bannerImage from '../onibus.jpg';
import image1 from '../pix1.jpg';
import image2 from '../img2.jpg'; 
import image3 from '../img3.jpg'; 
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
        <p className="objective-text">
          O nosso objetivo é proporcionar uma solução moderna para os desafios enfrentados no transporte público, melhorando a experiência dos usuários e otimizando a operação dos serviços de transporte. Além disso, ele contribuirá para a modernização da infraestrutura de transporte e para a adoção de tecnologias inovadoras no setor.
        </p>

        <div className="additional-content">
          <h2>Experiência completa de serviços</h2>
          <div className="image-gallery">
            <div className="horizontal-images">
              <div className="image-container-square">
                <img src={image1} alt="Imagem 1" />
                <p>Pagamento online</p>
              </div>
              <div className="image-container-square">
                <img src={image2} alt="Imagem 2" />
                <p>Rastreamento em tempo real</p>
              </div>
              <div className="image-container-square">
                <img src={image3} alt="Imagem 3" />
                <p>Itinerários</p>
              </div>
            </div>
          </div>
        </div>

        {/* Rodapé */}
        <div className="footer">
          Disponível na App Store e Play Store: TrackTransit
        </div>
      </div>
    </div>
  );
};

export default Home;