import { useContext } from "react";
import { UserContext } from "../contexts/User";
import { Link } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
  const { loggedInUser } = useContext(UserContext);
  return (
    <div className="header">
      <Link className="header__link" to={"/"}>
        <div>Nc News</div>
      </Link>

      <div className="header__user">
        <span> Welcome:</span> <img className="header__img" src={loggedInUser.avatar_url} alt={"User img"} />
      </div>
    </div>
  );
};
export default Header;
