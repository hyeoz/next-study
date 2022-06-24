import axios from "axios";
import Head from "next/head";
import Item from "../../src/components/Item";

export default function Post({ item, name }) {
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
          {name} 환경입니다.
          <Item item={item} />
        </>
      )}
    </>
  );
}

// getStaticPaths
export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: "740" } },
      { params: { id: "730" } },
      { params: { id: "729" } },
    ],
    fallback: false,
    /* 
      false -> 없는 id 에 대해 대응하지 않음
      true -> 없는 id 는 최초로는 일반적인 방법으로 불러오고 두번째부터 정적파일을 확인할 수 있음
        but, id 가 많을경우 true 를 설정하면 모든 id 에 대해 정적파일을 생성할 수 있으니 고려하고 사용해야 함
    */
  };
}

// getStaticProps
export async function getStaticProps(context) {
  const id = context.params.id;
  const apiUrl = `https://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
  const res = await axios.get(apiUrl);
  // const res = await axios.get(process.env.NEXT_PUBLIC_API_URL);
  const { data } = res;

  return {
    props: {
      item: data,
      name: process.env.name,
    },
  };
}
