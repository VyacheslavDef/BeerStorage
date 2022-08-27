import React from "react";
import { Link } from "react-router-dom";

const BeerCard = (props) => {
  const shortDesc = (() => {
    if (props.beerPost.description.length > 140) {
      return props.beerPost.description.slice(0, 140) + "...";
    }
    return props.beerPost.description;
  })();

  return (
    <div className="beer_card_container">
      <div className="beer_card_top">
        <h1>{props.beerPost.name}</h1>
      </div>
      <div className="beer_card_mid">
        <img className="img_beer" src={props.beerPost.image_url} alt="" />
      </div>
      <div className="beer_card_bot">
        <small>{shortDesc}</small>
      </div>
      <Link to={"/test-on-react/beers/" + props.beerPost.id}>
        <button>Подробнее</button>
      </Link>
    </div>
  );
};

export default BeerCard;
