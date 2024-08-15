import React, { useState } from 'react';
import axios from 'axios';

const Upload = () => {
    const [file, setFile] = useState(null);
    const [content, setContent] = useState('');

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleUpload = async () => {
        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await axios.post('https://lepide-assignment.onrender.com/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            setContent(response.data.content);
        } catch (error) {
            console.error('Error uploading file:', error);
        }
    };

    return (
        <div>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload</button>
            <div className="displayContent"
                style={{
                    textWrap: "wrap",
                    border: "1px solid black",
                    margin: "10px 0",
                    padding: "5px 10px"
                }}
            >
                <pre>{content}</pre>
            </div>
        </div>
    );
};

export default Upload;
