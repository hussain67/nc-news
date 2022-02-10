import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h1> We cannot find the requested page</h1>
      <h5>
        {" "}
        Please visit <Link to="/"> home page</Link> to have a fresh start
      </h5>
    </div>
  );
};

export default NotFound;
