import React, { useState, useEffect, useContext } from "react";
import style from "../style/style.module.css";
import Answer from "../questions/AnswerItem.jsx";
import { formatQuestion } from "../hooks/formatQuestion.js";
import { findQuestions } from "../questions/Bank.jsx";
import Header from "../header/Header.jsx";
import { Context } from "../context/Context.jsx";

const Home = () => {
  const [question, setQuestion] = useState({});
  const [answers, setAnswers] = useState([]);
  const { changeQuestion, setTime } = useContext(Context);

  useEffect(() => {
    const currentQuestion = findQuestions();
    setQuestion(currentQuestion);

    const formattedAnswers = formatQuestion(currentQuestion);
    setAnswers(formattedAnswers);
    setTime(30)
  }, [changeQuestion]);

  return (
    <div className={style.container}>
      <Header />
      <div className={style.context}>
        <div className={style.question}>{question.Question}</div>
        <div className={style.answers}>
          {answers.map((answer, index) => (
            <Answer answer={answer} key={index} question={question} />
          ))}
        </div>
      </div>
      <button
        className={style.feedBack}
        onClick={() => {
          window.location.href = "mailto:bayram.behbudov@gmail.com";
        }}
      >
        Mənə yaz
      </button>
    </div>
  );
};

export default Home;
