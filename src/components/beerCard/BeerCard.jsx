import React from "react";
import { Link } from "react-router-dom";

import Boormark from "../bookmark/Boormark";

const BeerCard = ({ beerPost }) => {

  return (
    <div className="beer_card_wrapper">
      <div className="beer_card">
        <div className="beer_card-top">
          <img className="img_beer_card" src={beerPost.image_url} alt="" />
          <Boormark beerPost={beerPost} />
        </div>
        <div className="beer_card_disc">
          <h4 className="name_item_beer">{beerPost.name}</h4>
          <p className="disc_item_beer">Alc: {beerPost.abv}</p>
          <p className="disc_item_beer">IBU: {beerPost.ibu}</p>
        </div>
        <Link to={"/test-on-react/beers/" + beerPost.id}>
          <button type="button" className="beer_card-btn">
            <span className="beer_card-btn-text">Подробнее</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BeerCard;
