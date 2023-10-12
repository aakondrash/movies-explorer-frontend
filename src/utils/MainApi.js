class MainApi {
  constructor({ url }) {
    this._url = url;
  }

  _processResponse(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(res);
    }
  }

  async getUserData() {
    const res = await fetch(`${this._url}/users/me`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwt")}`
      }
    });
    return this._processResponse(res);
  }

  async setUserData(userData) {
    const res = await fetch(`${this._url}/users/me`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwt")}`
      },
      body: JSON.stringify({
        name: userData.name,
        email: userData.email
      })
    });
    return this._processResponse(res);
  }

  async getSavedMovies() {
    const res = await fetch(`${this._url}/movies`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwt")}`
      }
    });
    return this._processResponse(res);
  }

  async addNewMovie(movie) {
    const res = await fetch(`${this._url}/movies`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwt")}`
      },
      body: JSON.stringify({
        movieId: movie.id,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
        description: movie.description,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        country: movie.country,
        image: `https://api.nomoreparties.co/${movie.image.url}`,
        trailerLink: movie.trailerLink,
        thumbnail: `https://api.nomoreparties.co/${movie.image.formats.thumbnail.url}`
      })
    });
    return this._processResponse(res);
  }

  async deleteExistentMovie(id) {
    const res = await fetch(`${this._url}/movies/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwt")}`
      }
    });
    return this._processResponse(res);
  }

  async createUser({ name, email, password }) {
    const res = await fetch(`${this._url}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,
        email,
        password
      })
    });
    return this._processResponse(res);
  }
  
  async authorizeUser({ name, email, password }) {
    const res = await fetch(`${this._url}/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,
        email,
        password
      })
    });
    return this._processResponse(res);
  }
}

const mainApi = new MainApi({
  url: "https://api.moviesexplorer.aakond.nomoredomainsrocks.ru"
});

export default mainApi;