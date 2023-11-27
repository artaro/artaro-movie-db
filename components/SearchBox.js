"use client";

import React, { useState, useEffect } from "react";
import { FaSearch, FaTimes } from "react-icons/fa";

import "@/styles/SearchBox.scss";

const SearchBox = (props) => {
  const { searchValue, setSearchValue } = props;
  const [, setShowClearButton] = useState(false);

  const handleClearClick = () => {
    setSearchValue("");
    setShowClearButton(false);
  };

  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon" />
      <input
        type="text"
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        placeholder="Type to search..."
      />
      {searchValue && <FaTimes id="clear-icon" onClick={handleClearClick} />}
    </div>
  );
};

export default SearchBox;
