import React from "react";
import { Link } from "react-router-dom";

const Articles = props => {
  return (
    <div>
      {props.articles.map(article => {
        return (
          <Link key={article.article_id} to={`/articles/${article.article_id}`}>
            <li>{article.title}</li>
          </Link>
        );
      })}
    </div>
  );
};

export default Articles;
