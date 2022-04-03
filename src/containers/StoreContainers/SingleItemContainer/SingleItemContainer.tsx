import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { getShopSingleItem } from "@actions/shop";
import { BadgeStatus } from "@components/Badge/BadgeStatus";
import { Button } from "@components/Buttons";
import { Image } from "@components/Image";
import { singleItemSelector } from "@selectors/shop/items";
import { CreateOrderModal } from "../../../modals/CreateOrderModal";

import "./SingleItemContainer.scss";

export const SingleItemContainer: React.FC = () => {
  const dispatch = useDispatch();
  const params = useParams();

  const { item, loading } = useSelector(singleItemSelector);

  const [isOpened, setIsOpened] = useState(false);
  const [isOverlay, setIsOverlay] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getShopSingleItem(params.id));
  }, [dispatch]);

  const handleOrder = () => {
    setIsOpened(true);
    setIsOverlay(true);
  };

  return (
    <div className="single__item__wrapper">
      {loading || !item.attributes ? (
        <p>Загрузка..</p>
      ) : (
        <>
          {isOverlay && <div className="modal__overlay"></div>}
          <CreateOrderModal
            isOpened={isOpened}
            item={`${item.attributes.title}, ${item.attributes.vendor_code}`}
            price={item.attributes.price}
            closeModal={() => setIsOpened(false)}
            closeOverlay={() => setIsOverlay(false)}
          />
          <div className="item__general__info">
            <div className="item__image">
              <Image
                url={item.attributes.image.data.attributes.url}
                alt="Товар"
              />
            </div>
            <div className="item__info">
              <BadgeStatus
                padding="7px 14px"
                text={item.attributes.status}
                status={item.attributes.status}
              />
              <h1 className="item__title">
                {item.attributes.title},{" "}
                {item.attributes.brand.data.attributes.brand}
              </h1>
              <div className="item__price__wrapper">
                {item.attributes.old_price && (
                  <div className="item__old__price">
                    {item.attributes.old_price} ₽ за шт
                  </div>
                )}
                <div className="item__price">
                  {item.attributes.price} ₽ за шт
                </div>
              </div>
              <div className="item__button">
                <Button
                  padding="10px 28px"
                  backgroundColor="#1d2532"
                  color="#ffffff"
                  onClick={handleOrder}
                >
                  Заказать
                </Button>
              </div>
            </div>
          </div>
          <div className="item__description__wrapper">
            <h4>Характеристики</h4>
            <div className="item__description__container">
              <div className="description__column">
                <div className="item__description">
                  <span className="description__title">Длина:</span>
                  <span className="description__content">
                    {item.attributes.length} {item.attributes.length_units}
                  </span>
                </div>
                <div className="item__description">
                  <span className="description__title">Ширина:</span>
                  <span className="description__content">
                    {item.attributes.width} {item.attributes.weight_units}
                  </span>
                </div>
                <div className="item__description">
                  <span className="description__title">Высота:</span>
                  <span className="description__content">
                    {item.attributes.height} {item.attributes.height_units}
                  </span>
                </div>
                <div className="item__description">
                  <span className="description__title">Толщина:</span>
                  <span className="description__content">
                    {item.attributes.thickness}{" "}
                    {item.attributes.thickness_units}
                  </span>
                </div>
                <div className="item__description">
                  <span className="description__title">Объем:</span>
                  <span className="description__content">
                    {item.attributes.volume} {item.attributes.volume_units}
                  </span>
                </div>
              </div>
              <div className="description__column">
                <div className="item__description">
                  <span className="description__title">Масса:</span>
                  <span className="description__content">
                    {item.attributes.weight} {item.attributes.weight_units}
                  </span>
                </div>
                <div className="item__description">
                  <span className="description__title">Плотность:</span>
                  <span className="description__content">
                    {item.attributes.density} {item.attributes.density_units}
                  </span>
                </div>
                <div className="item__description">
                  <span className="description__title">Толщина слоя:</span>
                  <span className="description__content">
                    {item.attributes.layer_thickness}{" "}
                    {item.attributes.layer_thickness_units}
                  </span>
                </div>
                <div className="item__description">
                  <span className="description__title">Метод нанесения:</span>
                  <span className="description__content">
                    {item.attributes.application_method}
                  </span>
                </div>
                <div className="item__description">
                  <span className="description__title">Тип работ:</span>
                  <span className="description__content">
                    {item.attributes.type_of_work}
                  </span>
                </div>
              </div>
              <div className="column">
                <div className="item__description">
                  <span className="description__title">Место нанесения:</span>
                  <span className="description__content">
                    {item.attributes.application_area}
                  </span>
                </div>
                <div className="item__description">
                  <span className="description__title">Цвет:</span>
                  <span className="description__content">
                    {item.attributes.color}
                  </span>
                </div>
                <div className="item__description">
                  <span className="description__title">Марка:</span>
                  <span className="description__content">
                    {item.attributes.mark}
                  </span>
                </div>
                <div className="item__description">
                  <span className="description__title">Артикул:</span>
                  <span className="description__content">
                    {item.attributes.vendor_code}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="item__description__wrapper">
            <h4>Описание товара</h4>
            <p className="item__text">{item.attributes.Description}</p>
          </div>
        </>
      )}
    </div>
  );
};
