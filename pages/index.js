import Head from "next/head";
import { useEffect, useState } from "react";
import scrollr from "../public/skrollr";

export default function Home() {
  const [position, setPosition] = useState(0);
  // const scrollContainer = document.querySelector("welcome");

  const onScroll = () => {
    setPosition(window.scrollY);
  };

  // const onWheel = (event) => {
  //   event.preventDefault();
  //   console.log(event.currentTarget.scrollLeft, event.deltaX);
  //   event.currentTarget.scrollLeft += event.deltaY;
  // };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    // scrollContainer.addEventListener("wheel", onWheel);

    return () => {
      window.removeEventListener("scroll", onScroll);
      // scrollContainer.removeEventListener("wheel", onWheel);
    };
  }, []);

  // const child = {
  //   width: "300em",
  //   height: "100%",
  //   position: "absolute",
  //   inset: "0",
  // };

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
        <div
          className="welcome__container"
          // data-0="transform:translateX(0%);"
          // data-1000="transform:translateX(-100%);"
        >
          <section>
            <div className="content">
              <h2>section 1</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                nostrum sed minima ipsum? Excepturi accusamus ipsa illo,
                cupiditate libero quod voluptates similique laborum dolor
                assumenda asperiores quisquam, hic quasi fuga.
              </p>
            </div>
          </section>
          <section>
            <div className="content">
              <h2>section 2</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                nostrum sed minima ipsum? Excepturi accusamus ipsa illo,
                cupiditate libero quod voluptates similique laborum dolor
                assumenda asperiores quisquam, hic quasi fuga.
              </p>
            </div>
          </section>
          <section>
            <div className="content">
              <h2>section 3</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                nostrum sed minima ipsum? Excepturi accusamus ipsa illo,
                cupiditate libero quod voluptates similique laborum dolor
                assumenda asperiores quisquam, hic quasi fuga.
              </p>
            </div>
          </section>
          <section>
            <div className="content">
              <h2>section 4</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                nostrum sed minima ipsum? Excepturi accusamus ipsa illo,
                cupiditate libero quod voluptates similique laborum dolor
                assumenda asperiores quisquam, hic quasi fuga.
              </p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
