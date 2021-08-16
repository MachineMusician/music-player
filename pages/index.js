import Head from "next/head";
import Navbar from "../src/components/Navbar";
// import styles from "../styles/Home.module.css";

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

      <Navbar />
    </>
  );
}
