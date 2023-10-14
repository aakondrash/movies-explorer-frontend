import MoviesCard from "../MoviesCard/MoviesCard";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const MoviesCardList = ({ moviesList, savedMoviesList, onSaveMovie, onDeleteMovie }) => {
  const [browserWidth, setBrowserWidth] = useState(window.innerWidth);
  const [maxCardsToRender, setMaxCardsToRender] = useState(12)

  const [moviesToRender, setMoviesToRender] = useState([]);

  const location = useLocation();

  const setDefaultMoviesVisible = (number) => {
    setMaxCardsToRender(number);
    let movies = [];
    if (moviesList) {
      moviesList.forEach((element, i) => {
        if (i < number) {
          movies.push(element);
        }
      });
    }
    setMoviesToRender(movies);
  }

  const setMoviesVisible = () => {
    let movies = [];
    if (moviesList) {
      moviesList.forEach((element, i) => {
        if (i < maxCardsToRender) {
          movies.push(element);
        }
      });
    }
    setMoviesToRender(movies);
  }

  const handleMoreButtonClick = () => {
    if (browserWidth < 480) {
      setMaxCardsToRender(maxCardsToRender + 2);
    } else if (browserWidth < 1280) {
      setMaxCardsToRender(maxCardsToRender + 2);
    } else {
      setMaxCardsToRender(maxCardsToRender + 3);
    }
  }
  
  useEffect(() => {
    if (browserWidth < 480) {
      setDefaultMoviesVisible(5);
    } else if (browserWidth < 1280) {
      setDefaultMoviesVisible(8);
    } else {
      setDefaultMoviesVisible(12);
    }
    if (location.pathname === "/saved-movies") {
      setMaxCardsToRender(120);
    }
  }, [browserWidth, moviesList, location]);

  useEffect(() => {
    setMoviesVisible();
  }, [maxCardsToRender]);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setTimeout(setBrowserWidth(window.innerWidth), 1000);
    });
  }, []);

  return (
    <section className="movies-list__wrapper">
      <ul className="movies-list">
        {moviesToRender.map((movie) => (
          <MoviesCard
            key={movie.id || movie._id}
            movie={movie}
            savedMoviesList={savedMoviesList}
            handleSaveCurrentMovie={onSaveMovie}
            handleDeleteCurrentMovie={onDeleteMovie}
          />
        ))}
      </ul>
      {
        location.pathname === "/movies" ? (
          moviesList !== null && (moviesToRender.length !== moviesList.length) && moviesToRender.length !== 0 ? (
            <button
            className="movies-list__button"
            type="button"
            onClick={handleMoreButtonClick}
            >
              Ещё
            </button>
          ) : (
            <div className="movies-list__button-replacement"></div>
          )
        ) : (
          <div className="movies-list__button-replacement"></div>
        )
      }
    </section>
  );
}

export default MoviesCardList;