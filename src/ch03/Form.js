import React from "react";
import Button from "./Button";
import Button1 from "./Button1";

const Form = () => {
  return (
    <>
      <Button></Button>
      <Button></Button>
      <Button></Button>
      <div>
      <Button1 action="envoyer"/>
      <Button1 action="annuler"/>
      </div>
    </>
  );
};

export default Form;
