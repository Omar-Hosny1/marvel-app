import React from "react";
import api_properties from "../../API";
import "./FavoriteItem.css";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { favoriteActions } from "../../store/favorite-slice";
function FavoriteItem(props) {
  const trimer = (string) => {
    if (string.length > 100) {
      return string.substring(0, 140) + "...";
    } else {
      return string;
    }
  };
  const overview = trimer(props.overview);
  const dispatch = useDispatch();

  const deleteHandler = () => {
    dispatch(favoriteActions.removeFromFavorite(props.id));
  };
  return (
    <div className="favorite-item">
      <div className="favorite-item-content">
        <h1>{props.title}</h1>
        <p>{overview}</p>
        <button onClick={deleteHandler}>DELETE</button>
      </div>
      <div className="favorite-item-img">
        <img src={`${api_properties.IMAGE_URL}${props.image}`} />
      </div>
    </div>
  );
}

export default FavoriteItem;
