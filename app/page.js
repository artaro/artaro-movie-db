"use client";
import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import Navbar from "@/components/Navbar";
import MovieList from "@/components/MovieList";

import "@/styles/page.scss";
import movieService from "@/api/movie";

export default function Home() {
  const [movies, setMovies] = useState({
    page: 1,
    results: [],
    total_pages: 0,
    total_results: 0,
  });
  const [searchValue, setSearchValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const handleGetMovies = async (language, page, searchValue) => {
    try {
      if (searchValue) {
        setIsLoading(true);
        const res = await movieService.searchMovie(
          searchValue,
          false,
          language,
          page
        );

        setIsLoading(false);
        setMovies(res);
      } else {
        setIsLoading(true);
        const res = await movieService.getPopularMoviesByPage(language, page);

        setIsLoading(false);
        setMovies(res);
      }
    } catch (error) {
      console.error("Error get popular movies:", error);
    }
  };

  useEffect(() => {
    handleGetMovies("en-US", currentPage, searchValue);
  }, [currentPage, searchValue]);

  return (
    <>
      <Navbar searchValue={searchValue} setSearchValue={setSearchValue} />
      <main className="main">
        <MovieList movies={movies} isLoading={isLoading} />
        <ReactPaginate
          className="react-paginate"
          breakLabel="..."
          nextLabel=">"
          onPageChange={(event) => setCurrentPage(event.selected + 1)}
          pageRangeDisplayed={3}
          pageCount={movies.total_pages <= 500 ? movies.total_pages : 500}
          previousLabel="<"
          renderOnZeroPageCount={null}
        />
      </main>
    </>
  );
}
