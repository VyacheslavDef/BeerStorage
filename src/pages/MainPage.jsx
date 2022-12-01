import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostService from "../API/PostService";
import "../App.css";
import BeerCard from "../components/BeerCard";
import Loader from "../components/loader/Loader";
import Pagination from "../components/Pagination";
import { getPages } from "../utils/utils";
import Select from "../components/Select";

function MainPage() {
  const [beerPost, setBeerPost] = useState([]);

  const [searchBeer, setSearchBeer] = useState("");
  const [valueSearchBeer, setValueSearchBeer] = useState("beer_name");

  const valueBeer = {
    beer_name: "Название напитка",
    abv_gt: "Больше алкоголя",
    abv_lt: "Меньше алкоголя",
    ibu_gt: "Больше IBU",
    ibu_lt: "Меньше IBU",
    food: "Предпочитаемая еда",
  };

  const [berPostFaw, setBerPostFaw] = useState([]);

  const { per_page, current_page } = useParams();

  const [totalCount] = useState(325);
  const [totalPages, setTotalPages] = useState(0);

  const [page, setPage] = useState(current_page);
  const [perPage] = useState(per_page);

  // Подгрузка страницы с апишной пагинацией
  async function beerPosts(page, perPage) {
    const responce = await PostService.getPagination(page, perPage);
    setBeerPost(responce.data);
    setTotalPages(getPages(totalCount, perPage));
  }
  // Подгрузка фильтрации по пиву
  async function allPostBeer(param='beer_name', num) {
    const responce = await PostService.getAll(param, num);
    setBeerPost(responce.data);
  }

  useEffect(() => {
    beerPosts(page, perPage);
  }, []);

  const test = () => {
    allPostBeer(valueSearchBeer, searchBeer);
  };

  const changePage = (page, per_page) => {
    setPage(page);
    beerPosts(page, per_page);
  };

  //Букмарк и фаворитное пиво
  const change = (id) => {
    const newarr = beerPost.map((faw) => {
      if (faw.id === id) {
        return { ...faw, favorites: !faw.favorites };
      }
      return faw;
    });
    newarr.forEach((x) => {
      if (x.favorites === true) {
        setBerPostFaw([...berPostFaw, x.id]);
      } else {
        const indexFaw = berPostFaw.indexOf(x.id);
        if (indexFaw !== -1) {
          berPostFaw.splice(indexFaw, 1);
          setBerPostFaw(berPostFaw);
        }
      }
    });
    setBeerPost(newarr);
  };

  return beerPost.length ? (
    <section className="main_page">
      <div className="container">
        <h1>BEERS STORAGE</h1>
        <Select
          valueSearchBeer={setValueSearchBeer}
          valueBeer={valueBeer}
          setSearchBeer={setSearchBeer}
          test={test}
          searchBeer={searchBeer}
          defaultValue='Выберете значение'
        />
        {beerPost.map((beerPost) => (
          <BeerCard beerPost={beerPost} key={beerPost.id} change={change} />
        ))}
        <Pagination
          page={page}
          totalPages={totalPages}
          changePage={changePage}
          beerPost={beerPost}
        />
      </div>
    </section>
  ) : (
    <Loader />
  );
}

export default MainPage;
