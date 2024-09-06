import React, { useState } from 'react';
import Tesseract from 'tesseract.js';

const ImageToText = () => {
  const [image, setImage] = useState(null);
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // New state for status

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const extractText = () => {
    if (!image) return;

    setLoading(true);
    Tesseract.recognize(
      image,
      'eng',
      {
        logger: (m) => console.log(m), // Optional: log progress
      }
    ).then(({ data: { text } }) => {
      setText(text);
      checkForSpecificTexts(text);
      setLoading(false);
    }).catch((error) => {
      console.error(error);
      setLoading(false);
    });
  };

  const checkForSpecificTexts = (extractedText) => {
    const textsToCheck = [
      "Timbre Fiscal-Fiscal Stamp",
      "Timbre communal",
      "copie certifier conforme"
    ];
    
    const found = textsToCheck.some(item => extractedText.includes(item));
    
    if (found) {
      setStatus(200); // Set status to 200 if found
    } else {
      setStatus(404); // Set status to 404 if not found
    }
  };

  return (
    <div>
      <h1>Extract Text from Image</h1>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      <button onClick={extractText} disabled={loading}>
        {loading ? 'Processing...' : 'Extract Text'}
      </button>
      {text && (
        <div>
          <h2>Extracted Text:</h2>
          <p>{text}</p>
        </div>
      )}
      {status !== null && (
        <div>
          <h2>Status:</h2>
          <p>{status === 200 ? 'Text Found (200)' : 'Text Not Found (404)'}</p>
        </div>
      )}
    </div>
  );
};

export default ImageToText;