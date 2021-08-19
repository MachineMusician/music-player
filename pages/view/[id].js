import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Head from "next/head";
import axios from "axios";

const View = () => {
  const router = useRouter();
  const { id } = router.query;
  const [data, setData] = useState({});
  const API_URL = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
  // const API_URL = `https://cors-anywhere.herokuapp.com/http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
  // const API_URL = `Access-Control-Allow-Origin:http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;

  const regex_date = /[0-9]+-[0-9]+-[0-9]+/;

  const getData = () => {
    axios.get(API_URL).then((res) => setData(res.data));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Head>
        <title>Details</title>
        <meta name="description" content="playing music" />
      </Head>
      <div className="detail-screen">
        <div className="view-container">
          <div className="view__column info-section">
            <div key={data.id} className="info-section__item">
              <img
                className="info-section__item__image"
                src={data.image_link}
                alt="product image"
              />
              <div className="info-section__item__info">
                <span className="info-section__item__info__name">
                  {data.name}
                </span>
                <span className="info-section__item__info__product-type">
                  {data.product_type}
                </span>
                <span className="info-section__item__info__createdAt">
                  {data.created_at.match(regex_date)}
                </span>
                <p className="info-section__item__info__description">
                  {data.description}
                </p>
              </div>
            </div>
          </div>
          <div className="view__column play-section">hello</div>
        </div>
      </div>
    </>
  );
};

export default View;
