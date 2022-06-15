import { Html, Head, Main, NextScript } from "next/document";
// document 는 서버에서만 실행됨.
// 클라이언트 관련 컴포넌트들은 _app 에서 다루기
export default function Document() {
  return (
    <Html lang="ko">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
