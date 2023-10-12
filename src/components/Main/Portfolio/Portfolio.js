const Portfolio = () => {
    return (
      <section className="portfolio">
        <ul className="portfolio__list">
          <li className="portfolio__title">Портфолио</li>
          <li className="portfolio-item">
            <a
              href="https://github.com/aakondrash/how-to-learn"
              target="blank"
              className="portfolio-link"
            >
              Статичный сайт
              <p className="portfolio-link-arrow"></p>
            </a>
          </li>
          <li className="portfolio-item">
            <a
              target="blank"
              href="https://github.com/aakondrash/russian-travel"
              className="portfolio-link"
            >
              Адаптивный сайт
              <p className="portfolio-link-arrow"></p>
            </a>
          </li>
          <li className="portfolio-item">
            <a
              href="https://github.com/aakondrash/react-mesto-api-full-gha"
              className="portfolio-link"
              target="blank"
            >
              Одностраничное приложение
              <p className="portfolio-link-arrow"></p>
            </a>
          </li>
        </ul>
      </section>
    );
  }
  
  export default Portfolio;