import React from "react";
import { Link } from "react-router-dom";

const TitlePage = () => {
  return (
  <>
    <Link to={"/test-on-react/page/1/10"}><h1>TitlePage</h1></Link>
  </>
  );
};

export default TitlePage;
