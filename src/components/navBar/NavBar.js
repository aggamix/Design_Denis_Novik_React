import { useState } from "react";

const NavBar = () => {

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
    <nav className="nav" id="Home">
      <div className="conteiner">
        <div className="nav__menu">
          <ul className="menu">
            <li className="menu-item">
              <a href="#Home" className="menu-item__link lng">
                Home
              </a>
            </li>
            <li className="menu-item">
              <a href="#AboutMe" className="menu-item__link">
                About me
              </a>
            </li>
            <li className="menu-item">
              <a href="#Skills" className="menu-item__link">
                Skills
              </a>
            </li>
            <li className="menu-item">
              <a href="#Portfolio" className="menu-item__link">
                Portfolio
              </a>
            </li>
            <li className="menu-item">
              <a href="#Contacts" className="menu-item__link">
                Contacts
              </a>
            </li>
          </ul>

          <div className="btn-language__mobile">
            <span className="btn-mobile__ru" style={activeRu} onClick={toggleActiveRu}>
              <button className="btn-language__item">RU</button>
            </span>
            <p className="btn-language__item">|</p>
            <span className="btn-mobile__eng" style={activeEng} onClick={toggleActiveEng}>
              <button className="btn-language__item">ENG</button>
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
