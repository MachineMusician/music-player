import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import { useState } from "react";

const Workspace_showHow2 = () => {
  const [activeMenu, setActiveMenu] = useState(1);

  const handleLeftChev = () => {
    if (activeMenu === 1) return;
    return setActiveMenu(activeMenu - 1);
  };
  const handleRightChev = () => {
    if (activeMenu === 5) return;
    return setActiveMenu(activeMenu + 1);
  };
  return (
    <>
      <div className="carousel">
        <div className="carousel-contents">
          <button className="carousel__button carousel__button-left">
            <BsChevronLeft
              className="workspace__showHow__container__chevron"
              onClick={handleLeftChev}
            />
          </button>

          <div className="carousel__track-container">
            <ul className="carousel__track">
              <li className="carousel__slide">
                <h4>1. Take a picture of your note.</h4>
                <p>The result can be diffrent depends on the resolution.</p>
              </li>
              <li className="carousel__slide">
                <h4>1. Take a picture of your note.</h4>
                <p>The result can be diffrent depends on the resolution.</p>
              </li>
              <li className="carousel__slide">
                <h4>1. Take a picture of your note.</h4>
                <p>The result can be diffrent depends on the resolution.</p>
              </li>
            </ul>
          </div>

          <button className="carousel__button carousel__button-right">
            <BsChevronRight
              className="workspace__showHow__container__chevron"
              onClick={handleRightChev}
            />
          </button>
          <div className="carousel__nav">
            <button className="carousel__indicator current-slide"></button>
            <button className="carousel__indicator"></button>
            <button className="carousel__indicator"></button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Workspace_showHow2;
