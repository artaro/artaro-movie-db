"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";

import "./MovieList.css";
import movieService from "@/api/movie";
import { setMovieList } from "@/redux/movieSlice";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const dispatch = useDispatch();
  const initialMovies = useSelector((state) => state.movies.movieList);
  const searchResults = useSelector((state) => state.movies.searchResults);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const res = await movieService.getTrendingMovie();
        dispatch(setMovieList(res.results));
        setMovies(res.results);
      } catch (error) {
        console.error("Error fetching trending movies: ", error);
      }
    };

    fetchTrendingMovies();
  }, [dispatch]);

  useEffect(() => {
    if (
      Array.isArray(searchResults.results) &&
      searchResults.results.length > 0
    ) {
      setMovies(searchResults.results);
    } else {
      setMovies(initialMovies);
    }
  }, [searchResults, initialMovies]);

  return (
    <div className="movie-list">
      {movies.map((movie, index) => (
        <div key={index} className="movie-item">
          <div className="image-container">
            <Image
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              alt={movie.title}
              width={175}
              height={250}
            />
            <div className="overlay"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
