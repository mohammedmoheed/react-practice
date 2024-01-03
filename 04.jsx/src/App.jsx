import "./App.css";
import React from "react";

//JSX
// <h1> Hi I am Moheed </h1>

// Transformed JavaScript
const element = React.createElement("h1", null, "Hi I am Moheed");

// JSX
// const nestedelement = (
//   <div>
//     <h1>Hello</h1>
//     <p>JSX!</p>
//   </div>
// );

// Transformed JavaScript
const nestedElement = React.createElement(
  "div",
  null,
  React.createElement("h1", null, "Hello"),
  React.createElement("p", null, "JSX!")
);

function App() {
  return nestedElement;
}

export default App;
