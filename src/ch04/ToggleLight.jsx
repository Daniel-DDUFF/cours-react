import React, { useState } from "react";

const ToggleLight = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <>
      <div>The light is {isOn ? " on" : " off"}</div>
      <button onClick={() => setIsOn(!isOn)}>Switch</button>
    </>
  );
};

export default ToggleLight;
