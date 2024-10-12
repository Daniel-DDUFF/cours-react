import React, { useState } from "react";
import Counter1 from "./Counter1";
import Counter2 from "./Counter2";

const PageCounter = () => {
  const [click, setClick] = useState(0);
  const handleClick = (count) => {
    setClick(count);
  };
  console.log(`Counter render`);
  return (
    <>
      <div style={{ border: "1px solid" }}>
        <p>Nombre de clics : {click}</p>
        <button onClick={() => handleClick(click + 1)}>Cliquez ici</button>
        <Counter1 />
        <Counter2 />
      </div>
    </>
  );
};

export default PageCounter;
