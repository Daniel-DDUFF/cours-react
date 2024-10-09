import React from "react";

const nom = "React";
const Title = () => {
  const name = "John";
  const getData = () => {
    return "Bonjour!";
  };
  return (
    <>
      <h1>Variable Globale nom</h1>
      <h1>Variable Globale {nom}</h1>
      <h1>Variable du composant {name}</h1>
      <h1>Fonction du composant {getData()}</h1>
    </>
  );
};

export default Title;
