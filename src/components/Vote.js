import React, { useState } from "react";

import { FaRegThumbsUp, FaRegThumbsDown } from "react-icons/fa";

const Vote = ({ votes, setUpdateVotes }) => {
  const [voteCount, setVoteCount] = useState(votes);
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);

  //console.log(votes);

  const handleLikeClick = () => {
    setVoteCount(voteCount + 1);
    setUpdateVotes(1);
    setIsLiked(true);
  };
  const handleDislikeClick = () => {
    setVoteCount(voteCount => voteCount - 1);
    setUpdateVotes(-1);
    setIsDisliked(true);
  };
  return (
    <div>
      <button className={isLiked ? "btn btn--disabled" : "btn"} disabled={isLiked} onClick={() => handleLikeClick(1)}>
        <FaRegThumbsUp />
      </button>
      <span>{voteCount} </span>
      <button className={isDisliked ? "btn btn--disabled" : "btn"} disabled={isDisliked} onClick={() => handleDislikeClick(-1)}>
        <FaRegThumbsDown />
      </button>
    </div>
  );
};

export default Vote;
