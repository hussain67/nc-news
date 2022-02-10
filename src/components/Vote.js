import React, { useState } from "react";
import { increaseVote } from "../utils/api";

const Vote = ({ votes, article_id }) => {
  const [voteCount, setVoteCount] = useState(0);

  const handleClick = () => {
    setVoteCount(voteCount => voteCount + 1);
    increaseVote(article_id).then(res => {
      console.log(res);
    });
  };
  return <button onClick={() => handleClick()}>⭐️ {votes + voteCount} ⭐️</button>;
};

export default Vote;
