import React, { createContext, useEffect, useState } from "react";

const Context = createContext();

const ContextProvider = ({ children }) => {
  const [soundOnOff, setSoundOnOff] = useState(false);
  const [score, setScore] = useState(0);
  const [userName, setUserName] = useState("Sweet User");
  const [changeQuestion, setChangeQuestion] = useState(false);
  const [time, setTime] = useState(30);
  const [disabled, setDisabled] = useState(false);
  const [point, setPoint] = useState(500);

  useEffect(() => {
    setPoint((prev) => Math.floor(prev - prev / time));
  }, [time]);

  return (
    <Context.Provider
      value={{
        soundOnOff,
        setSoundOnOff,
        score,
        setScore,
        userName,
        setUserName,
        changeQuestion,
        setChangeQuestion,
        time,
        setTime,
        point,
        setPoint,
        disabled,
        setDisabled,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { ContextProvider, Context };
