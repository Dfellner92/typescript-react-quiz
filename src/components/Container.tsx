import { useState, useRef, ChangeEvent } from "react";
import useFetchData from "../hooks/useFetchData";
import { QuestionHead } from "./QuestionHead/QuestionHead";
import { QuestionButtons } from "./QuestionButtons/QuestionButtons";

const Container = () => {
  const { data, done } = useFetchData("../../questions.json");
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [radioSelected, setRadioSelected] = useState<String>("");
  const buttonRef = useRef<any>(null);

  const handleAnswer = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    if (data![index].correct === radioSelected) {
      setScore(score + 1);
      buttonRef.current!.reset();
      setRadioSelected("");
      setIndex(() => index + 1);
    } else {
      alert("Try again!");
    }
  };

  console.log(score);

  const radioHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setRadioSelected(event.target.value);
  };

  console.log(radioSelected);

  return (
    <form className="container" ref={buttonRef}>
      {done && (
        <>
          <QuestionHead question={data![index]["question"]} />
          <QuestionButtons
            a={data![index].a}
            b={data![index].b}
            c={data![index].c}
            d={data![index].d}
            radioHandler={radioHandler}
            handleAnswer={handleAnswer}
          />
        </>
      )}
    </form>
  );
};

export default Container;
