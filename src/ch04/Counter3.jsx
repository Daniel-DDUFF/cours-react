import React, { useEffect, useState } from "react";

const Counter = () => {
  const [click, setClick] = useState(10);
  console.log(`Counter render`);
  useEffect(() => {
    document.title = `Nombre de clics : ${click}`;
  });

  return (
    <>
      <div>
        <p>Nombre de clics : {click}</p>
        <button onClick={() => setClick(click + 1)}>Cliquez ici</button>
      </div>
    </>
  );
};

export default Counter;