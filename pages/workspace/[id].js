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
  const [openCropperModal, setOpenCropperModal] = useState(false);
  const [currentCroppedData, setCurrentCroppedData] = useState("");
  const [currentWavData, setCurrentWavData] = useState(null);

  // vars about the music controller
  const [percentage, setPercentage] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef();

  const play = async () => {
    const audio = audioRef.current;
    audio.volume = 1;

    if (!isPlaying) {
      try {
        // ### API CALL ###
        const tmp = currentCroppedData.split(",");
        const sendData = await axios.post(API_URL, {
          test_image: tmp[1],
        });
        const dirArr = String(sendData.data).split("/");
        let dir = "";
        console.log("dirArr = " + dirArr);
        for (let i = 2; i < dirArr.length; i++) {
          dir += dirArr[i] + "/";
        }
        dir = dir.substr(0, dir.length - 1);
        dir = "/" + dir;
        // console.log("dir = " + dir);
        // dir = /output/test.wav
        // const wavTmp = wavList;
        // setWavList([...wavTmp, dir]); // TODO

        setCurrentWavData(dir);
        // const audio = new Audio("/output/test.wav");
        console.log("audio !! = " + audio.src);
        setIsPlaying(true);

        audio.play();
      } catch (error) {
        console.log(error);
      }
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

  const onFileChange = (event) => {
    const {
      target: { files },
    } = event;
    const targetFile = files[0];
    var reader = new FileReader();
    reader.onloadend = () => {
      setFileString(reader.result);
      setOpenCropperModal(true);
    };
    reader.readAsDataURL(targetFile);
  };

  // const handleClickCloseIcon = () => {
  //   setFileString("");
  // };

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
                          {/* <AiOutlineClose
                            className="workspace__work-list__row__top-bar__closeIcon"
                            onClick={handleClickCloseIcon}
                          /> */}
                        </div>
                        <img
                          className="workspace__work-list__row__cropped-image"
                          src={currentCroppedData}
                          alt="cropped image"
                        />
                        <div className="workspace__work-list__row___controller">
                          <Slider percentage={percentage} onChange={onChange} />
                          <audio
                            src={currentWavData}
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
                <Modal wavList={wavList} imageList={imageList} />
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
