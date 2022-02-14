import React, { useContext, useEffect } from "react";
import { deleteComment, getCommentsByArticleId } from "../utils/api";
import "../styles/Comment.css";
import { UserContext } from "../contexts/User";
import { FaTrash } from "react-icons/fa";
const Comments = ({ comments, setComments }) => {
  const { loggedInUser } = useContext(UserContext);
  const handleDelete = (comment_id, article_id) => {
    deleteComment(comment_id).then(res => {
      if (res.status === 204) {
        getCommentsByArticleId(article_id).then(res => {
          setComments(res.comments);
        });
      }
    });
  };
  return (
    <div>
      {comments.map(comment => {
        return (
          <li key={comment.comment_id}>
            <h3>
              Comment by: {comment.author}
              {loggedInUser.username == comment.author ? (
                <button
                  className="btn btn--delete"
                  onClick={() => {
                    handleDelete(comment.comment_id, comment.article_id);
                  }}
                >
                  <FaTrash />
                </button>
              ) : (
                ""
              )}
            </h3>
            <p>{comment.body}</p>
          </li>
        );
      })}
    </div>
  );
};

export default Comments;
