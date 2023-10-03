import { NavLink } from "react-router-dom";

const Burger = ({ isBurgerOpened, onBurgerClick }) => {
  return (
    <div className={`burger ${isBurgerOpened ? "burger_opened" : "burger_hidden"}`}>
      <button
        className="burger__close-button"
        type="button"
        onClick={onBurgerClick}
      ></button>
      <div className="burger__container">
        <NavLink
          exact="true"
          to="/"
          className={`navigation__film-link burger__link ${({ isActive }) => isActive ? "burger__link_active" : ""}`}
          onClick={onBurgerClick}
        >
          Главная
        </NavLink>
        <NavLink
          exact="true"
          to="/movies"
          className={`navigation__film-link burger__link ${({ isActive }) => isActive ? "burger__link_active" : ""}`}
          onClick={onBurgerClick}
        >
          Фильмы
        </NavLink>
        <NavLink
          exact="true"
          to="/saved-movies"
          className={`navigation__film-link burger__link ${({ isActive }) => isActive ? "burger__link_active" : ""}`}
          onClick={onBurgerClick}
        >
          Сохранённые фильмы
        </NavLink>
        <div className="navigation__account burger__account">
          <NavLink
            exact="true"
            to="/profile"
            onClick={onBurgerClick}
            className={"navigation__film-link"}
          >
            Аккаунт
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Burger;