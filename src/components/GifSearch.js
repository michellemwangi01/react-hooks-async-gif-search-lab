import React, { useState } from "react";

const GifSearch = ({ onSearchGif }) => {
  const [searchValue, setSearchValue] = useState("");

  const inputHandler = (e) => {
    setSearchValue(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    onSearchGif(searchValue);
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          onChange={inputHandler}
          value={searchValue}
          placeholder="search gif"
        ></input>
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default GifSearch;
