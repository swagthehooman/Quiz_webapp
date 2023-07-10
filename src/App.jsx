import { useEffect, useState } from "react";
import QuizPage from "./screen/QuizPage";
import OptionPage from "./screen/OptionPage";
import { Routes, Route } from "react-router-dom";

export default function App() {
  const [questionCount, setQuestionCount] = useState("10");
  const [category, setCategory] = useState("any");
  const [difficulty, setDifficulty] = useState("any");
  const [urlParameters, setUrlParameters] = useState("");

  function handleOptionChange(event) {
    const { name, value } = event.target;
    if (name === "QuestionCount") setQuestionCount(value);
    else if (name === "Category") setCategory(value);
    else setDifficulty(value);
  }

  function handleSubmit(event) {
    // event.preventDefault();
    setUrlParameters(`https://opentdb.com/api.php?amount=${questionCount}`);
    if (category !== "any")
      setUrlParameters((prev) => prev.concat(`&category=${category}`));
    if (difficulty !== "any")
      setUrlParameters((prev) => prev.concat(`&difficulty=${difficulty}`));
  }

  return (
    <main>
      <Routes>
        <Route
          path="/"
          element={
            <OptionPage
              handleChanges={handleOptionChange}
              handleSubmit={handleSubmit}
            />
          }
        />
        <Route
          path="/quiz"
          element={<QuizPage count={questionCount} url={urlParameters} />}
        />
      </Routes>
    </main>
  );
}
