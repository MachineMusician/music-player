import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [dataList, setDataList] = useState([]);
  const [statusDashboard, setStatusDashboard] = useState(false);
  const API_URL =
    "http://makeup-api.herokuapp.com/api/v1/products.json?brand=dior";
  const regex_date = /[0-9]+-[0-9]+-[0-9]+/;
  //   const regex_time = /[0-9]+:[0-9]+:[0-9]+/;

  const getDataList = async () => {
    try {
      const itemList = await axios.get(API_URL);
      //   console.log(itemList.data);
      setDataList(itemList.data);
      setStatusDashboard(true);
    } catch (error) {
      console.log(error);
      setStatusDashboard(false);
    }
  };

  useEffect(() => {
    getDataList();
  }, []);

  return (
    <>
      {statusDashboard ? (
        <div className="dashboard-itemList">
          {dataList.map((item) => {
            return (
              <Link href={`/view/${item.id}`} key={item.id}>
                <a>
                  <div className="dashboard-itemList__item">
                    <img
                      className="item__image"
                      src={item.image_link}
                      alt="product image"
                    />

                    <div className="item__info">
                      <span className="item__info__name">
                        {item.name.trim().length < 42
                          ? item.name
                          : `${item.name.slice(0, 40)}...`}
                      </span>
                      <span className="item__info__product-type">
                        {item.product_type}
                      </span>
                      <span className="item__info__createdAt">
                        {item.created_at.match(regex_date)}
                        {/* {item.created_at.match(regex_time)} */}
                      </span>
                    </div>
                  </div>
                </a>
              </Link>
            );
          })}
        </div>
      ) : (
        <div>loading</div>
      )}
    </>
  );
};

export default Dashboard;
