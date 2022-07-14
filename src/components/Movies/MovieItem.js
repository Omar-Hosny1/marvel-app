import React from "react";
import "./MovieItem.css";
import api_properties from "../../API";
import { Link } from "react-router-dom";
function MovieItem(props) {
  const properties = {
    id: props.id,
    image: props.image,
    title: props.title,
    overview: props.overview,
    rating: props.rating,
    releaseDate: props.releaseDate,
    backdrop: props.backdrop,
  };

  const clickHandler = () => {};

  const returnType = props.poster ? (
    <Link to={`/movies/${props.id}`}>
      <img
        src={`${api_properties.IMAGE_URL}${props.src}`}
        className={props.poster ? "movie-item" : "movie-item-horizontal"}
        onClick={clickHandler}
      />
    </Link>
  ) : (
    <Link to={`/movies/${props.id}`}>
      <img
        src={`${api_properties.IMAGE_URL}${props.backdrop}`}
        className={props.poster ? "movie-item" : "movie-item-horizontal"}
        onClick={clickHandler}
      />
    </Link>
  );
  return returnType;
}

export default MovieItem;
