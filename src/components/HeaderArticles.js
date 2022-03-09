import React from "react";
import HeaderArticle from "./HeaderArticle";
import "../styles/Header.css";
import Nav from "./Nav";

const HeaderArticles = ({ setTopic, setQuery }) => {
  return (
    <div className="header--articles">
      <HeaderArticle />

      <Nav setTopic={setTopic} setQuery={setQuery} />
    </div>
  );
};
export default HeaderArticles;
