import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

import { getShopItems, getShopSortingAction } from "@actions/shop";
import { CardItem } from "@components/Cards";
import { ButtonDropdown } from "@components/Buttons";
import {
  itemsSortedSelector,
  itemsSelector,
  shopSortSelector,
} from "@selectors/shop";
import { notEmpty } from "@utils/common";

import "./CatalogContainer.scss";

export const CatalogContainer: React.FC = () => {
  const dispatch = useDispatch();

  const [searchParams] = useSearchParams();

  const search = searchParams.get("search");
  const category = searchParams.get("category");

  const { count } = useSelector(itemsSelector);
  const items = useSelector(itemsSortedSelector);
  const { sortBy } = useSelector(shopSortSelector);

  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getShopItems(search, category));
  }, [dispatch, search, category]);

  const handleButtonDropdown = () => {
    setIsActive(!isActive);
  };

  const handleButtonDropdownRowClick = (sortOption: string) => {
    setIsActive(false);
    dispatch(getShopSortingAction(sortOption));
  };

  const sortOptions = [
    "По наименованию",
    "По убыванию цены",
    "По возрастанию цены",
  ];

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
      <div className="store__page__filters">
        <ButtonDropdown
          label="Сортировка:"
          activeOption={sortBy}
          options={sortOptions}
          isActive={isActive}
          onClick={() => handleButtonDropdown()}
          onOptionClick={(sortBy: string) =>
            handleButtonDropdownRowClick(sortBy)
          }
        />
      </div>
      <div className="card__items__wrapper">
        {items.map((item) => (
          <CardItem key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};
