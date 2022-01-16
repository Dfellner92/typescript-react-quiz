import { useState } from "react";
import useFetchData from "../hooks/useFetchData";
import { QuestionHead } from "./QuestionHead/QuestionHead";

const Container = () => {
  const { data, done } = useFetchData("../../questions.json");
  const [index, setIndex] = useState(1);


  return (
    <form className="container">
      {done && <QuestionHead question={data![index]["question"]} />}
    </form>
  );
};

export default Container;
