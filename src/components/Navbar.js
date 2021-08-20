import Link from "next/link";
import { useState } from "react";
import { FaVolumeMute } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { v4 as uuidv4 } from "uuid";

const Navbar = () => {
  const [menuClicked, setMenuClicked] = useState(false);

  const toggleMenu = () => {
    setMenuClicked(!menuClicked);
  };
  return (
    <header className="navbar">
      <div className="navbar-container container">
        <Link href="/">
          <a>
            <img
              className="navbar__logo"
              src="logo.png"
              alt="logo"
              onClick={() => {
                setMenuClicked(false);
              }}
            />
          </a>
        </Link>

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
            <li
              className="nav__list__item"
              onClick={() => {
                setMenuClicked(false);
              }}
            >
              <Link href="/">
                <a>DashBoard</a>
              </Link>
            </li>
            <li
              className="nav__list__item"
              onClick={() => {
                setMenuClicked(false);
              }}
            >
              {/* need to make all id random using uuid? */}
              <Link href={`/workspace/${uuidv4()}`}>
                <a>Go to Play</a>
              </Link>
            </li>
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
