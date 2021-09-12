import synth from "synth-js";
import { GoPlus } from "react-icons/go";
import Slider from "../../src/components/Slider";
import ControlPanel from "../../src/components/ControlPanel";
import { useRef, useState } from "react";

const testMid = () => {
  // vars about this page
  const [fileString, setFileString] = useState("");

  // vars about the music controller
  const [percentage, setPercentage] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef();
  const [myWav, setMyWav] = useState(null);

  const play = () => {
    const audio = audioRef.current;
    audio.volume = 1;

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

  const onFileChange = (event) => {
    const {
      target: { files },
    } = event;
    const targetFile = files[0];
    // console.log(targetFile);

    if (files.length > 0) {
      const reader = new FileReader();

      reader.onload = (loadEvent) => {
        const { target: result } = loadEvent;
        try {
          var wav = synth.midiToWav(result.result).toBlob();
          var src = URL.createObjectURL(wav);
          setMyWav(src);
        } catch (error) {
          // console.log(error);
        }
      };
      reader.readAsArrayBuffer(targetFile);
    }
  };

  const handleClickCloseIcon = () => {
    setFileString("");
  };
  return (
    <>
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
          accept="audio/midi"
          onChange={onFileChange}
          style={{ visibility: "hidden" }}
        />
      </form>
      <div className="workspace__work-list__row___controller">
        <Slider percentage={percentage} onChange={onChange} />
        <audio
          src={myWav}
          ref={audioRef}
          onTimeUpdate={getCurrDuration}
          onLoadedData={(event) => {
            setDuration(event.currentTarget.duration.toFixed(2));
          }}
        />
        {/* {console.log(myWav)} */}

        <ControlPanel
          play={play}
          isPlaying={isPlaying}
          duration={duration}
          currentTime={currentTime}
        />
      </div>
    </>
  );
};

export default testMid;
