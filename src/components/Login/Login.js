import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

const Login = ({ onLoginClick }) => {
  const [isFormDisabled, setIsFormDisabled] = useState(false);
  const [formValues, setFormValues] = useState({
    email: {
      text: "",
      isTextValid: false,
      error: ""
    },
    password: {
      text: "",
      isTextValid: false,
      error: ""
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onLoginClick({
      email: formValues.email.text,
      password: formValues.password.text
    });
  }

  const handleInputChange = (e) => {
    setFormValues((previousState) => ({
      ...previousState,
      [e.target.name]: {
        ...formValues[e.target.name],
        text: e.target.value,
        isTextValid: e.target.validity.valid,
        error: e.target.validationMessage
      }
    }));
  }

  useEffect(() => {
    (formValues.email.isTextValid && formValues.password.isTextValid) ? setIsFormDisabled(false) : setIsFormDisabled(true);
  }, [formValues]);

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
            className={`register__input ${formValues.email.error && "register__input-error"}`}
            value={formValues.email.text || ""}
            onChange={handleInputChange}
            name="email"
            type="email"
            required
            placeholder="Введите email"
          />
        </label>
        <span className="register__error-span">
          {formValues.email.error}
        </span>
        <label className="register__field">
          <span className="register__caption">Пароль</span>
          <input
            className={`register__input ${formValues.password.error && "register__input-error"}`}
            value={formValues.password.text || ""}
            onChange={handleInputChange}
            name="password"
            type="password"
            required
            placeholder="Введите пароль"
            minLength="2"
            maxLength="30"
          />
        </label>
        <span className="register__error-span">
          {formValues.password.error}
        </span>
        <button
          className={`register__submition-button login__submition-button ${
            (formValues.email.isTextValid && formValues.password.isTextValid) ? "" : "register__submition-button-disabled"
          }`}
          type="submit"
          disabled={isFormDisabled}>
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