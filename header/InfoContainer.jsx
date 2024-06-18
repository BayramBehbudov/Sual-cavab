import React, { useContext } from "react";
import BackSound from "./component/backsound/BackSound";
import style from "./info.module.css";
import { Context } from "../context/Context";
import Timer from "./component/timer/Timer";
const Header = () => {
  const { score, userName } = useContext(Context);
  return (
    <div className={style.container}>
      <div className={style.userInfo}>{userName}</div>
      <div className={style.scoreInfo}>Score: {score}</div>
      <div className={style.other}>
        <Timer />
        <BackSound />
      </div>
    </div>
  );
};

export default Header;
