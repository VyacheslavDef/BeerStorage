import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostService from "../../API/PostService";
import Loader from "../../components/loader/Loader";
import Boormark from "./../../components/bookmark/Boormark";

const BeerPage = () => {
  const { id } = useParams();
  const [beer, setBeer] = useState(null);

  async function fetchBeerId(id) {
    const beere = await PostService.getById(id);
    return setBeer(beere);
  }
  useEffect(() => {
    fetchBeerId(id);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
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
              <p className="left_description-main-text">ABV:</p>
              <p>{beer.abv}</p>
              <p className="left_description-main-text">IBU:</p>
              <p>{beer.ibu}</p>
              <p className="left_description-main-text">Впервые сварено:</p>
              <p>{beer.first_brewed}</p>
            </div>
            <Boormark beerPost={beer} />
          </div>
        </div>
        <div className="row beer_page_text">
          <div className="header_bc beer_page_mid mb-16">
            <h1>{beer.name}</h1>
            <h3>{beer.tagline}</h3>
          </div>
          <div className="beer_page_bot">
            <p className="mb-8 beer_page_bot-text">Описание:</p>
            <p className="mb-8">{beer.description}</p>
            <p className="mb-8 beer_page_bot-text">Cочетаемость с едой:</p>
            {beer.food_pairing.map((q) => (
              <div className="p mb-8" key={q}>
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
