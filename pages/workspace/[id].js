// import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Head from "next/head";
import { GoPlus } from "react-icons/go";
import { BsQuestionCircleFill } from "react-icons/bs";
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai";
import Modal from "../../src/components/Modal";
import Workspace_showHow from "../../src/components/Workspace_ShowHow";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";

const Workspace = () => {
  // const router = useRouter();
  // const { id } = router.query; // info of random user
  const [fileString, setFileString] = useState("");
  const [playMusic, setPlayMusic] = useState(false);
  const [clickInfo, setClickInfo] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [cropper, setCropper] = useState(null);
  const [cropData, setCropData] = useState("");

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

  const getCropData = () => {
    if (typeof cropper !== "undefined") {
      setCropData(cropper.getCroppedCanvas().toDataURL());
    }
  };

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
                {/* <img // target here
                  className="workspace__work__img"
                  src={fileString}
                  width="100px"
                  height="100px"
                /> */}
                <Cropper
                  src={fileString}
                  guides={true}
                  style={{ height: "100%", width: "100%" }}
                  zoomTo={0.5}
                  initialAspectRatio={1}
                  viewMode={1}
                  minCropBoxHeight={10}
                  minCropBoxWidth={10}
                  background={false}
                  responsive={true}
                  autoCropArea={1}
                  checkOrientation={false}
                  onInitialized={(instance) => {
                    setCropper(instance);
                  }}
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
                  />
                  <button onClick={getCropData}>Crop Image</button>
                </div>
              </div>
              <img src={cropData} alt="cropped" />
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

          {clickInfo && <Workspace_showHow />}
        </div>
      </div>
    </>
  );
};

export default Workspace;
