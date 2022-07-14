import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { BiHeart } from "react-icons/bi";
import {
  AiOutlineUnorderedList,
  AiOutlinePlaySquare,
  AiFillHeart,
} from "react-icons/ai";
import { favoriteActions } from "../../store/favorite-slice";
import "./MovieDetailsCom.css";

function MovieDetailsCom(props) {
  const dispatch = useDispatch();
  const properties = {
    id: props.id,
    image: props.image,
    title: props.title,
    rating: props.rating,
    overview: props.overview,
    date: props.releaseDate,
  };

  const backdrop = props.backdrop;

  const style = {
    background: `url(${backdrop})`,
    backgroundPosition: "center",
    height: "100vh",
    backgroundSize: "cover",
  };

  const addToFavoriteItems = () => {
    dispatch(favoriteActions.addToFavorite(properties));
  };

  return (
    <div className="movie-details" style={style}>
      <div className="movie-details-overly"></div>
      <div className="movie-details-container">
        <div className="movie-details-content">
          <h1>{props.title}</h1>
          <p>{props.overview}</p>
          <div className="btns">
            <button onClick={() => window.alert("Thanks For Watching ❤")}>
              Play <AiOutlinePlaySquare />
            </button>
            <button onClick={addToFavoriteItems}>
              Favorite <BiHeart />
            </button>
          </div>
          <span>Rating : {props.rating}</span>
          <span>Release Date : {props.releaseDate}</span>
        </div>
        <div className="movie-details-image">
          <img src={props.image} className="image-movie-details" />
        </div>
      </div>
    </div>
  );
}

export default MovieDetailsCom;
