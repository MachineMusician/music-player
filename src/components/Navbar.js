import { useState } from "react";
import { FaVolumeMute } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [menuClicked, setMenuClicked] = useState(false);

  const toggleMenu = () => {
    setMenuClicked(!menuClicked);
  };

  return (
    <header className="navbar">
      <div className="navbar-column">
        <img className="navbar__logo" src="logo.png" alt="logo" />
      </div>

      <div className="navbar-column desktop-only">
        <div className="navbar__controlPart">
          <input
            className="navbar__controlPart__input"
            type="text"
            placeholder="search here!!"
          />
          <FaVolumeMute className="navbar__controlPart__volume" />
        </div>

        <nav className="navbar__nav">
          <ul className="nav__list">
            <li className="nav__list__item">DashBoard</li>
            <li className="nav__list__item">Go to Play</li>
          </ul>
        </nav>
      </div>

      <div className="navbar-column navbar__controls" onClick={toggleMenu}>
        {menuClicked ? <GiHamburgerMenu /> : <AiOutlineClose />}
      </div>
    </header>
  );
};

export default Navbar;
