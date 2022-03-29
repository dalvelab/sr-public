import { Link } from "react-router-dom";

import { Button } from "@components/Buttons";
import { Badge } from "@components/Badge";
import { Image } from "@components/Image";

import { IItem } from "@models/data";

import "./CardItem.scss";

interface IProps {
  item: IItem;
}

export const CardItem: React.FC<IProps> = (props) => {
  const { item } = props;
  return (
    <div className="card__item">
      <div className="card__image">
        <Image
          url={item.attributes.image.data.attributes.url}
          alt="Изображение товара"
        />
      </div>
      <div className="card__info">
        <Badge
          padding="7px 14px"
          text={item.attributes.status}
          backgroundColor="#c4eed7"
          color="#1d2532"
        />
        <div className="card__itemcode font--blue-gray">
          Артикул: {item.attributes.vendor_code}
        </div>
      </div>
      <h6 className="card__title">{item.attributes.title}</h6>
      <div className="card__prices__wrapper">
        {item.attributes.old_price && (
          <div className="card__old__price">
            {item.attributes.old_price} ₽ за шт.
          </div>
        )}
        <div className="card__price">{item.attributes.price} ₽ за шт.</div>
      </div>
      <div className="card__button__wrapper">
        <Link to={`/shop/${item.attributes.slug}`}>
          <Button padding="10px 28px" backgroundColor="#1d2532" color="#ffffff">
            Перейти
          </Button>
        </Link>
      </div>
    </div>
  );
};
