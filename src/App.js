import logo from "./logo.svg";
import "./App.css";
import Title from "./ch03/Title";
import Form from "./ch03/Form";
import Button1 from "./ch03/Button1";
import Book1 from "./ch03/Book1";
import Title3 from "./ch03/Title3";
import Profile from "./ch03/Profile";

function App() {
  return (
    <>
      <Title />
      <Form />
      <Button1 action="Send" />
      <Book1>
        <Title3 title="Javascript" author="Abbes" />
      </Book1>
      <Profile />
    </>
  );
}

export default App;
