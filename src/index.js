// import react and react dom libraries
import React from "react";
import ReactDOM from "react-dom";

function getButtonText() {
  return "Click on ME !";
}
// Create a react component
export default function App() {
  const buttonText = "Click Me!";
  return (
    <div>
      <label className="label" for="name">
        Enter Name:
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: "red", color: "white" }}>
        {getButtonText()}
      </button>
    </div>
  );
}

//Take react component and show it on screen
ReactDOM.render(<App />, document.getElementById("root"));
