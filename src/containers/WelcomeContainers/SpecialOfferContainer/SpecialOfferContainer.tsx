import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getShopItems } from "@actions/shop";
import { BLANK_STRING } from "@constants/common";
import { itemsSelector, specialOfferItemsSelector } from "@selectors/shop";
import { CardItem } from "@components/Cards";

import "./SpecialOfferContainer.scss";

export const SpecialOfferContainer: React.FC = () => {
  const dispatch = useDispatch();

  const { loading } = useSelector(itemsSelector);
  const items = useSelector(specialOfferItemsSelector);

  useEffect(() => {
    dispatch(getShopItems(BLANK_STRING, BLANK_STRING));
  }, [dispatch]);

  return (
    <>
      {loading && <p>Загрузка...</p>}
      {items.length > 0 && (
        <div className="welcome__page__special__offer__container">
          {items.map((item) => (
            <CardItem key={item.id} item={item} />
          ))}
        </div>
      )}
    </>
  );
};
