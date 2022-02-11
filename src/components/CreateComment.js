import React, { useContext, useState } from "react";
import { UserContext } from "../contexts/User";
import { postComment } from "../utils/api";

const CreateComment = ({ isCreateComment, setIsCreateComment, article_id }) => {
  const [body, setBody] = useState();
  const [message, setMessage] = useState("");
  const { loggedInUser } = useContext(UserContext);

  const handleSubmit = event => {
    event.preventDefault();
    if (body) {
      postComment(article_id, loggedInUser.username, body).then(res => {
        if (res.status === 201) {
          setIsCreateComment(false);
        }
      });
    } else {
      setMessage("Please enter your comment text");
    }
  };

  if (isCreateComment) {
    return (
      <>
        <p>{message}</p>
        <form onSubmit={handleSubmit}>
          <textarea
            onChange={e => {
              setBody(e.target.value);
            }}
            name="body"
            autoFocus
            rows="5"
            cols="40"
          />{" "}
          <br></br>
          <button>Submit Your Comment</button>
        </form>
      </>
    );
  } else {
    return null;
  }
};

export default CreateComment;
