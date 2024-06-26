import React, { useContext, useState } from "react";
import style from "../style/style.module.css";
import { Context } from "../context/Context";
import correctS from "../audio/correct.m4a";
import wrongS from "../audio/wrong.m4a";
import waitS from "../audio/wait.m4a";
const quesitem = ({ answer, question }) => {
  const [selected, setSelected] = useState("");
  const {
    soundOnOff,
    setScore,
    setChangeQuestion,
    setTime,
    point,
    setPoint,
    disabled,
    setDisabled,
  } = useContext(Context);

  const correctSound = new Audio(correctS);
  const wrongSound = new Audio(wrongS);
  const waitSound = new Audio(waitS);

  const checkAnswer = () => {
    setSelected("selected");
    setDisabled(true);
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
    <button
      disabled={disabled}
      onClick={checkAnswer}
      className={`${style.answer}  ${selected == "correct" && style.correct} ${
        selected == "selected" && style.select
      } ${selected == "wrong" && style.wrong}`}
    >
      {answer}
    </button>
  );
};

export default quesitem;
