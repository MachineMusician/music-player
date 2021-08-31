import Head from "next/head";
import { useState } from "react";
import { AiOutlineGithub } from "react-icons/ai";
import { RiReactjsLine } from "react-icons/ri";
import { GiSoapExperiment } from "react-icons/gi";

export default function Home() {
  const [position, setPosition] = useState(0);
  const SCROLL_SPEED = 10;

  const onWheel = (event) => {
    event.preventDefault();
    event.currentTarget.scrollLeft += event.deltaY / SCROLL_SPEED;
    setPosition(event.currentTarget.scrollLeft);
  };

  return (
    <>
      <Head>
        <title>Music Player</title>
        <meta
          name="description"
          content="It's a website for playing music, using AI"
        />
      </Head>
      <div className="welcome">
        <div className="welcome__container" onWheel={onWheel}>
          {/* <section style={{ top: "15%", left: "10%" }}>
            <div
              className="welcome__container__content ani1"
              // style={{
              //   transform: `translateX(-${position}px)`,
              // }}
            >
              <h2 className={position > 80 ? "effect active" : "effect"}>
                Take a picture of your note!!
              </h2>
              <p>You can play your note before you play it.</p>
            </div>
          </section> */}

          <div className="welcome__container__contents">
            <h2 className="welcome__container__contents__title">
              Welcome to music player!!
            </h2>
            <div
              className={
                position > 30
                  ? "welcome__container__contents__content active a"
                  : "welcome__container__contents__content a"
              }
              // style={{
              //   transform: `translateX(-${position}px)`,
              // }}
            >
              <span>Test your notes right now</span>
              <img src="./headphone_and_note.jpg" alt="hi" />
            </div>

            <div
              className={
                position > 300
                  ? "welcome__container__contents__content active b"
                  : "welcome__container__contents__content b"
              }
            >
              <span>Step 1 : Take a picture of your note!</span>
              <img src="./phone_camera2.jpg" alt="hi" />
            </div>
            <div
              className={
                position > 700
                  ? "welcome__container__contents__content active c"
                  : "welcome__container__contents__content c"
              }
            >
              <span>Step 2 : Choose an instrument you want to listen to</span>
              <img src="./instrument.png" alt="hi" />
            </div>

            <div
              className={
                position > 1100
                  ? "welcome__container__contents__content active d"
                  : "welcome__container__contents__content d"
              }
            >
              <span>Step 3: Play it!!</span>
              <img src="./listening.jpg" alt="hi" />
            </div>

            <div
              className={
                position > 1600
                  ? "welcome__container__contents__content active e"
                  : "welcome__container__contents__content e"
              }
            >
              <span>Step 4: Upload to the dashboard and share your works!</span>
              <img src="./upload.png" alt="hi" />
            </div>
            <div
              className={
                position > 2000
                  ? "welcome__container__contents__content active f"
                  : "welcome__container__contents__content f"
              }
            >
              <div className="welcome__container__contents__content__aboutus">
                <span className="welcome__container__contents__content__aboutus__title">
                  Contact to us
                </span>
                <div className="aboutus__column">
                  <div className="aboutus__column__title">
                    <GiSoapExperiment className="aboutus__column__title__icon" />
                    <h3>AI model developer</h3>
                  </div>
                  <div className="aboutus__column__content">
                    <span>maymeey@naver.com</span>
                  </div>
                </div>
                <div className="aboutus__column">
                  <div className="aboutus__column__title">
                    <RiReactjsLine className="aboutus__column__title__icon" />
                    <h3>Web developer</h3>
                  </div>
                  <div className="aboutus__column__content">
                    <span>chocomilk8604@gmail.com</span>
                  </div>
                </div>
                <div className="aboutus__column">
                  <div className="aboutus__column__title">
                    <AiOutlineGithub className="aboutus__column__title__icon" />
                    <h3>
                      <a
                        href="https://github.com/MachineMusician"
                        target="_blank"
                      >
                        Go to GitHub
                      </a>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="spacer wave1"></div>
        </div>
      </div>
    </>
  );
}
