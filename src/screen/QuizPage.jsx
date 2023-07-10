import { useEffect, useState } from "react";
import axios from "axios";
import AnswerTile from "../components/AnswerTile";
import "./quizPage.css";
import { Link } from "react-router-dom";

export default function QuizPage({ count, url }) {
  const [questions, setQuestions] = useState(); //state for questions json
  const [index, setIndex] = useState(0); //state for index
  const [answerList, setAnswerList] = useState(); //state for answer array
  const [selectedAnswer, setSelectedAnswer] = useState(""); //state for collection of correct answers
  const [countCorrect, setCountCorrect] = useState(0); //count correct answers

  //function to fetch the questions from api and set questions state
  const fetchQuestions = async () => {
    const response = await axios.get(url);
    const data = response.data.results;
    setQuestions(data);

    //set initial answers list (async nature)
    setAnswerList(data[0].incorrect_answers);
    setAnswerList((prev) => prev.concat(data[index].correct_answer));

    //shuffle options
    setAnswerList((prev) => {
      return prev
        .map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);
    });
  };

  //build the answerlist with randomization
  function buildAnswerList() {
    if (index + 1 < questions.length) {
      setAnswerList(questions[index + 1].incorrect_answers);
      setAnswerList((prev) => prev.concat(questions[index + 1].correct_answer));
    }
    //Shuffle options
    setAnswerList((prev) => {
      return prev
        .map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);
    });
  }

  //fetch api data on first load of the page
  useEffect(() => {
    setIndex(0);
    setAnswerList();
    setSelectedAnswer("");
    setCountCorrect(0);
    fetchQuestions();
  }, []);

  //set state for correct answers
  function handleAnswerSelection(event) {
    setSelectedAnswer(event.target.value);
  }

  //function for correct answer check and move index by one
  function handleNextClick(event) {
    if (selectedAnswer === questions[index].correct_answer)
      setCountCorrect((prev) => prev + 1);
    setIndex((prev) => prev + 1);
    buildAnswerList();
  }

  return questions && answerList && index < questions.length ? (
    <div className="card">
      <h3 className="question-count">
        {index + 1}/{count}
      </h3>
      {/* .replace for html encoding removals */}
      <h2 className="question">
        {questions[index].question
          .replace(/&quot;/g, '"')
          .replace(/&#039;/g, "'s")
          .replace(/&ntilde;/g, "`")
          .replace(/&aacute;/g, "Á")
          .replace(/&rsquo;/g, "'")
          .replace(/&eacute;/g, "É")}
      </h2>
      <AnswerTile answers={answerList} handleClick={handleAnswerSelection} />
      <div className="control-panel">
        {index < questions.length - 1 ? (
          <button className="control-button" onClick={handleNextClick}>
            Next
          </button>
        ) : (
          <button
            className="control-button"
            onClick={index === questions.length - 1 ? handleNextClick : null}
          >
            Submit
          </button>
        )}
      </div>
    </div>
  ) : questions && index === questions.length ? (
    <div className="card">
      <h2>Your Score is:</h2>
      <h2>
        {countCorrect}/{index}
      </h2>
      <div className="control-panel">
        <Link to={"/"}>
          <button className="control-button">Replay</button>
        </Link>
      </div>
    </div>
  ) : (
    <div className="card">loading</div>
  );
}
