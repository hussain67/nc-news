import React from "react";
import { Link } from "react-router-dom";
import "../styles/Articles.css";

const Articles = ({ articles }) => {
  //console.log(articles);
  return (
    <div>
      {articles.map(article => {
        return (
          <ul key={article.article_id} className="articles__ul">
            <li key={article.author} className="articles__author">
              Author: {article.author}
            </li>
            <li key={article.title} className="articles__title">
              {article.title}
            </li>

            <Link to={`/articles/${article.article_id}`}>
              {" "}
              <button className="btn btn--read">... Read more</button>{" "}
            </Link>
          </ul>
        );
      })}
    </div>
  );
};

export default Articles;
