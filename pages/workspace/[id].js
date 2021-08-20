import { useRouter } from "next/router";
import { useState } from "react";
import Head from "next/head";
import { GoPlus } from "react-icons/go";
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai";

const Workspace = () => {
  const router = useRouter();
  const { id } = router.query; // info of random user
  const [fileString, setFileString] = useState("");
  const [playMusic, setPlayMusic] = useState(false);

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
      <div className="workspace">
        {fileString && ( //
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
        )}
        <form id="workspace__form">
          <label htmlFor="upload-image">
            <div className="workspace__uploadImg">
              <GoPlus className="workspace__uploadImg__icon" />
              <span>Upload images!!</span>
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
      </div>
    </>
  );
};

export default Workspace;
