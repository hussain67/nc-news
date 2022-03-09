import React from "react";
import Header from "./HeaderArticle";
import "../styles/Header.css";
import Nav from "./Nav";

const HeaderArticles = ({ setTopic, setQuery }) => {
  return (
    <div className="articles-header">
      <Header />

      <Nav setTopic={setTopic} setQuery={setQuery} />
    </div>
  );
};
export default HeaderArticles;
