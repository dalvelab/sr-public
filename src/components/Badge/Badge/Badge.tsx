import { notEmpty } from "@utils/common";

import classNames from "classnames";

import "./Badge.scss";

interface IProps {
  className?: string;
  text: string | number;
  backgroundColor?: string;
  color?: string;
  padding?: string;
}

export const Badge: React.FC<IProps> = (props) => {
  const {
    className,
    text,
    backgroundColor,
    color,
    padding = "5px 13px",
  } = props;

  return (
    <div
      className={classNames("badge__wrapper", {
        [`${className}`]: notEmpty(className),
      })}
      style={{ backgroundColor, padding }}
    >
      <span className="badge__text" style={{ color }}>
        {text}
      </span>
    </div>
  );
};
