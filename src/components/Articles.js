import React from "react";
import { Link } from "react-router-dom";
import { FaRegCommentAlt } from "react-icons/fa";
import "../styles/Articles.css";

const Articles = ({ articles }) => {
  console.log(articles);
  return (
    <div className="articles">
      {articles.map(article => {
        const { author, article_id, title, body, created_at, votes, comment_count } = article;
        const date = new Date(created_at);
        const dateFormatted = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;

        return (
          <ul key={article_id} className="articles__ul">
            <li key={title} className="articles__title">
              {title}
            </li>
            <li key={body.substring(0, 12)} className="articles__body">
              {body.substring(0, 125)}
              <Link to={`/articles/${article_id}`}>
                <button className="btn btn--read">... Read more</button>{" "}
              </Link>
            </li>
            <li key={author} className="articles__author">
              By {author} <span className="articles__date">{dateFormatted}</span>
            </li>

            <li key={created_at}>
              Votes: {votes} {"  "}
              <FaRegCommentAlt /> {comment_count}
            </li>
          </ul>
        );
      })}
    </div>
  );
};

export default Articles;
