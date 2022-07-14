import React from "react";
import "./FavoriteCom.css";
import { useSelector } from "react-redux/es/exports";
import FavoriteItem from "./FavoriteItem";
import Image from "./login-background.png";
function FavoriteCom() {
  const favoriteItems = useSelector((state) => state.favorite.items);
  const favoriteEle = favoriteItems.map((ele) => {
    return (
      <FavoriteItem
        title={ele.title}
        overview={ele.overview}
        image={ele.image}
        key={ele.id}
        id={ele.id}
      />
    );
  });
  return (
    <div className="favorite">
      <img src={Image} className="banner-img" />
      <h1 className="favorite-title">#Your Favorite Movies</h1>
      <div className="favorite-container">{favoriteEle}</div>
      {favoriteEle.length === 0 && <h1 className="no-items">NO ITEMS YET</h1>}
    </div>
  );
}

export default FavoriteCom;
