import { useState } from 'react';
import burgerIcon from './Image/Burger.svg';
import crossIcon from './Image/Cross.svg';

const NavBarMob = () => {

  const [icons, setIcons] = useState(burgerIcon);

  const toggleIcon = () => {
    setIcons(() => {
      return icons === burgerIcon ? crossIcon : burgerIcon;
    });
  }

  return (
    <>
      <input type="checkbox" id="burger" />
      <label for="burger" className="burger-menu">
        <img src={icons} alt="" className="burger-menu__icons" onClick={toggleIcon}/>
      </label>
    </>
  );
};

export default NavBarMob;
