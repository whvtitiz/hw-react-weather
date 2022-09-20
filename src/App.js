import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <p>
          Coded by Whitney Wiles and {""}
          <a
            href="https://github.com/whvtitiz/hw-react-weather"
            target="_blank"
          >
            open sourced on GitHub.
          </a>
        </p>
      </div>
    </div>
  );
}
