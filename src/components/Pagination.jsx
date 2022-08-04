import React from "react";
import { getPagesArray } from "../utils/utils";


const Pagination = ({page, totalPages, changePage}) => {

let pagesArray = getPagesArray(totalPages);

  return (
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
  );
};

export default Pagination;
