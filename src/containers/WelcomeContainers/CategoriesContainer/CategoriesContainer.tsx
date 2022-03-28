import axios from "axios";
import { useQuery } from "react-query";
import { CardCategory } from "@components/Cards";
import { ApiStrapiUrl } from "@models/urls";
import { Category } from "@models/data";

import "./CategoriesContainer.scss";

export const CategoriesContainer: React.FC = () => {
  const { data, isFetched, isSuccess } = useQuery("itemsCategoriesCount", () =>
    axios
      .get(
        `${ApiStrapiUrl.countCategoriesWithItems().getOrigin()}?populate[0]=category&populate[1]=category.image`
      )
      .then((res) => res.data.data.categories)
  );

  return (
    <div className="welcome__page__categories__container">
      {isSuccess &&
        data.map((category: Category, index: number) => (
          <CardCategory key={index} category={category} />
        ))}
    </div>
  );
};
