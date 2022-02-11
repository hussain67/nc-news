import React, { useContext } from "react";
import { UserContext } from "../contexts/User";
import "../styles/Header.css";

const Header = () => {
  const { loggedInUser } = useContext(UserContext);
  //console.log(loggedInUser);
  return (
    <div className="header">
      <h1>Nc News</h1>
      <div className="header__user">
        <span> Welcome:</span> <img className="header__img" src={loggedInUser.avatar_url} />
      </div>
    </div>
  );
};

export default Header;
