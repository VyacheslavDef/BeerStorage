import React from "react";

const Select = ({valueSearchBeer, valueBeer, setSearchBeer, test,searchBeer, defaultValue}) => {
  return (
    <div>
      <select
        name="select"
        onChange={(e) => valueSearchBeer(e.target.value)}
      >
        {Object.keys(valueBeer).map((x) => (
          <option key={x} value={x}>
            {valueBeer[x]}
          </option>
        ))}
      </select>
      <input
        placeholder="значение"
        value={searchBeer}
        onChange={(e) => setSearchBeer(e.target.value)}
      ></input>
      <button onClick={test}>TEST</button>
    </div>
  );
};

export default Select;
