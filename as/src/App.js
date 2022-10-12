import React, { useState } from "react";

function App() {
  const [name, setName] = useState("Init-Pressed");
  const [status, setStatus] = useState(false);

  function getStatus() {
    setStatus(!status);
    setName(status ? "Yes" : "No");
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={getStatus} type="submit">Connected?</button>
      </header>
      <h1>Status: {name}</h1>
    </div>
  );
}

export default App;
