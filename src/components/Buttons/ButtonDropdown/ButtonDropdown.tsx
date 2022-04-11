import classNames from "classnames";

import { IconChevron } from "@components/Icons";

import "./ButtonDropdown.scss";

interface IProps {
  label?: string;
  activeOption?: string;
  options: string[];
  isActive: boolean;
  onClick: () => void;
  onOptionClick: (sortBy: string) => void;
}

export const ButtonDropdown: React.FC<IProps> = (props) => {
  const { label, activeOption, options, isActive, onClick, onOptionClick } =
    props;

  return (
    <div className="button__dropdown__wrapper">
      <button className="button__dropdown" onClick={onClick}>
        <span className="dropdown__text">
          <span className="font--blue-gray">{label}</span> {activeOption}
        </span>
        <div className="dropdown__icon">
          <IconChevron color="#1d2532" />
        </div>
      </button>
      {isActive && (
        <div className="button__dropdown__content">
          {options.map((option: string, index: number) => (
            <div
              key={index}
              className={classNames("content__row", {
                "content__row--active": option === activeOption,
              })}
              onClick={() => onOptionClick(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
