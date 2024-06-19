import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeHigh, faVolumeXmark } from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect, useRef } from "react";
import { Context } from "../../../context/Context.jsx";
import style from "../../header.module.css";
import backSound from "../../../audio/background.m4a";

const BackSound = () => {
  const backSoundRef = useRef(new Audio(backSound));

  const { soundOnOff, setSoundOnOff } = useContext(Context);

  useEffect(() => {
    if (soundOnOff) {
      backSoundRef.current.play();
    } else {
      backSoundRef.current.pause();
    }
  }, [soundOnOff]);

  return (
    <div
      className={style.soundIcon}
      onClick={() => {
        setSoundOnOff(!soundOnOff);
      }}
    >
      {soundOnOff ? (
        <FontAwesomeIcon icon={faVolumeHigh} className={style.icon} />
      ) : (
        <FontAwesomeIcon icon={faVolumeXmark} className={style.icon} />
      )}
    </div>
  );
};

export default BackSound;
