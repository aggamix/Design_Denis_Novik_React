import { useState } from "react";
import Denis from "./Image/Denis.jpg";
import DenisMob from "./Image/Denis-mob.jpg";

const Header = () => {

  const [activeClass, setActiveClass] = useState('ENG');
  
  var activeEng = {}
  var activeRu = {}

  if (activeClass === 'ENG'){
    activeEng.color = 'black';
  } else {
    activeRu.color = 'black';
  }

  const toggleActiveEng = () => {
    setActiveClass(() => {
      if (activeClass === 'ENG'){
        return activeClass === 'ENG' ? 'ENG' : 'RU'; 
      } else if (activeClass === 'RU'){
        return activeClass === 'RU' ? 'ENG' : 'RU';
      }
    })
  }

  const toggleActiveRu = () => {
    setActiveClass(() => {
      if (activeClass === 'ENG'){
        return activeClass === 'ENG' ? 'RU' : 'ENG'; 
      } else if (activeClass === 'RU'){
        return activeClass === 'RU' ? 'RU' : 'ENG';
      }
    })
  }

  return (
    <header className="header">
      <div className="conteiner">
        <div className="header-info">
          <h1 className="title-1">
            Denis <br />
            Novik
          </h1>
          <p className="about-me__p">
            UX | UI designer <br />
            24 years old, Minsk
          </p>
          <div className="btn-language">
            <span className="btn__ru" style={activeRu} onClick={toggleActiveRu}>
              <button className="btn-language__item">RU</button>
            </span>
            <p className="btn-language__item">|</p>
            <span className="btn__eng" style={activeEng} onClick={toggleActiveEng}>
              <button className="btn-language__item">ENG</button>
            </span>
          </div>
        </div>
        <div className="header-photo">
          <img src={Denis} alt="" />
        </div>
        <div className="header-photo__mobile">
          <img src={DenisMob} alt="" />
        </div>
      </div>
    </header>
  );
};

export default Header;