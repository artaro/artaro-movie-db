"use client";

import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { FaSearch, FaTimes } from "react-icons/fa";
import { setSearchResults } from "@/redux/movieSlice";
import movieService from "@/api/movie";

import "./SearchBar.css";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showClearButton, setShowClearButton] = useState(false);

  const dispatch = useDispatch();

  let searchTimer;

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    setShowClearButton(value.length > 0);

    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => {
      handleSearch(value);
    }, 500);
  };

  const handleClearClick = () => {
    setSearchTerm("");
    setShowClearButton(false);
    handleSearch("");
  };

  const handleSearch = async (query) => {
    try {
      const res = await movieService.searchMovie(query);
      dispatch(setSearchResults(res));
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    return () => {
      clearTimeout(searchTimer);
    };
  }, [searchTimer]);

  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon" />
      <input
        type="text"
        placeholder="Avengers"
        value={searchTerm}
        onChange={handleInputChange}
      />
      {showClearButton && (
        <FaTimes id="clear-icon" onClick={handleClearClick} />
      )}
    </div>
  );
};

export default SearchBar;
