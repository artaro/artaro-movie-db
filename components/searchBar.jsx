"use client";

import React, { useState, useEffect } from "react";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  // State to track whether to show the clear button
  const [showClearButton, setShowClearButton] = useState(false);

  // Timer to delay API search after typing
  let searchTimer;

  // Function to handle input change
  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    // Show clear button if there's input
    setShowClearButton(value.length > 0);

    // Clear existing timer and set a new one
    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => {
      // Trigger API search after a brief pause
      onSearch(value);
    }, 500); // Adjust the delay as needed
  };

  // Function to handle clear button click
  const handleClearClick = () => {
    setSearchTerm("");
    setShowClearButton(false);
    onSearch(""); // You may want to trigger a search with an empty string to reset results
  };

  // Effect to clean up the timer on component unmount
  useEffect(() => {
    return () => {
      clearTimeout(searchTimer);
    };
  }, [searchTimer]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      {showClearButton && (
        <button type="button" onClick={handleClearClick}>
          Clear
        </button>
      )}
    </div>
  );
};

export default SearchBar;
