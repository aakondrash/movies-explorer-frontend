import { Link } from "react-router-dom";

const NavTab = () => {
  return (
    <div className="navtab">
      <div className="navtab__buttons">
        <Link to="/signup" className="navtab__register-button">
          Регистрация
        </Link>
        <Link to="/signin" className="navtab__login-button">
          Войти
        </Link>
      </div>
    </div>
  );
}

export default NavTab;