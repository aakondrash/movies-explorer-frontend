import avatar from "../../../images/student-picture.jpg";

const AboutMe = () => {
  return (
    <section className="about-me" id={"about-me"}>
      <h2 className="caption">Студент</h2>
      <div className="about-me__wrapper">
        <img src={avatar} alt="Фотография студента" className="about-me__avatar" />
        <h3 className="about-me__name title">Виталий</h3>
      </div>
      <h4 className="about-me__job">Фронтенд-разработчик, 30 лет</h4>
      <p className="about-me__description description">
      Я родился и живу в Саратове, закончил факультет экономики СГУ. 
      У меня есть жена дочь. Я люблю слушать музыку, а ещё увлекаюсь 
      бегом. Недавно начал кодить. С 2015 года работал в компании 
      «СКБ Контур». После того, как прошёл курс по веб-разработке, 
      начал заниматься фриланс-заказами и ушёл с постоянной работы.
      </p>

      <a
        href="https://github.com/aakondrash"
        target="blank"
        className="about-me__github-link"
      >
        Github
      </a>
    </section>
  );
}

export default AboutMe;