import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/User";
import "../styles/Header.css";

const Header = () => {
  const { loggedInUser } = useContext(UserContext);
  //console.log(loggedInUser);
  return (
    <div className="header">
      <Link className="header__link" to={"/"}>
        <h1>Nc News</h1>
      </Link>

      <div className="header__user">
        <span> Welcome:</span> <img className="header__img" src={loggedInUser.avatar_url} alt={"User img"} />
      </div>
    </div>
  );
};

export default Header;
