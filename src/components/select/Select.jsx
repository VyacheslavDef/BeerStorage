import React, { useState } from "react";
import "./select_style.css";

const Select = ({
  valueSearchBeer,
  valueBeer,
  setSearchBeer,
  test,
  searchBeer,
  defaultValue,
  valueSearch,
}) => {
  const [active, setActive] = useState(false)
  return (
    <>
      <div className="btn_search-top mb-80" onClick={() => setActive((prevActive) => !prevActive)}>
        <h3>Поиск</h3>
      </div>
      <section className={!active ? "select_wrapper ds-none" : 'select_wrapper'}>
        <div className="items_wrapper_search">
          {Object.keys(valueBeer).map((x, index) => (
            <div
              key={index}
              onClick={() => {
                valueSearchBeer(x);
                console.log("x", x);
                console.log("valueSearch", valueSearch);
              }}
              className={
                valueSearch === x ? "item_search active_item" : "item_search"
              }
            >
              <p className="font-sm">{valueBeer[x]}</p>
            </div>
          ))}
        </div>
        <div className="input_wrapper_search">
          <input
            className="input"
            placeholder="Значение"
            value={searchBeer}
            onChange={(e) => setSearchBeer(e.target.value)}
          ></input>
          <button className="btn_search" onClick={test}>
            Найти
          </button>
        </div>
      </section>
      {/* <div className="search_wrapper">
        <h2 className="title_search">Найдите пиво которое так давно искали!</h2>
        <div className="select_input_wrapper">
          <select
            className="select"
            name="select"
            onChange={(e) => valueSearchBeer(e.target.value)}
          >
            {Object.keys(valueBeer).map((x) => (
              <option className="option" key={x} value={x}>
                {valueBeer[x]}
              </option>
            ))}
          </select>
          <input
            className="input"
            placeholder="Значение"
            value={searchBeer}
            onChange={(e) => setSearchBeer(e.target.value)}
          ></input>
        </div>
        <button className="btn_search" onClick={test}>
          Найти
        </button>
      </div> */}
    </>
  );
};

export default Select;
