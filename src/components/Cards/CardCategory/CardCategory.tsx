import { Link } from "react-router-dom";

import { Badge } from "@components/Badge";
import { Image } from "@components/Image";

import { RouterUrl } from "@models/urls";
import { ICategory } from "@models/data";

import "./CardCategory.scss";

interface IProps {
  category: ICategory;
}

export const CardCategory: React.FC<IProps> = (props) => {
  const { category } = props;
  return (
    <Link
      to={`${RouterUrl.shop().path}/?category=${category.category}`}
      className="card__category"
    >
      <Badge text={category.count} backgroundColor="#ebf0fe" />
      <div className="card__image">
        <Image url={category.image} alt="Категория" />
      </div>
      <h6 className="card__title font--black">{category.category}</h6>
    </Link>
  );
};
