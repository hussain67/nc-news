import React, { useEffect, useState } from "react";
import { getTopics } from "../utils/api";

const Nav = props => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getTopics().then(res => {
      let arr = res.topics.map(topic => {
        return topic.slug;
      });
      setTopics(() => arr);
    });
  }, []);

  function handleClickTopic(input) {
    props.setTopic(input);
  }
  return (
    <div>
      <div>
        <h3>Topics</h3>
        {topics.map(topic => {
          return (
            <li key={topic} onClick={() => handleClickTopic(topic)}>
              {topic}
            </li>
          );
        })}
      </div>

      <div>
        <h3>Sort Articles</h3>
        <li></li>
      </div>
    </div>
  );
};

export default Nav;
