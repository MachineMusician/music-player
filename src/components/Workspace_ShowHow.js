import { CSSTransition } from "react-transition-group";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import { useState } from "react";

const Workspace_showHow = () => {
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
      <div className="workspace__showHow">
        <div className="workspace__showHow__container">
          <BsChevronLeft
            className="workspace__showHow__container__chevron"
            onClick={handleLeftChev}
          />
          <div className="workspace__showHow__container__cards">
            <div className="workspace__showHow__container__cards__card">
              <CSSTransition
                in={activeMenu === 1}
                timeout={500}
                classNames="card1"
                unmountOnExit
              >
                <div className="card__contents">
                  <h4>1. Take a picture of your note.</h4>
                  <p>The result can be diffrent depends on the resolution.</p>
                </div>
              </CSSTransition>
            </div>

            <div className="workspace__showHow__container__cards__card">
              <CSSTransition
                in={activeMenu === 2}
                timeout={500}
                classNames="card2"
                unmountOnExit
              >
                <div className="card__contents">
                  <h4>Crop your image if you want.</h4>
                  <p>Make sure you have only one line of your note.</p>
                </div>
              </CSSTransition>
            </div>

            <div className="workspace__showHow__container__cards__card">
              <CSSTransition
                in={activeMenu === 3}
                timeout={500}
                classNames="card3"
                unmountOnExit
              >
                <div className="card__contents">
                  <h4>Hit the check button.</h4>
                  <p>Make sure you have only one line of your note.</p>
                </div>
              </CSSTransition>
            </div>

            <div className="workspace__showHow__container__cards__card">
              <CSSTransition
                in={activeMenu === 4}
                timeout={500}
                classNames="card4"
                unmountOnExit
              >
                <div className="card__contents">
                  <h4>Just wait a sec...</h4>
                </div>
              </CSSTransition>
            </div>
          </div>
          <BsChevronRight
            className="workspace__showHow__container__chevron"
            onClick={handleRightChev}
          />
        </div>
      </div>
    </>
  );
};

export default Workspace_showHow;
