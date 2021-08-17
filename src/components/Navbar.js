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
    /*
    <div className="navbar-column">
          <img
            className="navbar__logo"
            src="logo.png"
            alt="logo"
            onClick={() => {
              setMenuClicked(false);
            }}
          />
        </div>

        <div
          className={
            menuClicked
              ? "navbar-column desktop-only deActive"
              : "navbar-column desktop-only"
          }
        >
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
          {menuClicked ? <AiOutlineClose /> : <GiHamburgerMenu />}
        </div> */

    <header className="navbar">
      <div className="navbar-container container">
        <img
          className="navbar__logo"
          src="logo.png"
          alt="logo"
          onClick={() => {
            setMenuClicked(false);
          }}
        />
        <div className="navbar__menu-icon" onClick={toggleMenu}>
          {menuClicked ? <AiOutlineClose /> : <GiHamburgerMenu />}
        </div>

        <nav className="navbar__nav">
          <ul className="nav__list">
            <li className="nav__list__item">
              <input
                className="list__item__input"
                type="text"
                placeholder="search here!!"
              />
              <FaVolumeMute className="list__item__volume" />
            </li>
            <li className="nav__list__item">DashBoard</li>
            <li className="nav__list__item">Go to Play</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
