import React from "react";

const CreateComment = ({ isCreateComment }) => {
  if (isCreateComment) {
    return (
      <form>
        <textarea id="w3review" name="w3review" rows="4" cols="50" /> <br></br>
        <button>Post Your Comment</button>
      </form>
    );
  } else {
    return null;
  }
};

export default CreateComment;
