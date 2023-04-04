import React, { useEffect, useState } from "react";
import { add, remove } from "../../state_redux/faworitesRedux";
import { useDispatch, useSelector } from "react-redux";

const Boormark = ({beerPost}) => {
  const dispatch = useDispatch();
  const item = useSelector((state) => state.todos);
  const [fillActive, setFillActive] = useState(false);

  useEffect(() => {
    item.forEach((x) => {
      if (x.id === beerPost.id) {
        setFillActive(true);
      }
    });
  });

  return (
    <i
      className={"bi bi-heart" + (fillActive ? "-fill" : "")}
      onClick={() => {
        dispatch(add(beerPost.id));
        setFillActive(true);
        item.forEach((x) => {
          if (x.id === beerPost.id) {
            dispatch(remove(beerPost.id));
            setFillActive(false);
          }
        });
      }}
    ></i>
  );
};

export default Boormark;
