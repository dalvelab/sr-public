import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { includes } from "ramda";

import { getAllFavouriteItems } from "@actions/shop";
import { APP_NAME } from "@constants/common";
import { CardItem } from "@components/Cards";
import {
  favouriteItemsSelectorIds,
  favouriteItemsSelector,
} from "@selectors/shop";

import "./FavouriteItemsContainer.scss";

export const FavouriteItemsContainer: React.FC = () => {
  const dispatch = useDispatch();

  const { id } = useSelector(favouriteItemsSelectorIds);
  const { loading, items } = useSelector(favouriteItemsSelector);

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getAllFavouriteItems(id));
  }, [dispatch, id]);

  return (
    <>
      {loading && <p>Загрузка...</p>}{" "}
      {!loading && items.length === 0 && <p>В избранном ничего нет</p>}{" "}
      {items.length > 0 && (
        <div className="favourite__page__container">
          {items.map((item) => (
            <CardItem key={item.id} item={item} />
          ))}
        </div>
      )}
    </>
  );
};
