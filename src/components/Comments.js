import React from "react";

const Comments = ({ comments }) => {
  return (
    <div>
      {comments.map(comment => {
        return (
          <li key={comment.comment_id}>
            {" "}
            <h3>
              Comment by: {comment.author} <button>Delete comment</button>
            </h3>
            <p>{comment.body}</p>
          </li>
        );
      })}
    </div>
  );
};

export default Comments;
