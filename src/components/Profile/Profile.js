import { Link } from "react-router-dom";

const Profile = () => {

  return (
    <>
      <section className="profile">
        <h2 className="profile__title">{`Привет, ${"Виталий"}!`}</h2>
        <div className="profile__container">
          <form
            name="edit-profile"
            className="profile__form"
            noValidate
          >
            <label
              className={`profile__info-container`}
            >
              <span>Имя</span>
              <input
                minLength="2"
                maxLength="30"
                type="text"
                name="name"
                required
                className="profile__input"
              />
            </label>
            <span className="profile__error-span">
            </span>
            <label
              className={`profile__info-container`}
            >
              <span>E-mail</span>
              <input
                type="email"
                name="email"
                required
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                className="profile__input"
              />
            </label>
            <span className="profile__error-span">
            </span>
            <button
              className={`profile__edit-button`}
              type="submit"
            >
              Редактировать
            </button>
          </form>
          <Link to="/" className="profile__signout">
            Выйти из аккаунта
          </Link>
        </div>
      </section>
    </>
  );
}

export default Profile;