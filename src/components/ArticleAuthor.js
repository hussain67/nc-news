import React from "react";
import "../styles/ArticleAuthor.css";

const ArticleAuthor = ({ author, created_at }) => {
  const date = new Date(created_at);
  const dateFormatted = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
  return (
    <p className="article__author">
      By {author} <span className="article__date">{dateFormatted}</span>
    </p>
  );
};

export default ArticleAuthor;
