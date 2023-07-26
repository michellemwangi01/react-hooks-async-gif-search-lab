import React from "react";

const GifList = ({ gifs }) => {
  console.log(gifs);
  const gifsData = gifs.map((gif) => (
    <li key={gif.id}>
      <img src={gif.images.original.url} />
    </li>
  ));
  return (
    <div>
      <ul>{gifsData}</ul>
    </div>
  );
};

export default GifList;
