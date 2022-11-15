import React from "react";
import { Link } from "react-router-dom";

const BeerCard = ({ beerPost, change }) => {
  const shortDesc = (() => {
    if (beerPost.description.length > 200) {
      return beerPost.description.slice(0, 200) + "...";
    }
    return beerPost.description;
  })();

  return (
    <div className="card mb-5">
      <div className="row">
        <div className="col-md-4 card-left-side">
          <div className="img_class">
            <img src={beerPost.image_url} className="img-card" alt=""></img>
          </div>
        </div>
        <div className="col-md-8 card-right-side">
          <div className="card-body">
            <div className="card-body-top">
              <h4 className="card-title">{beerPost.name}</h4>
              <i
                className={"bi bi-heart" + (beerPost.favorites ? "-fill" : "")}
                onClick={() => change(beerPost.id)}
              ></i>
            </div>
            <p className="card-text">{shortDesc}</p>
            <div className="card-button">
            <Link to={"/test-on-react/beers/" + beerPost.id}>
              <button type="button" className="btn btn-outline-dark btn-lg">
                  Подробнее
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeerCard;
