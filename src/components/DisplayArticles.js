import React from "react";

const DisplayArticles = props => {
  return (
    <div>
      {props.articles.map(article => {
        return <li key={article.article_id}>{article.title}</li>;
      })}
    </div>
  );
};

export default DisplayArticles;
