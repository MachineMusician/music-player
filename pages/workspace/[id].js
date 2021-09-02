import { useRouter } from "next/router";
import { useState } from "react";
import Head from "next/head";
import { GoPlus } from "react-icons/go";
import { BsQuestionCircleFill } from "react-icons/bs";
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai";
import Modal from "../../src/components/Modal";

const Workspace = () => {
  const router = useRouter();
  const { id } = router.query; // info of random user
  const [fileString, setFileString] = useState("");
  const [playMusic, setPlayMusic] = useState(false);
  const [clickInfo, setClickInfo] = useState(false);

  const onFileChange = (event) => {
    const {
      target: { files },
    } = event;
    const targetFile = files[0];

    const reader = new FileReader();
    reader.onloadend = (finishedEvent) => {
      // convert image file to base64 string
      const {
        currentTarget: { result },
      } = finishedEvent;
      setFileString(result);
    };
    if (targetFile) {
      reader.readAsDataURL(targetFile);
    }
  };

  const handlePlay = () => {
    setPlayMusic(!playMusic);
  };

  const handleDuration = () => {};

  return (
    <>
      <Head>
        <title>Go To Play</title>
        <meta name="description" content="playing music" />
      </Head>
      <div className="workspace-container">
        <div className="workspace">
          {fileString && ( //
            <>
              <div className="workspace__work">
                <img
                  className="workspace__work__img"
                  src={fileString}
                  width="100px"
                  height="100px"
                />
                <div className="workspace__work__controller">
                  {playMusic ? (
                    <AiFillPauseCircle
                      className="workspace__work__controller__icon"
                      onClick={handlePlay}
                    />
                  ) : (
                    <AiFillPlayCircle
                      className="workspace__work__controller__icon"
                      onClick={handlePlay}
                    />
                  )}
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value="0"
                    id="workspace__work__controller__slidebar"
                    onChange={handleDuration}
                  />
                </div>
              </div>
              <Modal />
            </>
          )}

          <form id="workspace__form">
            <label htmlFor="upload-image">
              <div className="workspace__uploadImg">
                <GoPlus className="workspace__uploadImg__icon" />
                <span>Upload image</span>
                <span>.jpg/.jpeg/.png</span>
              </div>
            </label>
            <input
              id="upload-image"
              className=""
              type="file"
              accept="image/*"
              onChange={onFileChange}
              style={{ visibility: "hidden" }}
            />
          </form>

          <BsQuestionCircleFill
            className="workspace-infoIcon"
            onClick={() => setClickInfo(!clickInfo)}
          />
          {clickInfo && (
            <div
              className={
                clickInfo ? "workspace__showHow active" : "workspace__showHow"
              }
            >
              <div className="workspace__showHow__container">
                <div className="workspace__showHow__container__cards">
                  <div className="workspace__showHow__container__cards__card">
                    <h4>title</h4>
                    <p>contents</p>
                  </div>
                  {/* <div className="workspace__showHow__container__cards__card">
                    <h4>title</h4>
                    <p>contents</p>
                  </div>
                  <div className="workspace__showHow__container__cards__card">
                    <h4>title</h4>
                    <p>contents</p>
                  </div> */}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Workspace;
