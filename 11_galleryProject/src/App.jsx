import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [images, setImages] = useState([]);

  const fetchImages = async () => {
    try {
      const res = await fetch(
        "https://picsum.photos/v2/list?page=1&limit=100"
      );
      const data = await res.json();

      // store full objects
      setImages(data);

    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <div className="app">
      <button className="btn" onClick={fetchImages}>
        Refresh Images
      </button>

      <div className="container">
        {images.map((item) => (
          <img
            key={item.id}
            src={item.download_url + "?w=300"}  // important fix
            alt="img"
            className="image"
          />
        ))}
      </div>
    </div>
  );
};

export default App;