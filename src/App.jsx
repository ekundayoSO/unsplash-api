import "./App.css";
import { useState } from "react";
import ImageSearch from "./ImageSearch";

function App() {
  const [imagesStatus, setImagesStatus] = useState([]);

  const handleLikes = (id) => {
    setImagesStatus((prevImagesStatus) =>
      prevImagesStatus.map((image) =>
        image.id === id ? { ...image, status: image.status + 1 } : image
      )
    );
  };

  const handleDislikes = (id) => {
    setImagesStatus((prevImagesStatus) =>
      prevImagesStatus.map((image) =>
        image.id === id ? { ...image, status: image.status - 1 } : image
      )
    );
  };

  const addImages = (images) => {
    const imagesWithStatus = images.map((image) => ({
      id: image.id,
      status: 0,
    }));
    setImagesStatus(imagesWithStatus);
  };

  return (
    <>
      <ImageSearch
        imagesStatus={imagesStatus}
        handleLikes={handleLikes}
        handleDislikes={handleDislikes}
        addImages={addImages}
      />
    </>
  );
}

export default App;
