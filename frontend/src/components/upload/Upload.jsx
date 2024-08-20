import React, { useState } from "react";
import axios from "axios";

const Upload = () => {
  const [file, setFile] = useState(null);
  const [content, setContent] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("file", file);

    try {
      const apiEndpoint = "https://lepide-assignment.onrender.com/upload";
      // const apiEndpoint = "http://localhost:5000/upload";
      const response = await fetch(apiEndpoint, {
        method: "POST",
        body: formData,
      });
      // setContent(response.data.content);
      const data = await response.json();
      setContent(data.result[0].summary_text);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
      <div
        className="displayContent"
        style={{
          textWrap: "wrap",
          border: "1px solid black",
          margin: "10px 0",
          padding: "5px 10px",
        }}
      >
        <pre>{content}</pre>
      </div>
    </div>
  );
};

export default Upload;
