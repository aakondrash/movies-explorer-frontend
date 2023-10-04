import "./App.css";

import { Route, Routes, useNavigate } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext.js";
import React, { useState } from "react";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Page404 from "../Page404/Page404";

import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";

import movie_image from "../../images/movie-template-picture.png";

const App = () => {
  const navigate = useNavigate();

  // const [currentUser, setCurrentUser] = useState({
  //   email: "",
  //   name: "",
  //   _id: "",
  // });

  const currentUser = {
    email: "",
    name: "",
    _id: "",
  }
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isBurgerOpened, setIsBurgerOpened] = useState(false);

  // const [moviesList, setMoviesList] = useState([]);
  // const [foundMoviesList, setfoundMoviesList] = useState([]);
  // const [savedMoviesList, setSavedMoviesList] = useState([]);

  const moviesList = [
    {
      id: 1,
      image: movie_image,
      nameRU: "Пи Джей Харви: A dog called money",
      duration: 77,
      trailerLink: "https://yandex.ru/video/preview/4973878776349107739"
    },
    {
      id: 2,
      image: movie_image,
      nameRU: "Пи Джей Харви: A dog called money",
      duration: 77,
      trailerLink: "https://yandex.ru/video/preview/4973878776349107739"
    },
    {
      id: 3,
      image: movie_image,
      nameRU: "Пи Джей Харви: A dog called money",
      duration: 77,
      trailerLink: "https://yandex.ru/video/preview/4973878776349107739"
    },
    {
      id: 4,
      image: movie_image,
      nameRU: "Пи Джей Харви: A dog called money",
      duration: 77,
      trailerLink: "https://yandex.ru/video/preview/4973878776349107739"
    },
    {
      id: 5,
      image: movie_image,
      nameRU: "Пи Джей Харви: A dog called money",
      duration: 77,
      trailerLink: "https://yandex.ru/video/preview/4973878776349107739"
    },
    {
      id: 6,
      image: movie_image,
      nameRU: "Пи Джей Харви: A dog called money",
      duration: 77,
      trailerLink: "https://yandex.ru/video/preview/4973878776349107739"
    },
    {
      id: 7,
      image: movie_image,
      nameRU: "Пи Джей Харви: A dog called money",
      duration: 77,
      trailerLink: "https://yandex.ru/video/preview/4973878776349107739"
    },
    {
      id: 8,
      image: movie_image,
      nameRU: "Пи Джей Харви: A dog called money",
      duration: 77,
      trailerLink: "https://yandex.ru/video/preview/4973878776349107739"
    }
  ];

  const savedMoviesList = [
    {
      id: 3,
      image: movie_image,
      nameRU: "Пи Джей Харви: A dog called money",
      duration: 77,
      trailerLink: "https://yandex.ru/video/preview/4973878776349107739"
    }
  ];

  const onBurgerClick = () => {
    setIsBurgerOpened(!isBurgerOpened);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        <Routes>
          <Route index element={
            <>
              <Header isLoggedIn={isLoggedIn} isBurgerOpened={isBurgerOpened} onBurgerClick={onBurgerClick}/>
              <Main />
              <Footer />
            </>
          } />
          <Route path="signin" element={<Login onLoginClick={setIsLoggedIn}/>} />
          <Route path="signup" element={<Register onRegisterClick={setIsLoggedIn}/>} />
          <Route path="profile" element={
            <>
              <Header isLoggedIn={isLoggedIn} isBurgerOpened={isBurgerOpened} onBurgerClick={onBurgerClick}/>
              <Profile/>
            </>
          } />
          <Route path="movies" element={
            <>
              <Header isLoggedIn={isLoggedIn} isBurgerOpened={isBurgerOpened} onBurgerClick={onBurgerClick}/>
              <Movies moviesList={moviesList}/>
              <Footer />
            </>
          } />
          <Route path="saved-movies" element={
            <>
              <Header isLoggedIn={isLoggedIn} isBurgerOpened={isBurgerOpened} onBurgerClick={onBurgerClick}/>
              <SavedMovies savedMoviesList={savedMoviesList}/>
              <Footer />
            </>
          } />
          <Route path="*" element={<Page404 navigate={navigate}/>} />
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;