class MoviesApi {
  constructor({ url }) {
    this._url = url;
  }

  _processResponse(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Произошла ошибка. Код ошибки: ${res.status}`);
    }
  }

  async getAllMovies() {
    const res = await fetch(`${this._url}/beatfilm-movies`, {
      method: "GET",
      headers: {
        "content-type": "application/json"
      }
    });
    return this._processResponse(res);
  }
}

const moviesApi = new MoviesApi({
  url: "https://api.nomoreparties.co"
});

export default moviesApi;