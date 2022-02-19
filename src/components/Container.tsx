import { useState, useRef, ChangeEvent } from "react";
import { QuestionHead } from "./QuestionHead/QuestionHead";
import { QuestionButtons } from "./QuestionButtons/QuestionButtons";

function Container({ newData, done, index, setIndex }: any) {
  const [score, setScore] = useState(0);
  const [radioSelected, setRadioSelected] = useState<String>("");
  const buttonRef = useRef<any>(null);

  const newDataLength = newData !== null ? newData!.length : 0;
  console.log("newData length", newDataLength);
  console.log("newData", newData);
  const handleAnswer = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    if (newData![index].correct === radioSelected) {
      console.log(radioSelected);
      setScore(score + 1);
      setIndex(index + 1);

      buttonRef.current!.reset();
    } else {
      alert("Try again!");
    }
  };

  if (score === newDataLength && newDataLength !== 0) {
    alert("You win!");
  }

  const radioHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setRadioSelected(event.target.value);
  };

  return (
    <form className="container" ref={buttonRef}>
      {done && (
        <>
          <QuestionHead question={newData[index]["question"]} />
          <QuestionButtons
            a={newData[index].a}
            b={newData[index].b}
            c={newData[index].c}
            d={newData[index].d}
            radioHandler={radioHandler}
            handleAnswer={handleAnswer}
          />
        </>
      )}
    </form>
  );
}

export default Container;
