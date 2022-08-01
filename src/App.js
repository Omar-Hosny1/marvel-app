import React, { useEffect } from "react";
import { Redirect, Route } from "react-router-dom";
import api_properties from "./API";
import Header from "./components/Header/Header";
import Favorite from "./Pages/Favorite";
import Home from "./Pages/Home";
import MovieDetails from "./Pages/MovieDetails";
import Movies from "./Pages/Movies";
import News from "./Pages/News";
import { useDispatch } from "react-redux";
import { moviesActions } from "./store/movies-slice";
import "./App.css";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(api_properties.API_URL)
      .then((response) => {
        if (!response.ok) {
          dispatch(moviesActions.errorHandler());
          return;
        }
        return response.json();
      })
      .then((fullData) => {
        const moviesData = fullData.results;
        dispatch(moviesActions.moviesStopLoadingHandler());
        dispatch(moviesActions.pushAllMovies(moviesData));
        return fullData.results;
      });
  }, []);

  return (
    <div className="app">
      <Header />
      <Route path="/" exact>
        <Redirect to={"/home"} />
      </Route>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/movies" exact>
        <Movies />
      </Route>
      <Route path="/movies/:movieId">
        <MovieDetails />
      </Route>
      <Route path="/favorite">
        <Favorite />
      </Route>
      <Route path="/news">
        <News />
      </Route>
    </div>
  );
}
export default App;
