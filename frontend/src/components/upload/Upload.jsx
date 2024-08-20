import React, { useState } from "react";
import "./upload.css";

const Upload = () => {
  const [file, setFile] = useState(null);
  const [content, setContent] = useState("");
  const [llmRes, setLlmRes] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("file", file);

    try {
      // const apiEndpoint = "https://lepide-assignment.onrender.com/upload";
      const apiEndpoint = "http://localhost:5000/upload";
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

    setLlmRes(true);
  };

  return (
    <div className="upload-main">
      <div className="upload">
        <div className="file-upload-inp">
          <input type="file" onChange={handleFileChange} />
        </div>
        <div className="upload-btn">
          <button onClick={handleUpload}>Upload</button>
        </div>
      </div>

      {llmRes ? <div className="displayContent">{content}</div> : <div className="displayContent" style={{color: "#000"}}>Summarized content will be displayed here </div>}
    </div>
  );
};

export default Upload;
