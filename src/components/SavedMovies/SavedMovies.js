import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";

const SavedMovies = ({ savedMoviesList }) => {
  return (
    <>
      <main className="saved-movies">
        <SearchForm/>
        <MoviesCardList moviesList={savedMoviesList} />
      </main>
    </>
  );
}

export default SavedMovies;