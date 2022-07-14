import React, { useEffect, useState } from "react";
import Image from "../Favorite/login-background.png";
import MovieItem from "./MovieItem";
import { moviesActions } from "../../store/movies-slice";
import Search from "./Search";
import "./MoviesCom.css";
import { useDispatch, useSelector } from "react-redux";
function MoviesCom() {
  const dispatch = useDispatch();
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
  return (
    <div>
      {/* <Search /> */}
      <img src={Image} className="movies-banner-img" />
      <h1 className="row-title mobile-left">GOOD MOVIES</h1>
      <div className="movies-row-horizontal">{MovieEleTwo}</div>
      <h1 className="row-title">Recently Added</h1>
      <div className="movies-row">{MovieEleOne}</div>
    </div>
  );
}
export default MoviesCom;
