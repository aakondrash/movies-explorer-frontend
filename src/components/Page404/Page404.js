const Page404 = ({ navigate }) => {

    const returnToPrevPage = () => {
      navigate(-1);
    }

    return (
      <main className="page404">
        <h1 className="page404__code">404</h1>
        <p className="page404__text">Страница не найдена</p>
        <button className="page404__back" onClick={returnToPrevPage} type="button">
          Назад
        </button>
      </main>
    );
  }
  
  export default Page404;