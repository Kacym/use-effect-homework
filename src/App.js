import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    setUsers(data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  const [consoleInputValue, setConsoleInputValue] = useState("");
  const [localStorageInputValue, setLocalStorageInputValue] = useState("");

  const getConsoleInputValue = (e) => {
    setConsoleInputValue(e.target.value);
  };

  useEffect(() => {
    console.log(consoleInputValue);
  }, [consoleInputValue])

  // local storage input

  const getLocalStorageInputValue = (e) => {
    setLocalStorageInputValue(e.target.value)
  }

  useEffect(() => {
    localStorage.setItem('local', localStorageInputValue)
  }, [localStorageInputValue])

  return (
    <div className="App">
      {users.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
      <button onClick={() => setUsers([])}>удалить пользователей</button>
      <button onClick={getUsers}>получить пользователей</button>

      <hr />

      <input onChange={getConsoleInputValue} placeholder="консоль" />
      <input onChange={getLocalStorageInputValue} placeholder="local storage" />
    </div>
  );
}

export default App;
