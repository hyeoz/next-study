import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Item from "../../src/components/Item";

export default function Post() {
  const router = useRouter();
  const { id } = router.query;
  const [item, setItem] = useState({});

  const API_URL = `https://makeup-api.herokuapp.com/api/v1/products/${id}`;

  function getData() {
    axios.get(API_URL).then((res) => {
      console.log(res);
      setItem(res);
    });
  }

  useEffect(() => {
    try {
      if (id && id > 0) return getData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  // return <p>Post: {id}</p>;
  return <Item item={item} />;
}
