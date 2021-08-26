import Head from "next/head";
import { useState } from "react";

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
      {/* <div className="welcome">
        <div className="welcome__container" onWheel={onWheel}>
          <section>
            <div
              className="welcome__container__content ani1"
              style={{
                transform: `translateX(-${position}px)`,
              }}
            >
              <h2 className={position > -1 ? "title active" : "title"}>
                Take a picture of your note!!
              </h2>
              <p>You can play your note before you play it.</p>
            </div>
            <div className="welcome__container__content ani2">
              <img src="./note2.jpg" alt="hi" />
            </div>
          </section>

          <section>
            <div className="welcome__container__content">
              <h2>section 2</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                nostrum sed minima ipsum? Excepturi accusamus ipsa illo,
                cupiditate libero quod voluptates similique laborum dolor
                assumenda asperiores quisquam, hic quasi fuga.
              </p>
            </div>
          </section>
        </div>
      </div> */}
      <div className="welcome">
        <div className="welcome__container" onWheel={onWheel}>
          <div className="spacer wave1"></div>
        </div>
      </div>
    </>
  );
}
