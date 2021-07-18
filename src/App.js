import React, { useState } from "react";
import "./App.css";
import WordCloud from "./components/WordCloud";

const defaultList = [
  { value: "night", count: 38 },
  { value: "drive", count: 30 },
  { value: "system", count: 28 },
  { value: "neon", count: 25 },
  { value: "lover", count: 33 },
  { value: "time", count: 18 },
  { value: "swim", count: 20 },
  { value: "lower", count: 10 },
  { value: "work", count: 15 },
  { value: "office", count: 22 },
  { value: "business", count: 40 },
  { value: "experience", count: 13 },
  { value: "physician", count: 26 },
  { value: "education", count: 22 },
  { value: "patient", count: 17 },
  { value: "sure", count: 33 },
  { value: "insurance", count: 32 },
  { value: "finally", count: 42 },
];

function App() {
  const [list, setList] = useState(defaultList);
  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          border: "1px solid red",
          width: 600,
          height: 600,
          margin: "0 auto",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <WordCloud list={list} />
      </div>
    </div>
  );
}

export default App;
