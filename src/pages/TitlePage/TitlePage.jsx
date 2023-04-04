import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PostService from "../../API/PostService";
import BeerCard from "./../../components/beerCard/BeerCard";
import Loader from "./../../components/loader/Loader";

const TitlePage = () => {
  const [max, setMax] = useState([]);

  async function getRandomBeer() {
    const randomBeer = await PostService.getRandomBeer();
    setMax(randomBeer.data);
  }

  useEffect(() => {
    getRandomBeer();
  }, []);

  return (
    <div className="container title_page">
      <div className="title_page-wrapper">
        <h1 className="text_title">BEERS STORAGE</h1>
        <Link className="a" to={"/test-on-react/page/1:24"}>
          <div className="title_btn">Начать поиск!</div>
        </Link>
      </div>
      <div className="random_beer-wrapper">
        <div className="random_beer">
          {max.length ? (
            max.map((x) => <BeerCard key={x.id} beerPost={x} />)
          ) : (
            <Loader />
          )}
          <button className="random_beer-btn mt-32" onClick={getRandomBeer}>
            Мне повезет!
          </button>
        </div>
      </div>
    </div>
  );
};

export default TitlePage;
