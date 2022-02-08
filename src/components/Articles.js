import React, { useEffect, useState } from "react";
import { getArticles } from "../utils/api";
import DisplayArticles from "./DisplayArticles";
import Nav from "./Nav";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    getArticles().then(res => {
      console.log(res.articles);
      setArticles(res.articles);
    });
  }, []);
  return (
    <>
      <Nav />
      <DisplayArticles articles={articles} />
    </>
  );
};

export default Articles;
