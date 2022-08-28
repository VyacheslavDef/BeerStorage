import React from "react";
import { Link } from "react-router-dom";

const TitlePage = () => {
  return (
    <div className="container">
      <div className="row">
        <Link className="a" to={"/test-on-react/page/1:10"}>
          <h1>Go to BeersStorage</h1>
        </Link>
      </div>
    </div>
  );
};

export default TitlePage;
