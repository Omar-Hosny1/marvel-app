import React from "react";
import {
  AiOutlineHome,
  AiOutlineUnorderedList,
  AiOutlineUser,
} from "react-icons/ai";
import { BiHeart, BiVideo, BiNews } from "react-icons/bi";
import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo/viewers-marvel.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <Link to="/home">
        <img src={Logo} className="logo" />
      </Link>
      <nav>
        <NavLink to="/home" activeClassName="active" className="nav-icon">
          <AiOutlineHome /> <p className="nav-info">Home 🏠</p>
        </NavLink>
        <NavLink to="/movies" activeClassName="active" className="nav-icon">
          <BiVideo /> <p className="nav-info">Movies 🎬</p>
        </NavLink>
        <NavLink to="/favorite" activeClassName="active" className="nav-icon">
          <BiHeart /> <p className="nav-info">Favorite 🤍</p>
        </NavLink>
        <NavLink to="/news" activeClassName="active" className="nav-icon">
          <BiNews />
          <p className="nav-info">News 📰</p>
        </NavLink>
      </nav>
      <AiOutlineUser className="user" />
    </div>
  );
};

export default Header;
