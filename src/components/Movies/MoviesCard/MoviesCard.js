import convertDuration from "../../../utils/convertDuration";
import saveIcon from "../../../images/save-button.svg";
// import savedIcon from "../../../images/saved-tick.svg";
// import deleteIcon from "../../../images/delete-icon.svg";

const MoviesCard = ({ movie }) => {

  return (
    <li className="movie">
      <a href={movie.trailerLink} target="blank" className="movie__link">
        <img
          className="movie__image"
          src={movie.image}
          alt="Превьюха фильма"
        />
      </a>
      <div className="movie__wrapper">
        <h2 className="movie__title">{movie.nameRU}</h2>
        <p className="movie__duration">{convertDuration(movie)}</p>
      </div>
      <img
        alt="Сохранить фильм"
        src={saveIcon}
        className="movie__save-button"
      />
      {/* <img
        alt="Удалить фильм"
        src={deleteIcon}
        className="movie__delete-button"
      /> */}
    </li>
  );
}

export default MoviesCard;