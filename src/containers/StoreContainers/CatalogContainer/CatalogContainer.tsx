import React from "react";
import { useSearchParams } from "react-router-dom";

import "./CatalogContainer.scss";

export const CatalogContainer: React.FC = () => {
  const [searchParams] = useSearchParams();

  const search = searchParams.get("search");
  const category = searchParams.get("category");

  return (
    <section className="store__page__items__container">
      <div className="items__info">
        {/* {notEmpty(search) && !category && (
          <div className="search__info">
            Найдено {state?.items.length} товар(ов) по запросу: {search}
          </div>
        )}

        {notEmpty(category) && !search && (
          <div className="search__info">
            Найдено {state?.items.length} товар(ов) в категории: {category}
          </div>
        )} */}
      </div>
      {/* <div className="card__items__wrapper">
        {data &&
          data?.items.map((item: IItem) => (
            <CardItem key={item.id} item={item} />
          ))}
      </div> */}
    </section>
  );
};
