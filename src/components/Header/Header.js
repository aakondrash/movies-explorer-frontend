import { Link, Route, Routes } from "react-router-dom";
import Burger from "../Burger/Burger";
import NavTab from "../Main/NavTab/NavTab";
import Navigation from "../Navigation/Navigation";

const Header = ({ isLoggedIn, isBurgerOpened, onBurgerClick }) => {
  const burgerLinks = ["/movies", "/saved-movies", "/profile"];
  return (
    <header className="header">
      <div className="header__container">
        <Link to="/">
          <p className="header__logo"></p>
        </Link>
        <Routes>
          {burgerLinks.map(path => (
            <Route 
              key="Burger" // optional: avoid full re-renders on route changes
              path={path}
              element={<Burger isBurgerOpened={isBurgerOpened} onBurgerClick={onBurgerClick} />}
            />
          ))}
          <Route exact path="/" element={
            isLoggedIn ? (
              <>
                <Navigation onBurgerClick={onBurgerClick}/>
                <Burger isBurgerOpened={isBurgerOpened} onBurgerClick={onBurgerClick} />
              </>
            ) : (
              <>
                <NavTab />
                <Burger isBurgerOpened={isBurgerOpened} onBurgerClick={onBurgerClick} />
              </>
            )
          }/>
        </Routes>
      </div>
    </header>
  );
}

export default Header;