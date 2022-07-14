import React from "react";
import { Redirect, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Favorite from "./Pages/Favorite";
import Home from "./Pages/Home";
import MovieDetails from "./Pages/MovieDetails";
import Movies from "./Pages/Movies";
import News from "./Pages/News";

function App() {
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
