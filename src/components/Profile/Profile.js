import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";


const Profile = ({ handleUserSignout, handleUpdateUserData, isDataLoading }) => {
  const currentUser = useContext(CurrentUserContext);
  const [isFormDisabled, setIsFormDisabled] = useState(false);
  const [formValues, setFormValues] = useState({
    name: {
      text: "",
      isTextValid: true,
      error: ""
    },
    email: {
      text: "",
      isTextValid: true,
      error: ""
    }
  });

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

  const handleEditFormSubmit = (e) => {
    e.preventDefault();
    handleUpdateUserData({
      name: formValues.name.text,
      email: formValues.email.text
    });
  }

  useEffect(() => {
    if (currentUser.name === formValues.name.text && currentUser.email === formValues.email.text) {
      setIsFormDisabled(true);
    } else if (formValues.name.isTextValid && formValues.email.isTextValid) {
      setIsFormDisabled(false);
    } else if (!(formValues.name.isTextValid && formValues.email.isTextValid)) {
      setIsFormDisabled(true);
    }
  }, [currentUser, formValues]);

  useEffect(() => {
    setFormValues({
      name: {
        text: currentUser.name,
        isTextValid: true,
        error: ""
      },
      email: {
        text: currentUser.email,
        isTextValid: true,
        error: ""
      }
    });
  }, [currentUser]);

  useEffect(() => {
    isDataLoading ? setIsFormDisabled(true) : setIsFormDisabled(false);
  }, [isDataLoading]);

  return (
    <>
      <main className="profile">
        <h1 className="profile__title">{`Привет, ${currentUser.name}!`}</h1>
        <div className="profile__container">
          <form
            name="edit-profile"
            className="profile__form"
            onSubmit={handleEditFormSubmit}
            noValidate
          >
            <label className={`profile__info-container ${formValues.name.isTextValid ? "" : "profile__info-container__error"}`}>
              <span>Имя</span>
              <input
                minLength="2"
                maxLength="30"
                type="text"
                name="name"
                required
                className="profile__input"
                placeholder="Ваше имя"
                value={formValues.name.text || ""}
                onChange={handleInputChange}
              />
            </label>
            <span className="profile__error-span">
              {formValues.name.error}
            </span>
            <label className={`profile__info-container ${formValues.email.isTextValid ? "" : "profile__info-container__error"}`}>
              <span>E-mail</span>
              <input
                type="email"
                name="email"
                pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
                required
                className="profile__input"
                placeholder="Ваша почта"
                value={formValues.email.text || ""}
                onChange={handleInputChange}
              />
            </label>
            <span className="profile__error-span">
              {formValues.email.error}
            </span>
            <button
              className={`profile__edit-button ${
                isFormDisabled ? "profile__edit-button_disabled" : ""
              }`}
              type="submit"
              disabled={isFormDisabled}
            >
              Редактировать
            </button>
          </form>
          <Link to="/" className="profile__signout" onClick={handleUserSignout}>
            Выйти из аккаунта
          </Link>
        </div>
      </main>
    </>
  );
}

export default Profile;