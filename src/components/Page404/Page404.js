const Page404 = ({ navigate }) => {

  return (
    <main className="page404">
      <h1 className="page404__code">404</h1>
      <p className="page404__text">Страница не найдена</p>
      <button className="page404__back" onClick={() => navigate(-1)} type="button">
        Назад
      </button>
    </main>
  );
}

export default Page404;