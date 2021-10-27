import React, { useState } from "react";
import Button from "../Button/Button";
import Button1 from "../Button1/Button1";
import Shiba from "../Shiba/Shiba";
import "./Counter.css";

function Counter() {
  const [counter, setCounter] = useState(0);
  const [shibaArray, setShibaArray] = useState([]);

  let shibaInu;

  let remove = () => {
    setCounter(counter - 1);
    shibaInu = shibaArray;
    shibaInu.pop();
    setShibaArray(shibaInu);
  };

  let add = () => {
    setCounter(counter + 1);
    shibaInu = shibaArray;
    if (counter >= 0) {
      shibaInu.push(<Shiba key={counter} />);
    }
    setShibaArray(shibaInu);
  };

  return (
    <div className="container">
      <Button onClick={remove} label="remove 1" />
      <div className="result">{counter}</div>
      <Button1 onClick={add} label="add 1" />
      <div>{shibaArray}</div>
    </div>
  );
}

export default Counter;
