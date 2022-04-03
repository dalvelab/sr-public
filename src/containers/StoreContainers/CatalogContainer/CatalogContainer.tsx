import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

import { getShopItems } from "@actions/shop";
import { CardItem } from "@components/Cards";
import { itemsSelector } from "@selectors/shop/items";
import { notEmpty } from "@utils/common";

import "./CatalogContainer.scss";

export const CatalogContainer: React.FC = () => {
  const dispatch = useDispatch();

  const [searchParams] = useSearchParams();

  const search = searchParams.get("search");
  const category = searchParams.get("category");

  const { items, count } = useSelector(itemsSelector);

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getShopItems(search, category));
  }, [dispatch, search, category]);

  return (
    <section className="store__page__items__container">
      <div className="items__info">
        {notEmpty(search) && !category && (
          <div className="search__info">
            Найдено {count} товар(ов) по запросу: {search}
          </div>
        )}

        {notEmpty(category) && !search && (
          <div className="search__info">
            Найдено {count} товар(ов) в категории: {category}
          </div>
        )}
      </div>
      <div className="card__items__wrapper">
        {items.map((item) => (
          <CardItem key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};
