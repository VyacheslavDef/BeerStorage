import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostService from "../API/PostService";
import Loader from "../components/loader/Loader";

const BeerPage = () => {
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
    <section className="beer_page">
    <div className="container p-5">
      <div className="row beer_container mb-5">
        <div className="beer_page_top_right">
          <img className="img_beer_page" src={beer.image_url} alt="" />
        </div>
        <div className="beer_page_top_left">
          <div className="left_description">
            <p>
              <b>ABV: </b>
            </p>
            <p>{beer.abv}</p>
            <p>
              <b>IBU: </b>
            </p>
            <p>{beer.ibu}</p>
            <p>
              <b>Впервые сварено: </b>
            </p>
            <p>{beer.first_brewed}</p>
          </div>
        </div>
        </div>
      <div className="row beer_page_text">
        <div className="header_bc beer_page_mid">
          <h1>{beer.name}</h1>
          <h3>{beer.tagline}</h3>
        </div>
        <div className="beer_page_bot">
          <p>
            <b>Описание: </b>
          </p>
          <p>{beer.description}</p>
          <p>
            <b>Cочетаемость с едой: </b>
          </p>
          {beer.food_pairing.map((q) => (
            <div className="p" key={q}>
              {q}.
            </div>
          ))}
        </div>
        </div>
      
    </div>
    </section>
  ) : (
    <Loader />
  );
};

export default BeerPage;
