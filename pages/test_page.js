import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Test = () => {
  const { status, data, error } = useQuery({
    queryKey: ["test"], // ["key", "id"] 두번째 인자로
    queryFn: () =>
      axios.get(
        "https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline"
      ),
    onSuccess: (data) => console.log(data, "on success 입니다"),
  });
  if (status === "loading") {
    return <span style={{ margin: "auto" }}>Loading...</span>;
  }
  if (status === "error") {
    return <span style={{ margin: "auto" }}>Error : {error}</span>;
  }
  // console.log(response);
  return (
    <ul>
      data check :{" "}
      {data?.data.map((d) => (
        <li key={d.id}>{d.name}</li>
      ))}
    </ul>
  );
};

export default Test;
// {
//     refetchOnWindowFocus: false,
//     retry: 0,
//     onSuccess: (data) => {
//       console.log(data, " : success data");
//     },
//     onError: (error) => {
//       console.error(error);
//     },
//   }
