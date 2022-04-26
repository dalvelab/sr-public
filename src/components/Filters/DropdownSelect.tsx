import { useState } from "react";
import classNames from "classnames";

import { IconChevron } from "@components/Icons";

import "./DropdownSelect.scss";

export const DropdownSelect: React.FC = () => {
  const [isOpened, setIsOpened] = useState(false);
  const [selected, setSelected] = useState<string[]>([]);

  const handleInputClick = () => {
    setIsOpened(!isOpened);
  };

  const handleItemClick = (item: string) => {
    // setSelected(item);
  };

  const items = ["АЦ486", "АК670"];

  return (
    <div className="dropdown__select__wrapper">
      <div
        className="dropdown__select--input"
        onClick={() => handleInputClick()}
      >
        <span className="input__text">
          {selected.length === 0
            ? "Не выбраны артикулы"
            : `Выбрано: ${selected.length}`}
        </span>
        <div
          className={classNames("input__icon", {
            "input__icon--active": isOpened,
          })}
        >
          <IconChevron color="#7178a1" />
        </div>
      </div>
      {isOpened && (
        <div className="dropdown__select__wrapper__content">
          {items.map((item, index) => {
            const handleClick = () => {
              if (selected.includes(item)) {
                setSelected((checked) => [
                  ...checked.filter((checkedItem) => checkedItem !== item),
                ]);
              } else {
                setSelected((checked) => [...checked, item]);
              }
            };

            return (
              <div key={index} className="select__item" onClick={handleClick}>
                <input
                  className="item__checkbox"
                  checked={selected.includes(item)}
                  type="checkbox"
                />
                <span className="item__text">{item}</span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
