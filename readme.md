# Quiz webapp

## Introduction
This is a quiz webapp where users can choose the quiz category and difficulty for gameplay. The quiz is of mcq type, with true/false questions. After completion of the quiz, the total score is displayed.

## Screenshot
### customization page
(./src/assets/screenshot/1.png)
  

## User customization
The categories from which users can choose are:
  1) General Knowledge
  2) Film
  3) Music
  4) Science & Nature
  5) Computer
  6) Maths
  7) Sports
  8) Geography
  9) History
  10) Celebrities
  11) Animal
  12) Comics
  13) vehicle
  14) Gadgets
  15) Anime & Manga
  16) Cartoon

There are 3 difficulties:
  1) Easy
  2) Medium
  3) Hard

If the user doesn't have any particular choice, the quiz will generate 10 questions of random categories and difficulties.

## API
The Api used is [Open trivia database](https://opentdb.com/). Refer the documentations for more info.

## Tech stack
The project is build using **React.js** framework, along with **axios** for promise based http requests. **React router dom** framework is also used for separation of pages for quiz and customization. For styling, **CSS** is used. **Vite** for react project build.

## Deployement
The project is deployed on Netlify.
The Link to quiz - [Click here](https://swagnik-quiz-webapp.netlify.app/)
