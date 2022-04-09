import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { includes } from "ramda";

import { addShopFavouriteItem } from "@actions/shop";
import { Button } from "@components/Buttons";
import { BadgeStatus } from "@components/Badge/BadgeStatus";
import { Image } from "@components/Image";
import { IItem } from "@models/data";
import { favouriteItemsSelectorIds } from "@selectors/shop";

import { LikeButton } from "./LikeButton";

import "./CardItem.scss";

interface IProps {
  item: IItem;
}

export const CardItem: React.FC<IProps> = (props) => {
  const { item } = props;

  const dispatch = useDispatch();

  const { id } = useSelector(favouriteItemsSelectorIds);

  const handleLikeClick = (id: number) => {
    dispatch(addShopFavouriteItem(id));
  };

  return (
    <div className="card__item">
      <LikeButton
        onClick={() => handleLikeClick(item.id)}
        isLiked={includes(item.id, id)}
      />
      <div className="card__image">
        <Image
          url={item.attributes.image.data.attributes.url}
          alt="Изображение товара"
        />
      </div>
      <div className="card__info">
        <BadgeStatus
          padding="7px 14px"
          text={item.attributes.status}
          status={item.attributes.status}
        />
        <div className="card__itemcode font--blue-gray">
          Артикул: {item.attributes.vendor_code}
        </div>
      </div>
      <h6 className="card__title">{item.attributes.title}</h6>
      <div className="card__prices__wrapper">
        {item.attributes.old_price && (
          <div className="card__old__price">
            {item.attributes.old_price} ₽ за {item.attributes.amount_units}.
          </div>
        )}
        <div className="card__price">
          {item.attributes.price} ₽ за {item.attributes.amount_units}
        </div>
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
