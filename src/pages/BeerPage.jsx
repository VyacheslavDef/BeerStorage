import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import PostService from "../API/PostService";
import Loader from "../components/loader/Loader";

const BeerPage = (props) => {
  const { id } = useParams();
  const [beer, setBeer] = useState(null);

  async function fetchBeerId(id) {
    const beer = await PostService.getById(id);
    return setBeer(beer);
  }

  useEffect(() => {
    fetchBeerId(id);
  }, [id]);


  return beer ? (
    <div className="box">
      <Link to={"/"}>
        <button className="mb">Назад</button>
      </Link>
      <div className="beer_container">
        <div className="beer_page_top">
          <img className="img_beer_page" src={beer.image_url} alt="" />
        </div>
        <div className="header_bc beer_page_mid">
          <h1>{beer.name}</h1>
          <h3>{beer.tagline}</h3>
        </div>
        <div className="beer_page_bot">
          <p><b>Описание: </b>{beer.description}</p>
          <p>
            <b>ABV: </b>
            {beer.abv}
          </p>
          <p>
            <b>Cочетаемость с едой: </b>
          </p>
          <p
            dangerouslySetInnerHTML={{
              __html: beer.food_pairing.join(".<br/>"),
            }}
          />
        </div>
      </div>
    </div>
  ) : (
    <Loader/>
  );
};

export default BeerPage;


