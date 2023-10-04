import MoviesCardList from "./MoviesCardList/MoviesCardList";
import SearchForm from "./SearchForm/SearchForm";

const Movies = ({ moviesList }) => {
  return (
    <>
      <main className="movies">
        <SearchForm/>
        <MoviesCardList moviesList={moviesList} />
      </main>
    </>
  );
}

export default Movies;