import React, { useEffect, useState } from "react";
import PostService from "../API/PostService";
import "../App.css";
import BeerCard from "../components/BeerCard";
import { getPages, getPagesArray } from "../utils/utils";

function MainPage() {
  const [beerPost, setBeerPost] = useState([]);

  const [searchBeer, setSearchBeer] = useState("");

  const [totalCount] = useState(325);
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(1);
  const [perPage] = useState(25);

  let pagesArray = getPagesArray(totalPages);

  const filtersBeer = beerPost.filter((beer) => {
    return beer.name.toLowerCase().includes(searchBeer.toLowerCase());
  });

  useEffect(() => {
    beerPosts(page, perPage);
  }, [page]);

  async function beerPosts(page, perPage) {
    const responce = await PostService.getAll(page, perPage);
    setBeerPost(responce.data);
    setTotalPages(getPages(totalCount, perPage));
  }

  if (!beerPost.length) {
    return <h1 style={{ textAlign: "center" }}>ERROR</h1>;
  }

  const changePage = (page) => {
    setPage(page);
    beerPosts(page, perPage);
  };

  return (
    <div className="container">
      <input
        placeholder="Search..."
        value={searchBeer}
        onChange={(e) => setSearchBeer(e.target.value)}
      ></input>
      {filtersBeer.map((beerPost) => (
        <BeerCard beerPost={beerPost} key={beerPost.id} />
      ))}
      <div className="btn_div">
        {pagesArray.map((p) => (
          <button
            className={page === p ? "page_current" : ""}
            onClick={() => changePage(p)}
            key={p}
          >
            {p}
          </button>
        ))}
      </div>
    </div>
  );
}

export default MainPage;
