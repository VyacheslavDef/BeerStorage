import React from "react";
import { Link } from "react-router-dom";

const BeerCard = (props) => {
  const shortDesc = (() => {
    if (props.beerPost.description.length > 200) {
      return props.beerPost.description.slice(0, 200) + "...";
    }
    return props.beerPost.description;
  })();

  return (

      <div className="card mb-5">
        <div className="row">
          <div className="col-md-4 card-left-side">
            <img
              src={props.beerPost.image_url}
              className="img-card"
              alt=""
            ></img>
          </div>
          <div className="col-md-8 card-right-side">
            <div className="card-body">
              <h2 className="card-title">{props.beerPost.name}</h2>
              <p className="card-text">{shortDesc}</p>
              <div className="card-button">
                <button type="button" className="btn btn-outline-dark btn-lg">
                  <Link className="a" to={"/test-on-react/beers/" + props.beerPost.id}>
                    Подробнее
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

  );
};

export default BeerCard;
