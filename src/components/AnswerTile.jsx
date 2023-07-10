import "./answerTile.css";
import AnswerOptions from "./AnswerOptions";

export default function AnswerTile({ answers, handleClick }) {
  return (
    <div className="answer-list">
      {answers.map((i) => {
        return <AnswerOptions key={i} answer={i} handleClick={handleClick} />;
      })}
    </div>
  );
}
