import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Head from "next/head";
import axios from "axios";

const View = () => {
  const router = useRouter();
  const { id } = router.query;
  const [data, setData] = useState([]);
  //   const API_URL = `https://cors-anywhere.herokuapp.com/http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
  const API_URL = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;

  const regex_date = /[0-9]+-[0-9]+-[0-9]+/;

  const getData = () => {
    axios
      .get(API_URL) //
      .then((res) => setData(res.data))
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
      <div className="view-container">
        <div className="view__info">
          {console.log(data)}
          <div key={data.id} className="view__info"></div>
          <img
            className="view__info__item__image"
            src={data.image_link}
            alt="product image"
          />
          <div className="view__info__item__info">
            <span className="view__info__item__info__name">
              {/* {data.name.trim().length < 42
              ? data.name
              : `${data.name.slice(0, 40)}...`} */}
            </span>
            <span className="view__info__item__info__product-type">
              {data.product_type}
            </span>
            <span className="view__info__item__info__createdAt">
              {/* {data.created_at.match(regex_date)} */}
            </span>
          </div>
        </div>
        <div className="view__play"></div>
      </div>
    </>
  );
};

export default View;
