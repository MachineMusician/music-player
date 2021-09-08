// import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import Head from "next/head";
import { GoPlus } from "react-icons/go";
import { BsQuestionCircleFill } from "react-icons/bs";
import {
  AiOutlineClose,
  AiFillPlayCircle,
  AiFillPauseCircle,
} from "react-icons/ai";
import Modal from "../../src/components/Modal";
import Workspace_showHow from "../../src/components/Workspace_ShowHow";
import "cropperjs/dist/cropper.css";
import Workspace_Cropper from "../../src/components/Workspace_Cropper";

const Workspace = () => {
  // const router = useRouter();
  // const { id } = router.query; // info of random user
  const [fileString, setFileString] = useState("");
  const [playMusic, setPlayMusic] = useState(false);
  const [clickInfo, setClickInfo] = useState(false);
  const [cropData, setCropData] = useState("");
  const [openCropperModal, setOpenCropperModal] = useState(false);

  const [waveFile, setWaveFile] = useState([]);
  const [imageFile, setImageFile] = useState([]);
  const [contents, setContents] = useState(null);

  const API_URL = "http://127.0.0.1:8000/add_music";
  const sendImage = async () => {
    try {
      await axios.post(API_URL, {
        image_link: "image_link_test",
      });
      // need to return wav file.
      // setWaveFile(wav);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (cropData !== "") {
      setImageFile(cropData); // 여러 수정된 이미지 저장
      // setCropData("");
    }
    if (imageFile !== "") {
      sendImage();
    }
  }, [cropData, imageFile]);

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
      setOpenCropperModal(true);
    };
    if (targetFile) {
      reader.readAsDataURL(targetFile);
    }
  };

  const handlePlay = () => {
    setPlayMusic(!playMusic);
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
            {fileString && ( //
              <>
                <ul className="workspace__work-list">
                  {/* {imageFiles.map((imageFile, index) => {
                    return ( */}
                  <li className="workspace__work-list__row">
                    <div className="workspace__work-list__row__top-bar">
                      <h5 className="workspace__work-list__row__top-bar__index">
                        # 1
                      </h5>
                      <AiOutlineClose
                        className="workspace__work-list__row__top-bar__closeIcon"
                        onClick={handleClickCloseIcon}
                      />
                    </div>
                    {cropData && (
                      <img
                        className="workspace__work-list__croppedImage"
                        src={cropData}
                        alt="cropped image"
                      />
                    )}
                    <div className="workspace__work-list__controller">
                      {playMusic ? (
                        <AiFillPauseCircle
                          className="workspace__work-list__controller__icon"
                          onClick={handlePlay}
                        />
                      ) : (
                        <AiFillPlayCircle
                          className="workspace__work-list__controller__icon"
                          onClick={handlePlay}
                        />
                      )}
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value="0"
                        id="workspace__work-list__controller__slidebar"
                      />
                    </div>
                  </li>
                  {/* );
                  })} */}
                  {/* 데이터를 받아서 for loop로 정보 뿌려주기 */}
                </ul>

                {openCropperModal && (
                  <>
                    <Workspace_Cropper
                      fileString={fileString}
                      setFileString={setFileString}
                      setCropData={setCropData}
                      setOpenCropperModal={setOpenCropperModal}
                    />
                  </>
                )}
                <Modal />
              </>
            )}
          </div>

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
