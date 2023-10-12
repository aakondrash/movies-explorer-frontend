const Promo = () => {
    return (
      <section className="promo">
        <div className="promo__container">
          <h1 className="promo__title">
            Учебный проект студента факультета Веб-разработки.
          </h1>
          <nav className="promo__anchors"> 
            <ul className="promo__anchors-list">
              <li className="promo__anchor-element">
                <a className="promo__anchor" href="#about-project">
                  О проекте
                </a>
              </li>
              <li className="promo__anchor-element">
                <a className="promo__anchor" href="#techs">
                  Технологии
                </a>
              </li>
              <li className="promo__anchor-element">
                <a className="promo__anchor" href="#about-me">
                  Студент
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </section>
    );
  }
  
  export default Promo;