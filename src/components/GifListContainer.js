import React, { useState, useEffect } from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";

const GifListContainer = () => {
  const [gifs, setGifs] = useState([]);
  let topThreeGifs = [];

  useEffect(() => {
    fetch(
      "https://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=rnup2QTfdGEJM80FdP5IGiwPAXryZfuX"
    )
      .then((res) => res.json())
      .then((data) => {
        const gifsData = data.data;
        for (let i = 20; i <= 22; i++) {
          console.log(gifsData[i].title);
          topThreeGifs.push(gifsData[i]);
        }
        setGifs(topThreeGifs);
      });
  }, []);

  console.log(gifs);

  function searchGif(searchTerm) {
    console.log(searchTerm);
    fetch(
      `https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=rnup2QTfdGEJM80FdP5IGiwPAXryZfuX`
    )
      .then((res) => res.json())
      .then((data) => {
        const searchedGifs = data.data.slice(0, 3);
        setGifs(searchedGifs);
      });
    // (newGifItem);
  }

  return (
    <div>
      <GifSearch onSearchGif={searchGif} />
      <GifList gifs={gifs} />
    </div>
  );
};

export default GifListContainer;
