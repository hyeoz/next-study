import React from "react";
import axios from "axios";
import Head from "next/head";
import { useEffect, useState } from "react";
import { Divider, Header, Loader } from "semantic-ui-react";
import ItemList from "../src/components/ItemList";
import styles from "../styles/Home.module.css";

export default function Home({ list }) {
  // getStaticProps 사용
  // const [list, setList] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);

  // // 현재 CSR 을 하고있기 때문에 browser 환경변수가 사용됨
  // const API_URL = process.env.NEXT_PUBLIC_API_URL;

  // function getData() {
  //   axios.get(API_URL).then((res) => {
  //     // console.log(res.data);
  //     setList(res.data);
  //     setIsLoading(false);
  //   });
  // }

  // useEffect(() => {
  //   getData();
  // }, []);

  return (
    <div>
      <Head>
        <title>Home | Next</title>
        <meta name="description" content="NEXTJS 실습입니다."></meta>
      </Head>
      {/* {isLoading ? (
        <div style={{ padding: "300px 0" }}>
          <Loader inline="centered" active>
            Loading...
          </Loader>
        </div>
      ) : ( */}
      <>
        <Header as="h3" style={{ paddingTop: 40 }}>
          베스트 상품
        </Header>
        <ItemList list={list?.slice(0, 9)} />
        <Header as="h3" style={{ paddingTop: 40 }}>
          신상품
        </Header>
        <Divider />
        <ItemList list={list?.slice(9)} />
      </>
      {/* )} */}
    </div>
  );
}

// static 파일 생성으로 빈 화면 없이 출력 가능하고 소스코드에서도 확인 가능함
export async function getStaticProps() {
  const apiUrl = process.env.apiUrl;
  const res = await axios.get(apiUrl);
  const { data } = res;

  return {
    props: {
      list: data,
      name: process.env.name,
    },
  };
}
