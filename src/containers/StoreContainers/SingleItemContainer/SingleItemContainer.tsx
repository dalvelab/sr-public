import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { Helmet } from "react-helmet";

import { getShopSingleItem } from "@actions/shop";
import { BadgeStatus } from "@components/Badge";
import { Button } from "@components/Buttons/Button";
import { Image } from "@components/Image";
import { singleItemSelector } from "@selectors/shop/items";
import { CreateOrderModal } from "../../../modals/CreateOrderModal";
import { notEmpty } from "@utils/common";

import { ItemDetailsRow } from "./ItemDetailsRow";

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
          <Helmet>
            <title>{item.attributes.title} - Строительные решения</title>
          </Helmet>
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
              <h1 className="item__title">{item.attributes.title} </h1>
              <div className="item__price__wrapper">
                {item.attributes.old_price && (
                  <div className="item__old__price">
                    {item.attributes.old_price} ₽ за{" "}
                    {item.attributes.amount_units}
                  </div>
                )}
                <div className="item__price">
                  {item.attributes.price} ₽ за {item.attributes.amount_units}
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
              {(notEmpty(item.attributes.color) ||
                notEmpty(item.attributes.mark) ||
                notEmpty(item.attributes.vendor_code) ||
                notEmpty(item.attributes.country_manufacturer)) && (
                <div className="description__column">
                  <h6>Основные</h6>
                  <ItemDetailsRow
                    title="Бренд"
                    content={
                      notEmpty(item.attributes.brand.data)
                        ? item.attributes.brand.data.attributes.brand
                        : undefined
                    }
                  />
                  <ItemDetailsRow
                    title="Страна производитель"
                    content={item.attributes.country_manufacturer}
                  />
                  <ItemDetailsRow
                    title="Цвет"
                    content={item.attributes.color}
                  />
                  <ItemDetailsRow
                    title="Марка"
                    content={item.attributes.mark}
                  />
                  <ItemDetailsRow
                    title="Артикул"
                    content={item.attributes.vendor_code}
                  />
                </div>
              )}
              {(notEmpty(item.attributes.length) ||
                notEmpty(item.attributes.weight) ||
                notEmpty(item.attributes.height) ||
                notEmpty(item.attributes.thickness) ||
                notEmpty(item.attributes.volume) ||
                notEmpty(item.attributes.weight)) && (
                <div className="description__column">
                  <h6>Размеры</h6>
                  <ItemDetailsRow
                    title="Длина"
                    content={item.attributes.length}
                    units={item.attributes.length_units}
                  />
                  <ItemDetailsRow
                    title="Ширина"
                    content={item.attributes.width}
                    units={item.attributes.width_units}
                  />
                  <ItemDetailsRow
                    title="Высота"
                    content={item.attributes.height}
                    units={item.attributes.height_units}
                  />
                  <ItemDetailsRow
                    title="Толщина"
                    content={item.attributes.thickness}
                    units={item.attributes.thickness_units}
                  />
                  <ItemDetailsRow
                    title="Объем"
                    content={item.attributes.volume}
                    units={item.attributes.volume_units}
                  />
                  <ItemDetailsRow
                    title="Масса"
                    content={item.attributes.weight}
                    units={item.attributes.weight_units}
                  />
                </div>
              )}
              {(notEmpty(item.attributes.density) ||
                notEmpty(item.attributes.layer_thickness) ||
                notEmpty(item.attributes.application_method) ||
                notEmpty(item.attributes.application_area) ||
                notEmpty(item.attributes.type_of_work)) && (
                <div className="description__column">
                  <h6>Специальные</h6>
                  <ItemDetailsRow
                    title="Плотность"
                    content={item.attributes.density}
                    units={item.attributes.density_units}
                  />
                  <ItemDetailsRow
                    title="Толщина слоя"
                    content={item.attributes.layer_thickness}
                    units={item.attributes.layer_thickness_units}
                  />
                  <ItemDetailsRow
                    title="Метод нанесения"
                    content={item.attributes.application_method}
                  />
                  <ItemDetailsRow
                    title="Место нанесения"
                    content={item.attributes.application_area}
                  />
                  <ItemDetailsRow
                    title="Тип работ"
                    content={item.attributes.type_of_work}
                  />
                </div>
              )}
            </div>
          </div>
          <div className="item__description__wrapper">
            <h4>Описание товара</h4>
            <div className="content__wrapper">
              <ReactMarkdown>{item.attributes.description}</ReactMarkdown>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
