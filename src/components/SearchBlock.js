import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
import "./SearchBlock.scss";
import search from "../assets/img/search.svg";

export default function SearchBlock() {
  const inputSearch = useRef(null);
  let history = useHistory();

  function handleSearch(e) {
    e.preventDefault();
    const searchTerm = inputSearch.current.value;
    searchTerm.length === 0
      ? alert("Please, input block's height")
      : history.push(`/block/${inputSearch.current.value}`);

    inputSearch.current.value = null;
  }

  return (
    <div className="SearchBlock">
      <input
        type="text"
        ref={inputSearch}
        placeholder="Search blocks by height"
      />
      <button onClick={handleSearch}>
        <img src={search} alt="search" />
      </button>
    </div>
  );
}
