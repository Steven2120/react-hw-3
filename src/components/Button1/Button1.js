import React, { useState, useEffect } from "react";

function Button1(props) {
  const { onClick } = props;
  const [clickCount, setClickCount] = useState(0);

  useEffect(() => {
    console.log("effect triggered");
    onClick();
  }, [clickCount]);

  return (
    <button
      onClick={() => {
        setClickCount(clickCount - 1);
      }}
      style={{
        padding: "30px",
        backgroundColor: "blue",
      }}
    >
      ADD
    </button>
  );
}

export default Button1;
