import { CardCategory } from "@components/Cards";

import "./CategoriesContainer.scss";

export const CategoriesContainer: React.FC = () => {
  return (
    <div className="welcome__page__categories__container">
      <CardCategory />
    </div>
  );
};
