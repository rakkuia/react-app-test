import React, { useState } from "react";
import "./styles.css";

import { Card } from "../../components/Card";

export function Home() {
  let id = 0;
  const [username, setUsername] = useState();
  const [users, setUsers] = useState([]);

  function handleAddUser() {
    const newUser = {
      name: username,
      time: new Date().toLocaleDateString("pt-br", {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      }),
    }
    setUsers(prevState => [newUser, ...prevState,]);
  }

  

  return (
    <div className="container">
      <h1>Hello World: {username}</h1>
      <input
        type="text"
        placeholder="Insert data"
        onChange={(e) => setUsername(e.target.value)}
      />
      <button type="button" onClick={handleAddUser}>Add</button>

     { 
     users.map(user => <Card key={id++} name={user.name} time={user.time} /> )
     }

    </div>
  );
}
