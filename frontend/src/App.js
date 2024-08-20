import React from "react";
import Upload from "./components/upload/Upload.jsx";
import './style.css';

const App = () => {
  return (
    <div className="App" style={{ padding: "10px" }}>
      <div className="heading">
        <h1>Summarizer</h1>
        <h2>File upload and LLM summarization endpoint integerated</h2>
      </div>

      <Upload />
    </div>
  );
};

export default App;
