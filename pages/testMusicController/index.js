import { useRef, useState } from "react";
import ControlPanel from "../../src/components/ControlPanel";
import Slider from "../../src/components/Slider";
import Song from "../../public/test2.mp3";

const testMusicController = () => {
  const [percentage, setPercentage] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const audioRef = useRef();

  const onChange = (e) => {
    const audio = audioRef.current;
    audio.currentTime = (audio.duration / 100) * e.target.value;
    setPercentage(e.target.value);
  };

  const play = () => {
    const audio = audioRef.current;
    audio.volume = 1;

    console.log(audio, audio.volume, audio.play());

    if (!isPlaying) {
      audio.play();
      setIsPlaying(true);
    }

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    }
  };

  const getCurrDuration = (e) => {
    const percent = (
      (e.currentTarget.currentTime / e.currentTarget.duration) *
      100
    ).toFixed(2);
    const time = e.currentTarget.currentTime;

    setPercentage(+percent);
    setCurrentTime(time.toFixed(2));
  };

  return (
    <div className="app-container">
      <h1>Audio Player</h1>
      <Slider percentage={percentage} onChange={onChange} />
      {/* <audio
        ref={audioRef}
        onTimeUpdate={getCurrDuration}
        onLoadedData={(e) => {
          setDuration(e.currentTarget.duration.toFixed(2));
          console.log(e.currentTarget.duration);
        }}
        // controls
        // autoPlay
      >
        <source src={Song} type="audio/*" />
      </audio> */}
      <audio
        src={Song}
        preload="auto"
        crossOrigin="anonymous"
        ref={audioRef}
        onTimeUpdate={getCurrDuration}
        onLoadedData={(e) => {
          setDuration(e.currentTarget.duration.toFixed(2));
          console.log(e.currentTarget.duration);
        }}
      ></audio>
      <ControlPanel
        play={play}
        isPlaying={isPlaying}
        duration={duration}
        currentTime={currentTime}
      />
    </div>
  );
};

export default testMusicController;
