import React, { useState, useEffect } from "react";
import axios from "axios";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";

const ImageSearch = ({
  imagesStatus,
  handleLikes,
  handleDislikes,
  addImages,
}) => {
  const [query, setQuery] = useState("");
  const [photos, setPhotos] = useState([]);

  const apiKey = import.meta.env.VITE_UNSPLASH_API_KEY;

  const searchPhotos = async (e) => {
    e.preventDefault();
    const url = `https://api.unsplash.com/search/photos`;
    const params = { query: query };
    const headers = { Authorization: `Client-ID ${apiKey}` };

    try {
      const response = await axios.get(url, { headers, params });
      const imageUrl = response.data.results;
      setPhotos(imageUrl);
      addImages(imageUrl); // Initialize the imagesStatus state
    } catch (error) {
      console.error("Error fetching data from Unsplash API", error);
    }
    setQuery("");
  };

  return (
    <div className="mt-12">
      <form onSubmit={searchPhotos} className="mb-4">
        <input
          className="text-black"
          type="text"
          placeholder="Search for images"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <div>
        <div className="photo text-center">
          {photos.map((photo) => {
            const imageStatus =
              imagesStatus.find((img) => img.id === photo.id)?.status || 0;
            return (
              <div key={photo.id}>
                <img
                  src={photo.urls.small}
                  alt={photo.description}
                  style={{
                    width: "300px",
                    height: "300px",
                    objectFit: "cover",
                    borderRadius: "6px",
                  }}
                />
                <div className="icons mt-0.5">
                  <div className="flex items-center">
                    <AiOutlineDislike
                      color="red"
                      onClick={() => handleDislikes(photo.id)}
                    />
                  </div>
                  <span className="text-xs">{imageStatus}</span>
                  <div className="flex items-center">
                    <AiOutlineLike
                      color="blue"
                      onClick={() => handleLikes(photo.id)}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ImageSearch;
