import React, { useEffect, useState } from "react";
import { getArticles } from "../utils/api";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    getArticles().then(res => {
      console.log(res.articles);
      setArticles(res.articles);
    });
  }, []);
  return (
    <div>
      {articles.map(article => {
        return <li key={article.id}>{article.title}</li>;
      })}
    </div>
  );
};

export default Articles;
