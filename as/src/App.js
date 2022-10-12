import React, {useState} from "react";
import axios from "axios";


function onBtClick() {
  console.log("abc");
}

function App() {
  const[name, setName] = useState("Init-Pressed");

  function getStatus() {
    axios.get("http://localhost:8080/",  { crossdomain: true }).then(response => {
      setName(response.data.name);
    });
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
