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

  const [berPostFaw, setBerPostFaw] = useState([]);

  const [searchBeer, setSearchBeer] = useState("");

  const { per_page, current_page } = useParams();

  const [totalCount] = useState(325);
  const [totalPages, setTotalPages] = useState(0);

  const [page, setPage] = useState(current_page);
  const [perPage] = useState(per_page);

  const filtersBeer = beerPost.filter((beer) => {
    return beer.name.toLowerCase().includes(searchBeer.toLowerCase());
  });

  async function beerPosts(page, perPage) {
    const responce = await PostService.getAll(page, perPage);
    setBeerPost(responce.data);
    setTotalPages(getPages(totalCount, perPage));
  }

  useEffect(() => {
    beerPosts(page, perPage);
  }, []);

  const changePage = (page, per_page) => {
    setPage(page);
    beerPosts(page, per_page);
  };

  const change = (id) => {
    const newarr = beerPost.map((faw) => {
      if (faw.id === id) {
        return { ...faw, favorites: !faw.favorites };
      }
      return faw;
    });
    newarr.forEach((x) => {
      if (x.favorites === true) {
        setBerPostFaw([
          ...berPostFaw, x.id
        ])
        console.log(true)
      } else {
        console.log(false)
      }
    })
    setBeerPost(newarr);
    console.log(berPostFaw)
  };

  return beerPost.length ? (
    <section className="main_page">
      <div className="container">
        <h1>BEERS STORAGE</h1>
        <input
          className="mb-5"
          placeholder="Search..."
          value={searchBeer}
          onChange={(e) => setSearchBeer(e.target.value)}
        ></input>
        {filtersBeer.map((beerPost) => (
          <BeerCard beerPost={beerPost} key={beerPost.id} change={change} />
        ))}

        <Pagination
          page={page}
          totalPages={totalPages}
          changePage={changePage}
        />
      </div>
    </section>
  ) : (
    <Loader />
  );
}

export default MainPage;
