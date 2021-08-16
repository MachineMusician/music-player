import { FaVolumeMute } from "react-icons/fa";

const Navbar = () => {
  return (
    <header className="navbar">
      <img className="navbar__logo" src="logo.png" alt="logo" />

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
    </header>
  );
};

export default Navbar;
