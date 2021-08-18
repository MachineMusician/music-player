import axios from "axios";
import { useEffect, useState } from "react";
import { FaVolumeMute } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [menuClicked, setMenuClicked] = useState(false);
  const toggleMenu = () => {
    setMenuClicked(!menuClicked);
  };
  const API_URL =
    "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";

  const getData = () => {
    axios.get(API_URL).then((res) => console.log(res));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
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

        <nav className={menuClicked ? "navbar__nav active" : "navbar__nav"}>
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
        <div className="navbar__menu-icon" onClick={toggleMenu}>
          {menuClicked ? <AiOutlineClose /> : <GiHamburgerMenu />}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
