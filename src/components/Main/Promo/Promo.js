const Promo = () => {
    return (
      <section className="promo">
        <div className="promo__container">
          <h1 className="promo__title">
            Учебный проект студента факультета Веб-разработки.
          </h1>
          <div className="promo__anchors"> 
            <a className="promo__anchor" href="#about-project">
              О проекте
            </a>
            <a className="promo__anchor" href="#techs">
              Технологии
            </a>
            <a className="promo__anchor" href="#about-me">
              Студент
            </a>
          </div>
        </div>
      </section>
    );
  }
  
  export default Promo;