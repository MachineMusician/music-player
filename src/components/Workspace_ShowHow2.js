import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import { useEffect, useState } from "react";

const Workspace_showHow2 = () => {
  const [activeMenu, setActiveMenu] = useState(1);
  const [clickedChev, setClickedChev] = useState("");
  const [slideWidth, setSlideWidth] = useState(null);

  const handleLeftChev = () => {
    if (activeMenu === 1) return;
    setActiveMenu(activeMenu - 1);
    setClickedChev("left");
  };
  const handleRightChev = () => {
    if (activeMenu === 5) return;
    setActiveMenu(activeMenu + 1);
    setClickedChev("right");
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
              <li
                className={
                  activeMenu === 1
                    ? "carousel__slide active"
                    : "carousel__slide"
                }
              >
                <h4>1. Take a picture of your note.</h4>
                <p>The result can be diffrent depends on the resolution.</p>
              </li>
              <li
                className={
                  activeMenu === 2
                    ? "carousel__slide active"
                    : "carousel__slide"
                }
              >
                <h4>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                  similique non porro obcaecati illum tempore iste repellat,
                  corrupti sapiente. Praesentium odio eaque dolor omnis ipsam
                  possimus voluptatum eveniet iusto incidunt.
                </h4>
                <p>The result can be diffrent depends on the resolution.</p>
              </li>
              <li
                className={
                  activeMenu === 3
                    ? "carousel__slide active"
                    : "carousel__slide"
                }
              >
                <h4>3. Take a picture of your note.</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                  dignissimos odit commodi magni perferendis provident,
                  voluptatem ad minima dicta reiciendis nobis labore quisquam
                  veritatis quae eaque incidunt hic exercitationem libero.
                </p>
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
