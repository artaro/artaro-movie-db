"use client";

import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import ReactPaginate from "react-paginate";
import Image from "next/image";
import { setMovieList } from "@/redux/movieSlice";
import movieService from "@/api/movie";

import "./MovieList.css";
import "@/styles/react-paginate.scss";

const MovieList = () => {
  const [movieData, setMovieData] = useState({
    page: 1,
    results: [],
    total_pages: 0,
    total_results: 0,
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPopularMovies = async (language, page) => {
      setIsLoading(true);
      try {
        const res = await movieService.getPopularMoviesByPage(language, page);
        dispatch(setMovieList(res));
        setMovieData(res);
      } catch (error) {
        console.error("Error fetching trending movies: ", error);
      }
      setIsLoading(false);
    };
    fetchPopularMovies("en-US", currentPage);
  }, [dispatch, currentPage]);

  const handlePageClick = (event) => {
    setCurrentPage(event.selected + 1);
  };

  return (
    <>
      <div className="movie-list">
        {isLoading
          ? Array.from({ length: 20 }).map((_, index) => (
              <div key={index} className="movie-item skeleton"></div>
            ))
          : movieData.results.map((movie, index) => (
              <div key={index} className="movie-item">
                <div className="image-container">
                  <Image
                    src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                    alt={movie.title}
                    width={175}
                    height={250}
                  />
                </div>
              </div>
            ))}
      </div>
      <ReactPaginate
        className="react-paginate"
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={500}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    </>
  );
};

export default MovieList;
