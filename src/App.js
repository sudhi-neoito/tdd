import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

const App = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const onClickButton = () => {
    setError("");
    if (username === "" || password === "") {
      setError("Invalid Username and Password");
    } else {
      return "saved";
    }
    return "not";
  };

  return (
    <div className="App">
      <div>
        <h2>Testing here</h2>
        <span id="error">{error}</span>
        <div>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="User Name"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div>
          <button id="login-button" onClick={() => onClickButton()}>
            LOGIN
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
