import { Link } from "react-router-dom";

import { Button } from "@components/Buttons";
import { Badge } from "@components/Badge";

import "./CardItem.scss";

export const CardItem: React.FC = () => {
  return (
    <div className="card__item">
      <div className="card__image"></div>
      <div className="card__info">
        <Badge
          padding="7px 14px"
          text="В наличии"
          backgroundColor="#c4eed7"
          color="#1d2532"
        />
        <div className="card__itemcode font--blue-gray">Артикул: 2021341</div>
      </div>
      <h6 className="card__title">
        Теплоизоляция “ИЗБА”, Лайт (50мм), 1000*600 *50мм
      </h6>
      <div className="card__prices__wrapper">
        <div className="card__old__price">799 ₽</div>
        <div className="card__price">699 ₽ за шт.</div>
      </div>
      <div className="card__button__wrapper">
        <Link to="/shop">
          <Button
            padding="10px 28px"
            backgroundColor="#1d2532"
            color="#ffffff"
            onClick={() => console.log("Clicked")}
          >
            Перейти
          </Button>
        </Link>
      </div>
    </div>
  );
};
