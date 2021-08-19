import { useRouter } from "next/router";
import axios from "axios";
import { useEffect, useState } from "react";

const View = () => {
  const router = useRouter();
  const { id } = router.query;

  const [data, setData] = useState([]);
  const API_URL = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;

  const getData = () => {
    axios.get(API_URL).then((res) => setData(res.data));
  };

  useEffect(() => {
    getData();
  }, []);

  return <div>hello! {console.log(data)}</div>;
};

export default View;
