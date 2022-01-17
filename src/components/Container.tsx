import { useState } from "react";
import useFetchData from "../hooks/useFetchData";
import { QuestionHead } from "./QuestionHead/QuestionHead";
import { QuestionButtons } from "./QuestionButtons/QuestionButtons";

const Container = () => {
  const { data, done } = useFetchData("../../questions.json");
  const [index, setIndex] = useState(0);

  const handleAnswer = (e: any) => {
    e.preventDefault();
    setIndex(() => index + 1);
  };

  return (
    <form className="container">
      {done && (
        <>
          <QuestionHead question={data![index]["question"]} />
          <QuestionButtons
            a={data![index].a}
            b={data![index].b}
            c={data![index].c}
            d={data![index].d}
            handleAnswer={handleAnswer}
          />
        </>
      )}
    </form>
  );
};

export default Container;
