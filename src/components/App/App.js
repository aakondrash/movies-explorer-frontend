import "./App.css";

import mainApi from "../../utils/MainApi";
import moviesApi from "../../utils/MoviesApi";

import { Route, Routes, useNavigate, Navigate, useLocation } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext.js";
import React, { useState, useEffect } from "react";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Page404 from "../Page404/Page404";

import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";

import Popup from "../Popup/Popup";

const App = () => {
  const navigate = useNavigate();

  // Статусы пользователя
  const [currentUser, setCurrentUser] = useState({
    email: "",
    name: "",
    _id: "",
  });

  // Статусы Бургер-меню
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isBurgerOpened, setIsBurgerOpened] = useState(false);

  // Статусы фильмов
  const [moviesList, setMoviesList] = useState([]);
  const [foundMoviesList, setFoundMoviesList] = useState([]);
  const [savedMoviesList, setSavedMoviesList] = useState([]);
  const [savedMoviesListInit, setSavedMoviesListInit] = useState([]);

  // Статус чекбокса
  const [checkboxState, setCheckboxState] = useState(true);

  // Статусы отображения прелоадера
  const [preloaderDisplayState, setPreloaderDisplayState] = useState(false);

  // Статусы отображения попапа
  const [isPopupOpened, setIsPopupOpened] = useState(false);
  const [isSucceeded, setIsSucceeded] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  // Статус загрузки данных
  const [isDataLoading, setDataIsLoading] = useState(false);

  const onBurgerClick = () => {
    setIsBurgerOpened(!isBurgerOpened);
  }

  const closePopup = () => {
    setIsPopupOpened(false);
  }

  const processSearchMovieRequest = (request, isCheckboxOn) => {
    if (moviesList && moviesList.length !== 0) {
      let searchedMovies = moviesList.filter((element) =>
        element.nameRU.toLowerCase().includes(request.toLowerCase()) || 
        element.nameEN.toLowerCase().includes(request.toLowerCase())
      );
      if (isCheckboxOn) {
        searchedMovies = searchedMovies.filter((element) => element.duration <= 40);
      }
      if (searchedMovies.length === 0) {
        setIsSucceeded(false);
        setFoundMoviesList(searchedMovies);
        setPopupMessage(`По ключевому слову "${request}" фильмов не найдено`);
        setIsPopupOpened(true);
        localStorage.setItem("requestText", request);
      } else {
        setCheckboxState(false);
        localStorage.setItem("requestText", request);
        localStorage.setItem("searchedMovies", JSON.stringify(searchedMovies));
        setFoundMoviesList(searchedMovies);
      }
      return;
    } else {
      setPreloaderDisplayState(true);
      moviesApi
      .getAllMovies()
      .then((result) => {
        const searchedMovies = result.filter((element) =>
          element.nameRU.toLowerCase().includes(request.toLowerCase()) ||
          element.nameEN.toLowerCase().includes(request.toLowerCase())
        );
        if (isCheckboxOn) {
          searchedMovies = searchedMovies.filter((element) => element.duration <= 40);
        }
        if (searchedMovies.length === 0) {
          setIsSucceeded(false);
          setFoundMoviesList(searchedMovies);
          setPopupMessage(`По ключевому слову "${request}" фильмов не найдено`);
          setIsPopupOpened(true);
          localStorage.setItem("requestText", request);
        } else {
          setCheckboxState(false);
          localStorage.setItem("moviesList", JSON.stringify(result));
          setMoviesList(result);
          localStorage.setItem("requestText", request);
          localStorage.setItem("searchedMovies", JSON.stringify(searchedMovies));
          localStorage.setItem("checkboxState", JSON.stringify(isCheckboxOn));
          setFoundMoviesList(searchedMovies);
        }
    })
    .catch((err) => console.log(err))
    .finally(() => setPreloaderDisplayState(false));
    }
  };

  const processSearchSavedMovieRequest = (request, isCheckboxOn) => {
    setPreloaderDisplayState(true);
    let searchedSavedMovies = savedMoviesListInit.filter((element) =>
      element.nameRU.toLowerCase().includes(request.toLowerCase()) ||
      element.nameEN.toLowerCase().includes(request.toLowerCase())
    );
    if (isCheckboxOn) {
      searchedSavedMovies = searchedSavedMovies.filter((element) => element.duration <= 40);
    }
    if (searchedSavedMovies.length === 0) {
      setIsPopupOpened(true);
      setPopupMessage("По вашему запросу ничего не найдено.");
      setIsSucceeded(false);
      setPreloaderDisplayState(false);
      localStorage.setItem("requestTextSaved", request);
      setSavedMoviesList(searchedSavedMovies);
      localStorage.setItem("checkboxStateMoviesSaved", JSON.stringify(isCheckboxOn));
    } else {
      setCheckboxState(false);
      localStorage.setItem("requestTextSaved", request);
      localStorage.setItem("searchedMoviesSaved", searchedSavedMovies);
      localStorage.setItem("checkboxStateMoviesSaved", JSON.stringify(isCheckboxOn));
      setSavedMoviesList(searchedSavedMovies);
      setPreloaderDisplayState(false);
    }
  }

  const onChangeCheckboxState = (isCheckboxOn) => {
    const movies = JSON.parse(localStorage.getItem("searchedMovies"));
    let filteredMoviesList = movies;
    if (isCheckboxOn && movies) {
      filteredMoviesList = movies.filter((element) => element.duration <= 40);
      setFoundMoviesList(filteredMoviesList);
      localStorage.setItem("checkboxState", JSON.stringify(isCheckboxOn));
      if (typeof filteredMoviesList === 'undefined' || filteredMoviesList.length === 0) {
        setIsPopupOpened(true);
        setPopupMessage("По вашему запросу ничего не найдено.");
        setIsSucceeded(false);
      } else {
        setIsSucceeded(true);
      }
    } else {
      localStorage.setItem("checkboxState", JSON.stringify(isCheckboxOn));
      setFoundMoviesList(movies);
    }
  };

  const onChangeCheckboxStateSavedMovies = (isCheckboxOn) => {
    if (isCheckboxOn) {
      const filteredMoviesList = savedMoviesList.filter((element) => element.duration <= 40);
      setSavedMoviesList(filteredMoviesList);
      if (typeof filteredMoviesList === 'undefined' || filteredMoviesList.length === 0) {
        setIsPopupOpened(true);
        setPopupMessage("По вашему запросу ничего не найдено.");
        setIsSucceeded(false);
      } else {
        setIsSucceeded(true);
      }
    } else if (!isCheckboxOn) {
      const requestSaved = localStorage.getItem("requestTextSaved");
      const searchedSavedMovies = savedMoviesListInit.filter((element) =>
        element.nameRU.toLowerCase().includes(requestSaved.toLowerCase()) ||
        element.nameEN.toLowerCase().includes(requestSaved.toLowerCase())
      );
      setSavedMoviesList(searchedSavedMovies);
    }
    localStorage.setItem("checkboxStateSavedMovies", JSON.stringify(isCheckboxOn));
  }

  const handleUserSignout = () => {
    localStorage.clear();
    setMoviesList([]);
    setFoundMoviesList([]);
    setSavedMoviesList([]);
    setCurrentUser({ 
      name: "", 
      email: "", 
      id: "" 
    });
    setIsLoggedIn(false);
    navigate("/");
  }

  const checkTokenExistance = () => {
    if (localStorage.getItem("jwt")) {
      mainApi.getUserData().then((response) => {
        if (response) {
          setCurrentUser(response.data);
          setIsLoggedIn(true);
        }
      }).catch((err) => {
        if (err.status === 401) {
          handleUserSignout();
        } else {
          handleUserSignout();
          setIsPopupOpened(true);
          setIsSucceeded(false);
          setPopupMessage(`Произошла ошибка! Текст: ${err.statusText}`);
        }
      });
    }
  }

  const handleUserRegistration = ({ name, email, password }) => {
    setDataIsLoading(true);
    mainApi.createUser({ name, email, password }).then(() => {
      handleUserLogin({ email, password });
      navigate("/movies");
    }).catch((err) => {
      console.log(err);
      if (err.status === 409) {
        setIsSucceeded(false);
        setPopupMessage("В базе уже имеется пользователь с таким же email.");
        setIsPopupOpened(true);
      }
      if (err.status === 500) {
        setIsSucceeded(false);
        setPopupMessage("Произошла непредвиденная ошибка. Попробуйте еще раз позже.");
        setIsPopupOpened(true);
      }
    }).finally(() => setDataIsLoading(false));
  }

  const handleUserLogin = ({ email, password }) => {
    setDataIsLoading(true);
    mainApi.authorizeUser({ email, password }).then((data) => {
      if (data.token) {
        localStorage.setItem("jwt", data.token);
        setIsLoggedIn(true);
        checkTokenExistance();
        navigate("/movies");
      } else {
        return console.log("Что-то пошло не так...");
      }
    }).catch((err) => {
      console.log(err);
      if (err.status === 401) {
        setIsSucceeded(false);
        setPopupMessage("Был введен неверный логин или пароль.");
        setIsPopupOpened(true);
      }
      if (err.status === 500) {
        setIsSucceeded(false);
        setPopupMessage("Произошла непредвиденная ошибка. Попробуйте еще раз позже.");
        setIsPopupOpened(true);
      }
    }).finally(() => setDataIsLoading(false));
  }

  const handleUpdateUserInfo = ({ name, email }) => {
    setDataIsLoading(true);
    mainApi.setUserData({ name, email }).then((newUserData) => {
      setCurrentUser(newUserData.data);
      setIsPopupOpened(true);
      setIsSucceeded(true);
      setPopupMessage("Данные о пользователе были обновлены.");
    })
    .catch((err) => {
      setIsPopupOpened(true);
      setIsSucceeded(false);
      setPopupMessage(`Произошла ошибка: ${err.status} - ${err.statusText}`);
    })
    .finally(() => setDataIsLoading(false));
  }

  const getSavedMoviesList = () => {
    mainApi.getSavedMovies().then((movies) => {
      if (movies.data) {
        const userSavedMovies = movies.data.filter((mov) => mov.owner === currentUser._id);
        setSavedMoviesList(userSavedMovies);
        setSavedMoviesListInit(userSavedMovies);
      } else {
        setSavedMoviesList([]);
        setSavedMoviesListInit([]);
      }
    })
    .catch((err) => console.log(err));
  }

  const handleDeleteSavedMovie = (movie) => {
    mainApi.deleteExistentMovie(movie._id).then(() => {
      const updateUserSavedMovies = savedMoviesList.filter((mov) => mov._id !== movie._id);
      setSavedMoviesList(updateUserSavedMovies);
      setSavedMoviesListInit(savedMoviesListInit.filter((mov) => mov._id !== movie._id));
    })
    .catch((err) => console.log(err));
  }

  const handleSaveMovie = (movie) => {
    mainApi.addNewMovie(movie).then((res) => {
      setSavedMoviesList(savedMoviesList.concat(res.data));
      setSavedMoviesListInit(savedMoviesListInit.concat(res.data));
    })
    .catch((err) => console.log(err));
  }

  useEffect(() => { 
    Promise.all([moviesApi.getAllMovies()])
      .then(([movies]) => {
        setMoviesList(movies);
      })
      .catch((err) => console.log(err));
  }, []); 

  useEffect(() => {
    checkTokenExistance();
  }, []);

  useEffect(() => {
    if (isLoggedIn && currentUser) {
      getSavedMoviesList();
    }
  }, [isLoggedIn, currentUser]);

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
          <Route path="signin" element={
            isLoggedIn ? (
              <Navigate to="/" />
            ) : (
              <Login onLoginClick={handleUserLogin} isDataLoading={isDataLoading}/>
            )
          } />
          <Route path="signup" element={
            isLoggedIn ? (
              <Navigate to="/" />
            ) : (
              <Register onRegisterClick={handleUserRegistration} isDataLoading={isDataLoading}/>
            )
          } />
          <Route path="profile" element={
            isLoggedIn ? (
              <>
                <Header isLoggedIn={isLoggedIn} isBurgerOpened={isBurgerOpened} onBurgerClick={onBurgerClick}/>
                <Profile handleUserSignout={handleUserSignout} handleUpdateUserData={handleUpdateUserInfo} isDataLoading={isDataLoading}/>
              </>
            ) : () => navigate(-1)
          } />
          <Route path="movies" element={
            isLoggedIn ? (
              <>
                <Header isLoggedIn={isLoggedIn} isBurgerOpened={isBurgerOpened} onBurgerClick={onBurgerClick}/>
                <Movies
                  moviesList={moviesList}
                  onProcessSearchRequest={processSearchMovieRequest}
                  foundMoviesList={foundMoviesList}
                  savedMoviesList={savedMoviesList}
                  preloaderState={preloaderDisplayState}
                  onChangeCheckboxState={onChangeCheckboxState}
                  handleDeleteSavedMovie={handleDeleteSavedMovie}
                  handleSaveMovie={handleSaveMovie}
                />
                <Footer />
              </>
            ) : () => navigate(-1)
          } />
          <Route path="saved-movies" element={
            isLoggedIn ? (
              <>
                <Header isLoggedIn={isLoggedIn} isBurgerOpened={isBurgerOpened} onBurgerClick={onBurgerClick}/>
                <SavedMovies 
                  moviesList={moviesList}
                  onProcessSearchRequest={processSearchSavedMovieRequest}
                  foundMoviesList={foundMoviesList}
                  savedMoviesList={savedMoviesList}
                  preloaderState={preloaderDisplayState}
                  onChangeCheckboxState={onChangeCheckboxStateSavedMovies}
                  handleDeleteSavedMovie={handleDeleteSavedMovie}
                  handleSaveMovie={handleSaveMovie}
                />
                <Footer />
              </>
            ) : () => navigate(-1)
          } />
          <Route path="*" element={<Page404 navigate={navigate}/>} />
        </Routes>
        <Popup
          isOpened={isPopupOpened}
          onClose={closePopup}
          isSucceeded={isSucceeded}
          message={popupMessage}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;