import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import convertDuration from "../../../utils/convertDuration";
import saveIcon from "../../../images/save-button.svg";
import savedIcon from "../../../images/saved-tick.svg";
import deleteIcon from "../../../images/delete-icon.svg";

const MoviesCard = ({ movie, savedMoviesList, handleSaveCurrentMovie, handleDeleteCurrentMovie }) => {
  let savedMovie = savedMoviesList.find((mov) => mov.movieId === movie.id);
  const [isMovieSaved, setIsMovieSaved] = useState(false);

  const changeMovieStatus = () => {
    if (savedMovie) {
      handleDeleteCurrentMovie(savedMovie);
      setIsMovieSaved(false);
      
    } else {
      handleSaveCurrentMovie(movie);
      setIsMovieSaved(true);
    }
  }

  const handleDeleteMovie = () => {
    handleDeleteCurrentMovie(movie);
  }

  const location = useLocation();


  useEffect(() => {
    if (savedMovie) {
      setIsMovieSaved(true);
    }
  }, [savedMovie]);

  return (
    <li className="movie">
      <a href={movie.trailerLink} target="blank" className="movie__link">
        <img
          className="movie__image"
          src={location.pathname === "/movies" ? `https://api.nomoreparties.co${movie.image.url}` : movie.image}
          alt="Превьюха фильма"
        />
      </a>
      <div className="movie__wrapper">
        <h2 className="movie__title">{movie.nameRU}</h2>
        <p className="movie__duration">{convertDuration(movie)}</p>
      </div>
      {
        location.pathname === "/movies" ? (
          <img
            alt="Сохранить фильм"
            src={!savedMovie ? saveIcon : savedIcon}
            onClick={changeMovieStatus}
            className={!savedMovie ? "movie__save-button" : "movie__saved-button"}
          />
        ) : (
          <img
            alt="Удалить фильм"
            src={deleteIcon}
            onClick={handleDeleteMovie}
            className="movie__delete-button"
          />
        )
      }
    </li>
  );
}

export default MoviesCard;