import React, { useContext, useState } from "react";
import style from "../style/style.module.css";
import { Context } from "../context/Context";

const quesitem = ({ answer, question }) => {
  const [selected, setSelected] = useState("");
  const { soundOnOff, setScore, setChangeQuestion, setTime, point, setPoint } =
    useContext(Context);
  const correctSound = new Audio("../audio/correct.m4a");
  const wrongSound = new Audio("../audio/wrong.m4a");
  const waitSound = new Audio("../audio/wait.m4a");

  const checkAnswer = () => {
    setSelected("selected");
    soundOnOff && waitSound.play();

    setTimeout(() => {
      soundOnOff && waitSound.pause();

      if (question.Correct == answer.split(") ")[1]) {
        setScore((prev) => (prev += point));
        correctSound.currentTime = 1;
        soundOnOff && correctSound.play();
        setSelected("correct");
      } else {
        setScore((prev) => (prev - point > 0 ? (prev -= point) : 0));
        setSelected("wrong");
        soundOnOff && wrongSound.play();
      }

      setTimeout(() => {
        setChangeQuestion((prev) => !prev);
        setSelected("");
        setTime(30);
        setPoint(500);
      }, 1500);
    }, 2000);
  };

  return (
    <div
      onClick={checkAnswer}
      className={`${style.answer}  ${selected == "correct" && style.correct} ${
        selected == "selected" && style.select
      } ${selected == "wrong" && style.wrong}`}
    >
      {answer}
    </div>
  );
};

export default quesitem;