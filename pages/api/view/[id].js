// 다이나믹 라우팅과 비슷하게 다이나믹 api 도 구현 가능함!
export default function handler(req, res) {
  res.status(200).json({ id: req.query.id });
}
