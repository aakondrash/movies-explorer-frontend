import { NavLink } from "react-router-dom";
import burgerIcon from "../../images/burger-picture.svg";

const Navigation = ({ onBurgerClick }) => {
  return (
    <>
      <nav className="navigation">
        <div className="navigation__films">
          <NavLink
            exact="true"
            to="/movies"
            className={`navigation__film-link ${({ isActive }) => isActive ? "navigation__film-link_active" : ""}`}
          >
            Фильмы
          </NavLink>
          <NavLink
            exact="true"
            to="/saved-movies"
            className={`navigation__film-link ${({ isActive }) => isActive ? "navigation__film-link_active" : ""}`}
          >
            Сохранённые фильмы
          </NavLink>
        </div>
        <div className="navigation__account">
          <NavLink
            exact="true"
            to="/profile"
            className={`navigation__account-link ${({ isActive }) => isActive ? "navigation__film-link_active" : ""}`}
          >
            Аккаунт
          </NavLink>
        </div>
      </nav>
      <img
        alt="Бургер меню"
        src={burgerIcon}
        className="navigation__burger-button"
        onClick={onBurgerClick}
      />
    </>
  );
}

export default Navigation;