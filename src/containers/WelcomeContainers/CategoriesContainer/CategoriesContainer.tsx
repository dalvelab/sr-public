import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getUniqueCategories } from "@actions/shop";
import { categoriesSelector } from "@selectors/shop";
import { CardCategory } from "@components/Cards";

import "./CategoriesContainer.scss";

export const CategoriesContainer: React.FC = () => {
  const dispatch = useDispatch();

  const { categories, loading } = useSelector(categoriesSelector);

  useEffect(() => {
    dispatch(getUniqueCategories());
  }, [dispatch]);

  return (
    <div className="welcome__page__categories__container">
      {loading && <p>Загрузка...</p>}
      {categories.map((category, index: number) => (
        <CardCategory key={index} category={category} />
      ))}
    </div>
  );
};
