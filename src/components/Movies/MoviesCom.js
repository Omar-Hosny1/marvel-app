import React from "react";
import Image from "../Favorite/login-background.png";
import MovieItem from "./MovieItem";

import { useSelector } from "react-redux";
import "./MoviesCom.css";

function MoviesCom() {
  const isLoading = useSelector((state) => state.movies.isLoading);
  const isErrorHappened = useSelector((state) => state.movies.isErrorHappen);
  const moviesDataRedux = useSelector((state) => state.movies.items);

  const MovieEleOne = moviesDataRedux.map((movie) => {
    return (
      <MovieItem
        id={movie.id}
        key={movie.id}
        src={movie.poster_path}
        title={movie.title}
        overview={movie.overview}
        rating={movie.vote_average}
        releaseDate={movie.release_date}
        backdrop={movie.backdrop_path}
        poster={false}
      />
    );
  });
  const MovieEleTwo = moviesDataRedux.map((movie) => {
    return (
      <MovieItem
        id={movie.id}
        key={movie.id}
        src={movie.poster_path}
        title={movie.title}
        overview={movie.overview}
        rating={movie.vote_average}
        releaseDate={movie.release_date}
        backdrop={movie.backdrop_path}
        poster={true}
      />
    );
  });

  if (isErrorHappened) {
    return <p className="loading">Something Went Wrong</p>;
  }

  if (!isLoading) {
    return (
      <div>
        <img src={Image} className="movies-banner-img" />
        <h1 className="row-title mobile-left">GOOD MOVIES</h1>
        <div className="movies-row-horizontal">{MovieEleTwo}</div>
        <h1 className="row-title">Recently Added</h1>
        <div className="movies-row">{MovieEleOne}</div>
      </div>
    );
  }
  if (isLoading) {
    return (
      <div className="loading">
        <p>Loading....</p>
      </div>
    );
  }
}
export default MoviesCom;
