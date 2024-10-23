import "./App.css";
import Title from "./ch03/Title";
import Form from "./ch03/Form";
import Button1 from "./ch03/Button1";
import Book1 from "./ch03/Book1";
import Title3 from "./ch03/Title3";
import Profile from "./ch03/Profile";
import List, { Child } from "./ch03/List";
import { Book2 } from "./ch03/Book2";
import Counter from "./ch04/Counter";
import PageCounter from "./ch04/PageCounter";
import ToggleLight from "./ch04/ToggleLight";
import DataFetcher from "./ch04/DataFetcher";
import UserProvider from "./ch04/UserProvider";
import UserInfo from "./ch04/UserInfo";
import UserControls from "./ch04/UserControls";
import ThemeProvider from "./ch04/ThemeProvider";
import ThemedButton from "./ch04/ThemedButton";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./ch05/Home";
import About from "./ch05/About";

const users = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
  { id: 3, name: "Alice" },
  { id: 4, name: "Bob" },
  { id: 5, name: "Abbes" },
  { id: 6, name: "Aron" },
  { id: 7, name: "Abram" },
];

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

      <Book2 isNew={false}>
        <Title3 title="React.js" author="Abbes" />
      </Book2>
      <Counter />

      <PageCounter />
      <ToggleLight />
      <DataFetcher />

      {/* useContext exemple */}
      <UserProvider>
        <div>
          <h1>User Authentication Example</h1>
          <UserInfo />
          <UserControls />
        </div>
      </UserProvider>
      <ThemeProvider>
        <ThemedButton />
      </ThemeProvider>


      {/* use of react router dom */}
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </nav>
          <hr />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
