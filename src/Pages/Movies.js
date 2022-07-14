import MoviesCom from "../components/Movies/MoviesCom";
import React from "react";
import "./Movies.css";
const Movies = () => {
  return (
    <div className="movies-main-container">
      <MoviesCom />
    </div>
  );
};

export default React.memo(Movies);
