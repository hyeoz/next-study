import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Loader } from "semantic-ui-react";
import Item from "../../src/components/Item";

export default function Post({ item }) {
  // SSR 로 받아온 item 을 사용 가능
  // const router = useRouter();
  // const { id } = router.query;
  // const [item, setItem] = useState({});
  // const [isLoading, setIsLoading] = useState(true);

  // const API_URL = `https://makeup-api.herokuapp.com/api/v1/products/${id}.json`;

  // function getData() {
  //   axios.get(API_URL).then((res) => {
  //     console.log(res.data);
  //     setItem(res.data);
  //     setIsLoading(false);
  //   });
  // }

  // useEffect(() => {
  //   try {
  //     if (id && id > 0) return getData();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }, []);

  // return <p>Post: {id}</p>;
  return (
    <>
      {/* {isLoading ? (
        <Loader inline="centered" active>
          Loading...
        </Loader>
      ) : (
        <Item item={item} />
      )} */}
      {item && (
        <>
          <Head>
            <title>{item.name}</title>
            {/* meta 를 통해 소스코드에 데이터를 노출시켜 SEO 최적화 가능 */}
            <meta name="description" content={item.description}></meta>
          </Head>
          <Item item={item} />
        </>
      )}
    </>
  );
}

/*
  Next JS 는 모든 페이지를 사전 렌더링 함 (pre-rendering)
  더 좋은 퍼포먼스와 검색엔진최적화(SEO) 가능

  1. 정적생성 
    -> 프로젝트 빌드 시점에 html 생성, 모든 요청에 재사용
    -> next js 는 정적생성을 권고
    -> 생성된 페이지들은 CDN 에 캐시
    -> getStaticProps, getStaticPaths
  2. 서버사이드렌더링
    -> 매 요청마다 html 생성
    -> 항상 최신상태 유지
    -> getServerSideProps
*/

// 서버사이드렌더링
export async function getServerSideProps(context) {
  const id = context.params.id;
  const apiUrl = `https://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
  const res = await axios.get(apiUrl);
  const { data } = res;

  console.log(data);

  return {
    props: {
      item: data,
    },
  };
}
