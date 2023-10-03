import { Link, useNavigate } from "react-router-dom";

const Register = ({ onRegisterClick }) => {

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegisterClick(true);
    navigate('/');
  }

  return (
    <section className="register">
      <Link to="/" className="register__icon"></Link>
      <h3 className="register__title">Добро пожаловать!</h3>
      <form name="register" className="register__form" onSubmit={handleSubmit}>
        <label className="register__field">
          <span className="register__caption">Имя</span>
          <input
            className={`register__input`}
            name="name"
            required
            minLength="2"
            maxLength="30"
            placeholder="Введите имя"
          />
        </label>
        <span className="register__error-span">
        </span>
        <label className="register__field">
          <span className="register__caption">E-mail</span>
          <input
            className={`register__input`}
            name="email"
            type="email"
            required
            placeholder="Введите E-mail"
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
          />
        </label>
        <span className="register__error-span">
        </span>
        <button
          className={`register__submition-button`}
          type="submit"
        >
          Зарегистрироваться
        </button>
      </form>
      <div className="register__signin">
        <p>Уже зарегистрированы?</p>
        <Link to="/signin" className="register__login-link">
          Войти
        </Link>
      </div>
    </section>
  );
}

export default Register;