import Head from "next/head";
import { useEffect, useState } from "react";

export default function Home() {
  const [position, setPosition] = useState(0);

  const onScroll = () => {
    setPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

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
        <div className="welcome__container">
          <div
            className="column"
            style={{ transform: `translateX(-${position}px )` }}
          >
            <span className="welcome__msg">
              Take a picture of your note and play it first!!
            </span>
          </div>
          <div className="column">
            <span>hihihi</span>
          </div>
        </div>
      </div>
    </>
  );
}
