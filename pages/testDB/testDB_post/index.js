import { useEffect, useState } from "react";
import axios from "axios";

const testDB_Post = () => {
  const [dataList, setDataList] = useState([]);
  const API_URL = "http://127.0.0.1:8000/add_music";
  const getDataList = async () => {
    try {
      const sendData = await axios.post(API_URL, {
        title: "title_test",
        info: "info_test",
        image_link: "image_link_test",
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDataList();
  }, []);

  return <div className="">hello</div>;
};

export default testDB_Post;
