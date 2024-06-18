import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeHigh, faVolumeXmark } from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect, useRef } from "react";
import { Context } from "../../../context/Context.jsx";
import style from "../../info.module.css";

const BackSound = () => {
  const SoundRef = useRef(new Audio("../../../../audio/background.m4a"));

  const { soundOnOff, setSoundOnOff } = useContext(Context);

  useEffect(() => {
    if (soundOnOff) {
      SoundRef.current.play();
    } else {
      SoundRef.current.pause();
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
