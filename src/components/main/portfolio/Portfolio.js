import "./style.css";
import Store from './Image/Store.jpg';
import Reebok from './Image/Reebok.jpg';
import Braun from './Image/Braun.jpg';

const Portfolio = () => {
  return (
    <div className="portfolio" id="Portfolio">
      <div className="conteiner">
        <div className="portfolio-content">
          <h2 className="title-2">Portfolio</h2>
          <div className="portfolio__card">
            <img src={Store} alt="" />
            <p className="main__p">
              <a href="#" className="portfolio__link">
                Online fashion store - Homepage
              </a>
            </p>
          </div>
          <div className="portfolio__card">
            <img src={Reebok} alt="" />
            <p className="main__p">
              <a href="#" className="portfolio__link">
                Reebok Store - Concept
              </a>
            </p>
          </div>
          <div className="portfolio__card">
            <img src={Braun} alt="" />
            <p className="main__p">
              <a href="#" className="portfolio__link">
                Braun Landing Page - Concept
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
