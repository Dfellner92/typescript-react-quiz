import "./QuestionButtons.css";

export const QuestionButtons = (props: any) => {
  return (
    <div className="question-buttons">
      <div className="question-buttons__button">
        <input
          className="question-buttons__button--input"
          type="radio"
          id="a"
          name="question"
          value="a"
        />
        <label className="question-buttons__button--label">{props.a}</label>
      </div>
      <br />
      <div className="question-buttons__button">
        <input
          className="question-buttons__button--input"
          type="radio"
          id="b"
          name="question"
          value="b"
        />
        <label className="question-buttons__button--label">{props.b}</label>
      </div>
      <br />
      <div className="question-buttons__button">
        <input
          className="question-buttons__button--input"
          type="radio"
          id="c"
          name="question"
          value="c"
        />
        <label className="question-buttons__button--label">{props.c}</label>
      </div>
      <br />
      <div className="question-buttons__button">
        <input
          className="question-buttons__button--input"
          type="radio"
          id="d"
          name="question"
          value="d"
        />
        <label className="question-buttons__button--label">{props.d}</label>
      </div>
      <button
        onClick={(e) => props.handleAnswer(e)}
        className="question-buttons__button--submit"
        type="submit"
        value="Submit"
      >
        Submit
      </button>
    </div>
  );
};
