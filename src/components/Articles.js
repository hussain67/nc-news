import React from "react";
import { Link } from "react-router-dom";
import { FaRegCommentAlt } from "react-icons/fa";
import { BiDownvote, BiUpvote } from "react-icons/bi";
import "../styles/Articles.css";
import ArticleAuthor from "./ArticleAuthor";

const Articles = ({ articles }) => {
  return (
    <div className="articles">
      {articles.map(article => {
        const { author, article_id, title, body, created_at, votes, comment_count } = article;

        return (
          <li key={article_id} className="articles__li">
            <h3 key={title} className="articles__title">
              {title}
            </h3>
            <p className="articles__body">
              {body.substring(0, 125)}
              <Link to={`/articles/${article_id}`}>
                <button className="btn btn--read">... Read more</button>{" "}
              </Link>
            </p>
            <ArticleAuthor author={author} created_at={created_at} />

            <Link to={`/articles/${article_id}`}>
              <span className="articles__votes">
                <BiUpvote /> {votes} <BiDownvote />
              </span>
              <span className="articles__comments">
                {" "}
                <FaRegCommentAlt /> {comment_count} Comments{" "}
              </span>
            </Link>
          </li>
        );
      })}
    </div>
  );
};

export default Articles;
