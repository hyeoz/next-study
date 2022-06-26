export default function handler(req, res) {
  res.status(200).json({ name: req.cookies.a_name }); // name 이 null 인 경우 로그인되어있지 않다고 판단
}
