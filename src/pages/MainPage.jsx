import React, { useEffect, useState } from "react";
import PostService from "../API/PostService";
import "../App.css";
import BeerCard from "../components/BeerCard";
import Loader from "../components/loader/Loader";
import Pagination from "../components/Pagination";
import { getPages } from "../utils/utils";

function MainPage() {
  const [beerPost, setBeerPost] = useState([]);

  const [searchBeer, setSearchBeer] = useState("");

  const [totalCount] = useState(325);
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(1);
  const [perPage] = useState(25);



  const filtersBeer = beerPost.filter((beer) => {
    return beer.name.toLowerCase().includes(searchBeer.toLowerCase());
  });

  useEffect(() => {
    beerPosts(page, perPage);
  }, );

  async function beerPosts(page, perPage) {
    const responce = await PostService.getAll(page, perPage);
    setBeerPost(responce.data);
    setTotalPages(getPages(totalCount, perPage));
  }

  if (!beerPost.length) {
    return <Loader/>;
  }

  const changePage = (page) => {
    setPage(page);
    beerPosts(page, perPage);
  };

  return (
    <div className="container">
      <h1>BEERS STORAGE</h1>
      <input
        placeholder="Search..."
        value={searchBeer}
        onChange={(e) => setSearchBeer(e.target.value)}
      ></input>
      {filtersBeer.map((beerPost) => (
        <BeerCard beerPost={beerPost} key={beerPost.id} />
      ))}
      <Pagination page={page} totalPages={totalPages} changePage={changePage}/>
    </div>
  );
}

export default MainPage;
