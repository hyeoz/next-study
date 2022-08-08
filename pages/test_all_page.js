import { useQueries } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";

const TestAll = () => {
  const [isFinished, setIsFinished] = useState();
  const result = useQueries({
    queries: [
      {
        queryKey: ["maybelline"],
        queryFn: () =>
          axios.get(
            "https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline"
          ),
      },
      {
        queryKey: ["dior"],
        queryFn: () =>
          axios.get(
            "https://makeup-api.herokuapp.com/api/v1/products.json?brand=dior"
          ),
      },
    ],
  });

  useEffect(() => {
    const finished = result.some((res) => res.isLoading);
    setIsFinished(finished);
    /* 
      array.some : 배열안의 어떤 요소라도 주어진 판별함수를 통과하는지 테스트. return true/false
      array.every : 배열안의 모든 요소가 주어진 판별함수를 통과하는지 테스트. return true/false
    */
    // console.log(finished); // false 일 경우 모든 데이터가 들어옴
    !isFinished && console.log(result[0]);
  }, [result]);

  return (
    <div>
      {!isFinished && (
        <>
          <ul>
            {result[0].data?.data.map((res) => (
              <li key={res.id}>{res.name}</li>
            ))}
          </ul>
          <br />
          <ul>
            {result[1].data?.data.map((res) => (
              <li key={res.id}>{res.name}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default TestAll;
