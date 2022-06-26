export default function handler(req, res) {
  if (req.method === "GET") {
    // POST 인 경우
    // 헤더에 쿠키 생성
    res.setHeader("Set-Cookie", "a_name=Mike;Max-Age=0;HttpOnly,Secure");
    res.statusCode = 200;
    res.json({ message: "OK" });
  }
}
