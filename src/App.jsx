import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useState } from "react";
import ImageSearch from "./components/ImageSearch";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ToggleButton from "./components/ToggleButton";

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
      <Header />
      <ImageSearch
        imagesStatus={imagesStatus}
        handleLikes={handleLikes}
        handleDislikes={handleDislikes}
        addImages={addImages}
      />
      <ToggleButton />
      <Footer />
    </>
  );
}

export default App;
