import axios from "axios";
import Head from "next/head";
import { useEffect, useState } from "react";
import Dashboard from "../src/components/Dashboard";
import Navbar from "../src/components/Navbar";

export default function Home() {
  const [itemList, setItemList] = useState([]);

  const API_URL =
    "http://makeup-api.herokuapp.com/api/v1/products.json?brand=dior";

  const getData = () => {
    axios //
      .get(API_URL)
      .then((res) => setItemList(res.data))
      .catch(console.log);
  };

  useEffect(() => {
    getData();
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
      <Navbar />
      <Dashboard itemList={itemList} />
    </>
  );
}
