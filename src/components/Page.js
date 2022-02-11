import React, { useEffect } from "react";
import "../styles/Page.css";

function Page(props) {
  useEffect(() => {
    document.title = `${props.title} | Nc-News`;
    window.scrollTo(0, 0);
  }, [props.title]);

  return <div className="page">{props.children}</div>;
}

export default Page;
