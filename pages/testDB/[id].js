import { useEffect, useState } from "react";
import axios from "axios";

const testDB = () => {
  const [dataList, setDataList] = useState([]);
  const API_URL = "http://127.0.0.1:8000/musics";

  const getDataList = async () => {
    try {
      const itemList = await axios.get(API_URL);
      //   console.log(itemList.data);
      setDataList(itemList.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDataList();
  }, []);

  return (
    <div className="main">
      hi
      {console.log(dataList)}
    </div>
  );
};

export default testDB;
