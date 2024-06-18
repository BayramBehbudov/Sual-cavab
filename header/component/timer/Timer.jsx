import React, { useContext, useEffect, useState } from "react";
import style from "../../header.module.css";
import { Context } from "../../../context/Context";

const Timer = () => {
  const { changeQuestion, setChangeQuestion,time, setTime } = useContext(Context);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => {
        if (prev === 1) {
          clearInterval(timer);
          setChangeQuestion((prev) => !prev);
          setTime(30);
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [changeQuestion]);

  return (
    <div className={`${style.timer} ${time < 10 && style.redtime}`}>{time}</div>
  );
};

export default Timer;
