import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import MovieDetailsCom from "../components/MovieDetails/MovieDetailsCom";
import api_properties from "../API";
import "./MovieDetails.css";
function MovieDetails() {
  const params = useParams();
  const id = params.movieId;
  const moviesData = useSelector((state) => state.movies.items);
  const movieData = moviesData.find((movie) => movie.id === +id);

  return (
    <div className="movie-details-main-container">
      <MovieDetailsCom
        title={movieData.title}
        overview={movieData.overview}
        releaseDate={movieData.release_date}
        rating={movieData.vote_average}
        image={api_properties.IMAGE_URL + movieData.poster_path}
        backdrop={api_properties.IMAGE_URL + movieData.backdrop_path}
        id={movieData.id}
      />
    </div>
  );
}

export default MovieDetails;
