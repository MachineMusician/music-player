import Head from "next/head";
import { useEffect, useState } from "react";

export default function Home() {
  const [position, setPosition] = useState(0);
  const SCROLL_SPEED = 5;
  // const scrollContainer = document.querySelector("welcome");

  const onScroll = () => {
    setPosition(window.scrollY);
  };

  const onWheel = (event) => {
    event.preventDefault();
    event.currentTarget.scrollLeft += event.deltaY / SCROLL_SPEED;
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
        <div className="welcome__container" onWheel={onWheel}>
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
