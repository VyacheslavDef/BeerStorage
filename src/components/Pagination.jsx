import React from "react";
import { Link } from "react-router-dom";
import { getPagesArray } from "../utils/utils";


const Pagination = ({page, totalPages, changePage}) => {

let pagesArray = getPagesArray(totalPages);
const per_page = 10

// const newPagesArray = pagesArray.slice(0, 10)

  return (
    <div className="btn_div">
      
      {pagesArray.map((p) => (
        <Link
          to={`/page/${p}/${per_page}`}
          onClick={() => changePage(p, per_page)}
          key={p}
        ><button className={page === p ? "page_current" : ""}>
          {p}
          </button></Link>   
      ))}
    </div>
  );
};

export default Pagination;
