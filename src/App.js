import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Portland" />
        <footer>
          Coded by Whitney Wiles and {""}
          <a
            href="https://github.com/whvtitiz/hw-react-weather"
            target="_blank"
            rel="noreferrer"
          >
            open sourced on GitHub.
          </a>
        </footer>
      </div>
    </div>
  );
}
