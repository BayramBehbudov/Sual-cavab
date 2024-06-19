import React, { useContext } from "react";
import BackSound from "./component/backsound/BackSound";
import style from "./header.module.css";
import { Context } from "../context/Context";
import Timer from "./component/timer/Timer";
import { questions } from "../questions/Bank";
const Header = () => {
  const { score, userName } = useContext(Context);
  return (
    <div className={style.container}>
      <div className={style.userInfo}>{userName}</div>
      <div className={style.scoreInfo}>Score: {score}</div>
      <div className={style.other}>
        <div className={style.quesCount}>{questions.length}/61</div>
        <Timer />
        <BackSound />
      </div>
    </div>
  );
};

export default Header;
