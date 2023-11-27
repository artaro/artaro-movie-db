"use client";

import React from "react";
import Image from "next/image";

import "@/styles/MovieList.scss";
import "@/styles/react-paginate.scss";

const MovieList = (props) => {
  const { movies, isLoading } = props;

  return (
    <>
      <div className="movie-list">
        {isLoading
          ? Array.from({ length: 20 }).map((_, index) => (
              <div key={index} className="movie-item skeleton"></div>
            ))
          : movies.results.map((movie, index) => (
              <div key={index} className="movie-item">
                <Image
                  src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                  alt={movie.title}
                  sizes="(max-width: 600px) 100vw, 600px"
                  fill
                />
              </div>
            ))}
      </div>
    </>
  );
};

export default MovieList;
