import { Link } from "react-router-dom";
import "./optionPage.css";

export default function OptionPage({ handleChanges, handleSubmit }) {
  return (
    <div className="option-choice">
      <h2>Customize your quiz</h2>
      <form>
        <div className="option-tile">
          <label>Number of Questions: </label>
          <input
            name="QuestionCount"
            type="text"
            defaultValue={10}
            onChange={handleChanges}
          />
        </div>
        <div className="option-tile">
          <label>Category: </label>
          <select
            name="Category"
            className="selection-panel"
            onChange={handleChanges}
          >
            <option value={"any"}>Any</option>
            <option value={"9"}>General Knowledge</option>
            <option value={"11"}>Film</option>
            <option value={"12"}>Music</option>
            <option value={"17"}>Science & Nature</option>
            <option value={"18"}>Computer</option>
            <option value={"19"}>Maths</option>
            <option value={"21"}>Sports</option>
            <option value={"22"}>Geography</option>
            <option value={"23"}>History</option>
            <option value={"26"}>Celebrities</option>
            <option value={"27"}>Animal</option>
            <option value={"29"}>Comics</option>
            <option value={"28"}>Vehicle</option>
            <option value={"30"}>Gadgets</option>
            <option value={"31"}>Anime & Manga</option>
            <option value={"32"}>Cartoon</option>
          </select>
        </div>
        <div className="option-tile">
          <label>Difficulty: </label>
          <select
            name="Difficulty"
            className="selection-panel"
            onChange={handleChanges}
          >
            <option value={"any"}>Any</option>
            <option value={"easy"}>Easy</option>
            <option value={"medium"}>Medium</option>
            <option value={"hard"}>Hard</option>
          </select>
        </div>
        <Link to={"/quiz"} className="submit-button">
          <button onClick={handleSubmit}>Let's play</button>
        </Link>
      </form>
    </div>
  );
}
