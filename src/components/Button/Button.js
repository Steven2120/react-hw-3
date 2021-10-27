import React, { useState, useEffect } from "react";

function Button(props) {
  const { onClick } = props;
  const [clickCount1, setClickCount1] = useState(0);

  useEffect(() => {
    console.log("effect triggered");
    onClick();
  }, [clickCount1]);

  return (
    <button
      onClick={() => {
        setClickCount1(clickCount1 - 1);
      }}
      style={{
        padding: "30px",
        backgroundColor: "red",
      }}
    >
      Remove
    </button>
  );
}

export default Button;
