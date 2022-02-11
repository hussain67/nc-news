import React from "react";
import { Link } from "react-router-dom";
import "../styles/Articles.css";

const Articles = ({ articles }) => {
  console.log(articles);
  return (
    <div>
      {articles.map(article => {
        return (
          <ul className="articles__ul">
            <li className="articles__author">Author: {article.author}</li>
            <li className="articles__title">{article.title}</li>
            <Link key={article.article_id} to={`/articles/${article.article_id}`}>
              {" "}
              <button className="article__btn">Read more</button>{" "}
            </Link>
          </ul>
        );
      })}
    </div>
  );
};

export default Articles;
