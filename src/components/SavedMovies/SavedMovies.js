import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";

const SavedMovies = ({ savedMoviesList }) => {
  return (
    <>
      <section className="saved-movies">
        <SearchForm/>
        <MoviesCardList moviesList={savedMoviesList} />
      </section>
    </>
  );
}

export default SavedMovies;