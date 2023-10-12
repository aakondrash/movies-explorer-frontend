import { Link, useNavigate } from "react-router-dom";

const Login = ({ onLoginClick }) => {

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    onLoginClick(true);
    navigate('/');
  }

  return (
    <main className="register">
      <Link to="/">
        <p className="register__icon"></p>
      </Link>
      <h3 className="register__title">Рады видеть!</h3>
      <form name="register" className="register__form" onSubmit={handleSubmit}>
        <label className="register__field">
          <span className="register__caption">E-mail</span>
          <input
            className={`register__input`}
            name="email"
            type="email"
            required
            placeholder="Введите email"
          />
        </label>
        <span className="register__error-span">

        </span>
        <label className="register__field">
          <span className="register__caption">Пароль</span>
          <input
            className={`register__input`}
            name="password"
            type="password"
            required
            placeholder="Введите пароль"
            minLength="2"
            maxLength="30"
          />
        </label>
        <span className="register__error-span">

        </span>
        <button
          className={`register__submition-button login__submition-button`}
          type="submit">
          Войти
        </button>
      </form>
      <div className="register__signin">
        <p>Ещё не зарегистрированы?</p>
        <Link to="/signup" className="register__login-link">
          Регистрация
        </Link>
      </div>
    </main>
  );
}

export default Login;