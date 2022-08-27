import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostService from "../API/PostService";
import "../App.css";
import BeerCard from "../components/BeerCard";
import Loader from "../components/loader/Loader";
import Pagination from "../components/Pagination";
import { getPages } from "../utils/utils";

function MainPage() {
  const [beerPost, setBeerPost] = useState([]);

  const [searchBeer, setSearchBeer] = useState("");

  const {per_page, current_page} = useParams() 

  const [totalCount] = useState(325);
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(current_page);
  const [perPage] = useState(per_page);


  const filtersBeer = beerPost.filter((beer) => {
    return beer.name.toLowerCase().includes(searchBeer.toLowerCase());
  });

  useEffect(() => {
    beerPosts(page, perPage);
  },[page, perPage] );



  async function beerPosts(page, perPage) {
    const responce = await PostService.getAll(page, perPage);
    setBeerPost(responce.data);
    setTotalPages(getPages(totalCount, perPage));
  }

  if (!beerPost.length) {
    return <Loader/>;
  }

  const changePage = (page, per_page) => {
    setPage(page);
    beerPosts(page, per_page);
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
        <BeerCard beerPost={beerPost} key={beerPost.id}/>
      ))}

        <Pagination page={page} totalPages={totalPages} changePage={changePage}/>

    </div>
  );
}

export default MainPage;
