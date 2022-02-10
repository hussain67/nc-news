import React, { useState } from "react";
import { postComment } from "../utils/api";

const CreateComment = ({ isCreateComment, setIsCreateComment, article_id, username }) => {
  const [body, setBody] = useState();

  const handleSubmit = event => {
    event.preventDefault();
    if (body) {
      postComment(article_id, username, body).then(res => {
        if (res.status === 201) {
          setIsCreateComment(false);
        }
      });
    }
  };

  if (isCreateComment) {
    return (
      <form onSubmit={handleSubmit}>
        <textarea
          onChange={e => {
            setBody(e.target.value);
          }}
          name="body"
          autoFocus
          rows="4"
          cols="50"
        />{" "}
        <br></br>
        <button>Post Your Comment</button>
      </form>
    );
  } else {
    return null;
  }
};

export default CreateComment;
