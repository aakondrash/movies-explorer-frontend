import { useLocation } from "react-router-dom";

import { useEffect, useState } from "react";

const SearchForm = ({ onSearch, onTickCheckbox }) => {
  const [searchValue, setSearchValue] = useState("");
  const [checkboxState, setCheckboxState] = useState(false);

  const [searchError, setSearchError] = useState({
    errorMessage: "",
    isSearchValid: true
  });

  const location = useLocation();

  const handleSearchTyping = (e) => {
    setSearchValue(e.target.value);
    if (e.target.value.length !== 0) {
      setSearchError({
        errorMessage: "",
        isSearchValid: e.target.validity.valid
      });
    } else {
      setSearchError({
        errorMessage: "Введите ключевое слово",
        isSearchValid: e.target.validity.valid,
      });
    }
  }

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (!searchValue) {
      return setSearchError({
        errorMessage: "Введите ключевое слово",
        isValid: false,
      });
    } else {
      onSearch(searchValue, checkboxState);
    }
  }

  const handleCheckboxStateChange = () => {
    setCheckboxState(!checkboxState);
    onTickCheckbox(!checkboxState);
  }

  useEffect(() => {
    if (location.pathname === "/movies") {
      setSearchValue(localStorage.getItem("requestText"));
      setCheckboxState(JSON.parse(localStorage.getItem("checkboxState")));
      setSearchError({
        errorMessage: "",
        isSearchValid: true
      });
      onTickCheckbox(JSON.parse(localStorage.getItem("checkboxState")));
    } else if (location.pathname === "/saved-movies") {
      setCheckboxState(JSON.parse(localStorage.getItem("checkboxStateSavedMovies")));
      onTickCheckbox(JSON.parse(localStorage.getItem("checkboxStateSavedMovies")));
    }
  }, [location]);

  return (
    <section className="search">
      <form
        name="search-movie"
        className="search__container"
        onSubmit={handleSearchSubmit}
        noValidate
      >
        <input
          className={`search__input ${!searchError.isSearchValid && "search__input_error"}`}
          placeholder="Фильм"
          required
          name="movie"
          type="text"
          value={searchValue || ""}
          onChange={handleSearchTyping}
        />
        <button
          type="submit"
          className={`search__button ${!searchError.isSearchValid ? "search__button_error" : ""}`}
          disabled={!searchError.isSearchValid}
        ></button>
      </form>
      <span className="search__input_invalid">
        {searchError.errorMessage}
      </span>
      <form className="search__filter">
        <label className="search__filter-container">
          <input
            className="search__filter-checkbox"
            type="checkbox"
            onChange={handleCheckboxStateChange}
            checked={checkboxState ? true : false}
          />
          <span className="search__filter-toggle"></span>
          <span className="search__filter-caption">Короткометражки</span>
        </label>
      </form>
    </section>
  );
}

export default SearchForm;