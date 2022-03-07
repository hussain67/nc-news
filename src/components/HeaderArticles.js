import React from "react";
import Header from "./Header";
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
