import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useState } from "react";
import BeerCard from "../components/beerCard/BeerCard";

const FawPage = () => {
  const item = useSelector((state) => state.todos);

  const [testMas, setTestMas] = useState([]);

  useEffect(() => {
    const drinksPromises = item.map((obj) =>
      fetch(`https://api.punkapi.com/v2/beers/${obj.id}`)
        .then((res) => res.json())
        .then((data) => data)
    );
    Promise.all(drinksPromises).then((data) => {
      setTestMas(data);
    });
  }, [item]);

  return (
      <div className="container">
        <h1>Faworits</h1>
        <div className="faw_wrapper">
          {testMas.map((x) => (
            <BeerCard beerPost={x[x.length - 1]} />
          ))}
        </div>
      </div>
  );
};

export default FawPage;
