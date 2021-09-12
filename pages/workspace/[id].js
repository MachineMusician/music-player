// import { useRouter } from "next/router";
import { useRef, useState } from "react";
import axios from "axios";
import Head from "next/head";
import { GoPlus } from "react-icons/go";
import { BsQuestionCircleFill } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import Modal from "../../src/components/Modal";
import Workspace_showHow from "../../src/components/Workspace_ShowHow";
import Slider from "../../src/components/Slider";
import ControlPanel from "../../src/components/ControlPanel";
import "cropperjs/dist/cropper.css";
import Workspace_Cropper from "../../src/components/Workspace_Cropper";

import Song from "../../public/test2.mp3";

const Workspace = () => {
  // const router = useRouter();
  // const { id } = router.query; // info of random user

  // vars about the API url
  const API_URL = "http://127.0.0.1:8000/test_img";
  const [imageList, setImageList] = useState([]);
  const [wavList, setWavList] = useState([]);

  // vars about this page
  const [fileString, setFileString] = useState("");
  const [clickInfo, setClickInfo] = useState(false);
  const [currentCroppedData, setCurrentCroppedData] = useState("");
  const [openCropperModal, setOpenCropperModal] = useState(false);

  // vars about the music controller
  const [percentage, setPercentage] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef();

  const play = async () => {
    const audio = audioRef.current;
    audio.volume = 1;
    try {
      // console.log("CROPPED:" + currentCroppedData);
      const tmp = currentCroppedData.split(",");
      const sendData = await axios.post(API_URL, {
        test_image: tmp[1],
      });
      console.log("hi");
      console.log(sendData);
    } catch (error) {
      console.log(error);
    }

    if (!isPlaying) {
      setIsPlaying(true);
      audio.play();
    }

    if (isPlaying) {
      setIsPlaying(false);
      audio.pause();
    }
  };

  const onChange = (event) => {
    const audio = audioRef.current;
    audio.currentTime = (audio.duration / 100) * event.target.value;
    setPercentage(event.target.value);
  };

  const getCurrDuration = (e) => {
    //
    const percent = (
      (e.currentTarget.currentTime / e.currentTarget.duration) *
      100
    ).toFixed(2);
    const time = e.currentTarget.currentTime;

    setPercentage(+percent);
    setCurrentTime(time.toFixed(2));
  };

  // const onFileChange = (event) => {
  //   const {
  //     target: { files },
  //   } = event;
  //   const targetFile = files[0];
  //   const reader = new FileReader();
  //   reader.onloadend = (finishedEvent) => {
  //     // convert image file to base64 string
  //     const {
  //       currentTarget: { result },
  //     } = finishedEvent;
  //     setFileString(result);
  //     setOpenCropperModal(true);
  //   };
  //   if (targetFile) {
  //     reader.readAsDataURL(targetFile);
  //   }
  // };

  const onFileChange = (event) => {
    const {
      target: { files },
    } = event;
    const targetFile = files[0];
    // var file = event.target.files[0];
    console.log(targetFile);
    var reader = new FileReader();
    reader.onloadend = function (finishedEvent) {
      setFileString(reader.result);
      setOpenCropperModal(true);
      console.log("RESULT", reader.result);
    };
    reader.readAsDataURL(targetFile);
  };

  const handleClickCloseIcon = () => {
    setFileString("");
  };

  return (
    <>
      <Head>
        <title>Go To Play</title>
        <meta name="description" content="playing music" />
      </Head>

      <div className="workspace-container">
        <div className="workspace">
          <div className="workspace__work">
            {imageList.length > 0 && ( //
              <>
                <ul className="workspace__work-list">
                  {imageList.map((item, index) => {
                    return (
                      <li className="workspace__work-list__row" key={index}>
                        <div className="workspace__work-list__row__top-bar">
                          <h5 className="workspace__work-list__row__top-bar__index">
                            # {index + 1}
                          </h5>
                          <AiOutlineClose
                            className="workspace__work-list__row__top-bar__closeIcon"
                            onClick={handleClickCloseIcon}
                          />
                        </div>
                        <img
                          className="workspace__work-list__row__cropped-image"
                          src={item}
                          alt="cropped image"
                        />
                        <div className="workspace__work-list__row___controller">
                          <Slider percentage={percentage} onChange={onChange} />
                          <audio
                            src={Song}
                            ref={audioRef}
                            onTimeUpdate={getCurrDuration}
                            onLoadedData={(event) => {
                              setDuration(
                                event.currentTarget.duration.toFixed(2)
                              );
                            }}
                          ></audio>
                          <ControlPanel
                            play={play}
                            isPlaying={isPlaying}
                            duration={duration}
                            currentTime={currentTime}
                          />
                        </div>
                      </li>
                    );
                  })}
                </ul>
                <Modal />
              </>
            )}
          </div>

          {openCropperModal && (
            <>
              <Workspace_Cropper
                fileString={fileString}
                setFileString={setFileString}
                setCurrentCroppedData={setCurrentCroppedData}
                setOpenCropperModal={setOpenCropperModal}
                imageList={imageList}
                setImageList={setImageList}
              />
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
