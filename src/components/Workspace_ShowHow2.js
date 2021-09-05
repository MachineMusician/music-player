import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import { useEffect, useState } from "react";

const Workspace_showHow2 = () => {
  const [activeMenu, setActiveMenu] = useState(0);
  const [clickedChev, setClickedChev] = useState("");
  const [slideWidth, setSlideWidth] = useState(null);

  const handleLeftChev = () => {
    if (activeMenu === 0) return;
    setActiveMenu(activeMenu - 1);
    setClickedChev("left");
  };
  const handleRightChev = () => {
    if (activeMenu === 3) return;
    setActiveMenu(activeMenu + 1);
    setClickedChev("right");
  };

  const handleIndicator = () => {};

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
              <li
                className={
                  activeMenu === 0
                    ? "carousel__slide active"
                    : "carousel__slide"
                }
              >
                <h4>1. Take a picture of your note.</h4>
                <p>The result can be diffrent depends on the resolution.</p>
              </li>
              <li
                className={
                  activeMenu === 1
                    ? "carousel__slide active"
                    : "carousel__slide"
                }
              >
                <h4>2. Crop your image.</h4>
                <p>
                  Make sure you have only one line of note in your cropped
                  picture.
                </p>
              </li>
              <li
                className={
                  activeMenu === 2
                    ? "carousel__slide active"
                    : "carousel__slide"
                }
              >
                <h4>3. Hit the check button and wait a second.</h4>
                <p>It won't take a long time to get result.</p>
              </li>
              <li
                className={
                  activeMenu === 3
                    ? "carousel__slide active"
                    : "carousel__slide"
                }
              >
                <h4>4. Check an output and share your work!</h4>
                <p>Click this button to make your work public on dashboard.</p>
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
            <button
              className={
                activeMenu === 0
                  ? "carousel__indicator current-slide"
                  : "carousel__indicator"
              }
              onClick={() => setActiveMenu(0)}
            ></button>
            <button
              className={
                activeMenu === 1
                  ? "carousel__indicator current-slide"
                  : "carousel__indicator"
              }
              onClick={() => setActiveMenu(1)}
            ></button>
            <button
              className={
                activeMenu === 2
                  ? "carousel__indicator current-slide"
                  : "carousel__indicator"
              }
              onClick={() => setActiveMenu(2)}
            ></button>
            <button
              className={
                activeMenu === 3
                  ? "carousel__indicator current-slide"
                  : "carousel__indicator"
              }
              onClick={() => setActiveMenu(3)}
            ></button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Workspace_showHow2;
