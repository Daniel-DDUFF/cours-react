import logo from "./logo.svg";
import "./App.css";
import Title from "./ch03/Title";
import Form from "./ch03/Form";
import Button1 from "./ch03/Button1";
import Book1 from "./ch03/Book1";
import Title3 from "./ch03/Title3";
import Profile from "./ch03/Profile";
import List, { Child } from "./ch03/List";

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

      <List>
        <Child text="Item 1" />
        <Child text="Item 2" />
        <Child text="Item 3" />
        <Child text="Item 4" />
      </List>
      <span>Item 5</span>
    </>
  );
}

export default App;
