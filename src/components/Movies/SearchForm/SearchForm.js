

const SearchForm = () => {

  return (
    <div className="search">
      <form
        name="search-movie"
        className="search__container"
        noValidate
      >
        <input
          className={`search__input`}
          placeholder="Фильм"
          required
          name="movie"
          type="text"
          onSubmitCheckbox={undefined}
        />
        <button
          type="submit"
          className={`search__button`}
        ></button>
      </form>
      <span className="search__input_invalid">
      </span>
      <div className="search__filter">
        <label className="search__filter-container">
          <input
            className="search__filter-checkbox"
            type="checkbox"
            onSubmitCheckbox={undefined}
          />
          <span className="search__filter-toggle"></span>
          <span className="search__filter-caption">Короткометражки</span>
        </label>
      </div>
    </div>
  );
}

export default SearchForm;