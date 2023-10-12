import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import SearchForm from "../Movies/SearchForm/SearchForm";
import Preloader from "../Movies/Preloader/Preloader";

const SavedMovies = ({ moviesList, onProcessSearchRequest, foundMoviesList, savedMoviesList, preloaderState, onChangeCheckboxState, handleDeleteSavedMovie, handleSaveMovie }) => {
  return (
    <>
      <main className="movies">
        <SearchForm onSearch={onProcessSearchRequest} onTickCheckbox={onChangeCheckboxState}/>
        {preloaderState ? (
          <Preloader />
        ) : (
          <MoviesCardList moviesList={savedMoviesList} savedMoviesList={savedMoviesList} onSaveMovie={handleSaveMovie} onDeleteMovie={handleDeleteSavedMovie}/>
        )}
      </main>
    </>
  );
}

export default SavedMovies;