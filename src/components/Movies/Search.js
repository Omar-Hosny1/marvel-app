import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import "./Search.css";

function Search() {
  return (
    <div className="search">
      <input type="text" placeholder="Search" />
      <AiOutlineSearch />
    </div>
  );
}

export default Search;
