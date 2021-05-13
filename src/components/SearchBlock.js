import React, { useRef } from "react";
import { useHistory } from "react-router-dom";

export default function SearchBlock() {
  const inputSearch = useRef(null);
  let history = useHistory();

  function handleSearch(e) {
    e.preventDefault();
    history.push(`/block/${inputSearch.current.value}`);
    inputSearch.current.value = null;
  }

  return (
    <>
      <input type="text" ref={inputSearch} />
      <button onClick={handleSearch}>Search</button>
    </>
  );
}
