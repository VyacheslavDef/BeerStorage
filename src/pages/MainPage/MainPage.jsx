import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostService from "../../API/PostService";
import BeerCard from "../../components/beerCard/BeerCard";
import Loader from "../../components/loader/Loader";
import Pagination from "../../components/pagination/Pagination";
import { getPages } from "../../utils/utils";
import Select from "../../components/select/Select";

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

  const { per_page, current_page } = useParams();

  const [totalCount] = useState(325);
  const [totalPages, setTotalPages] = useState(0);

  const [page, setPage] = useState(current_page);
  const [perPage] = useState(per_page);

  // Подгрузка страницы с апишной пагинацией
  async function beerPosts() {
    const responce = await PostService.getPagination(current_page, per_page);
    setBeerPost(responce.data);
    setTotalPages(getPages(totalCount, perPage));
  }
  // Подгрузка фильтрации по пиву
  async function allPostBeer(param = "beer_name", num) {
    const responce = await PostService.getAll(param, num);
    setBeerPost(responce.data);
  }

  useEffect(() => {
    beerPosts();
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [current_page]);

  const test = () => {
    allPostBeer(valueSearchBeer, searchBeer);
  };

  const changePage = (page, per_page) => {
    setPage(page);
    beerPosts(page, per_page);
  };

  return beerPost.length ? (
    <section className="main_page">
      <div className="container">
        <h1 className="text_title">BEERS STORAGE</h1>
        <Select
          valueSearch={valueSearchBeer}
          valueSearchBeer={setValueSearchBeer}
          valueBeer={valueBeer}
          setSearchBeer={setSearchBeer}
          test={test}
          searchBeer={searchBeer}
          defaultValue="Выберете значение"
        />
        <div className="beers_cards_wrapper">
          {beerPost.map((beerPost) => (
            <BeerCard beerPost={beerPost} key={beerPost.id} />
          ))}
        </div>
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