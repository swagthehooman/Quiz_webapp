import "./answerTile.css";
export default function AnswerOptions({ answer, handleClick }) {
  return (
    <button
      className="answer"
      onClick={handleClick}
      value={answer
        .replace(/&quot;/g, '"')
        .replace(/&#039;/g, "'s")
        .replace(/&ntilde;/g, "`")
        .replace(/&aacute;/g, "Á")
        .replace(/&rsquo;/g, "'")
        .replace(/&eacute;/g, "É")}
    >
      {answer}
    </button>
  );
}
