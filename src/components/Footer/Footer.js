const Footer = () => {
    return (
      <footer className="footer">
        <p className="footer__text">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </p>
        <div className="footer__items">
          <p className="footer__year">&copy; 2023</p>
          <nav className="footer__links">
            <ul className="footer__links-list">
              <li className="footer__links-element">
                <a
                  href="https://practicum.yandex.ru"
                  target="blank"
                  className="footer__link"
                >
                  Яндекс.Практикум
                </a>
              </li>
              <li  className="footer__links-element">
                <a href="https://github.com" target="blank" className="footer__link">
                  Github
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    );
  }
  
  export default Footer;