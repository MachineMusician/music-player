import Head from "next/head";

export default function Home() {
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
          <div className="column">
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
