import MoviesCardList from "./MoviesCardList/MoviesCardList";
import SearchForm from "./SearchForm/SearchForm";

const Movies = ({ moviesList }) => {
  return (
    <>
      <section className="movies">
        <SearchForm/>
        <MoviesCardList moviesList={moviesList} />
      </section>
    </>
  );
}

export default Movies;