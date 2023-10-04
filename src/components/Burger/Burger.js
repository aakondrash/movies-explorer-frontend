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
          to="/"
          className={`burger__link ${({ isActive }) => isActive ? "burger__link_active" : ""}`}
          onClick={onBurgerClick}
        >
          Главная
        </NavLink>
        <NavLink
          to="/movies"
          className={`burger__link ${({ isActive }) => isActive ? "burger__link_active" : ""}`}
          onClick={onBurgerClick}
        >
          Фильмы
        </NavLink>
        <NavLink
          to="/saved-movies"
          className={`burger__link ${({ isActive }) => isActive ? "burger__link_active" : ""}`}
          onClick={onBurgerClick}
        >
          Сохранённые фильмы
        </NavLink>
        <div className="burger__account">
          <NavLink
            to="/profile"
            onClick={onBurgerClick}
            className={"burger__film-link"}
          >
            Аккаунт
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Burger;