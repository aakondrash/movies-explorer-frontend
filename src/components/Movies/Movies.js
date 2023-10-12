import MoviesCardList from "./MoviesCardList/MoviesCardList";
import SearchForm from "./SearchForm/SearchForm";
import Preloader from "./Preloader/Preloader";

const Movies = ({ moviesList, onProcessSearchRequest, foundMoviesList, savedMoviesList, preloaderState, onChangeCheckboxState, handleDeleteSavedMovie, handleSaveMovie }) => {
  return (
    <>
      <main className="movies">
        <SearchForm onSearch={onProcessSearchRequest} onTickCheckbox={onChangeCheckboxState}/>
        {preloaderState ? (
          <Preloader />
        ) : (
          <MoviesCardList moviesList={foundMoviesList} savedMoviesList={savedMoviesList} onSaveMovie={handleSaveMovie} onDeleteMovie={handleDeleteSavedMovie}/>
        )}
      </main>
    </>
  );
}

export default Movies;