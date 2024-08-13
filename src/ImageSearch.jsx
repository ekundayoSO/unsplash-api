import React, { useState } from "react";
import axios from "axios";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";

const ImageSearch = () => {
  const [query, setQuery] = useState("");
  const [photos, setPhotos] = useState([]);

  const apiKey = import.meta.env.VITE_UNSPLASH_API_KEY;

  const searchPhotos = async (e) => {
    e.preventDefault();
    const url = `https://api.unsplash.com/search/photos`;
    const params = {
      query: query,
      //   per_page: 10,
    };
    const headers = {
      Authorization: `Client-ID ${apiKey}`,
    };

    try {
      const response = await axios.get(url, { headers, params });
      const imageUrl = response.data.results;
      setPhotos(imageUrl);
    } catch (error) {
      console.error("Error fetching data from Unsplash API", error);
    }
    setQuery("");
  };

  return (
    <div>
      <form onSubmit={searchPhotos} className="mb-4">
        <input
          type="text"
          placeholder="Search for images"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="" type="submit">
          Search
        </button>
      </form>
      <div className="border-2 border-blue-500 p-4">
        <div className="photo">
          {photos.map((photo) => {
            return (
              <div>
                <img
                  key={photo.id}
                  src={photo.urls.small}
                  alt={photo.description}
                  style={{
                    width: "300px",
                    height: "300px",
                    objectFit: "cover",
                    borderRadius: "6px",
                  }}
                />
                <div className="flex justify-between mx-10">
                    <AiOutlineDislike color='red'/>
                    0
                    <AiOutlineLike color="blue"/>
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
