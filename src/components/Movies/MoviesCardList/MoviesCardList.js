import MoviesCard from "../MoviesCard/MoviesCard";

const MoviesCardList = ({ moviesList }) => {

  return (
    <section className="movies-list__wrapper">
      <ul className="movies-list">
        {moviesList.map((movie) => (
          <MoviesCard
            key={movie.id}
            movie={movie}
          />
        ))}
      </ul>
      <button
        className="movies-list__button"
        type="button"
      >
        Ещё
      </button>
      {/* <div className="movies-list__button-replacement"></div> */}
    </section>
  );
}

export default MoviesCardList;