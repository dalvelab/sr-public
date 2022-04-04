import classNames from "classnames";
import { useState } from "react";

import { IconChevron } from "../Icons";

import "./Collapse.scss";

interface IProps {
  title: string;
}

export const Collapse: React.FC<IProps> = (props) => {
  const { title, children } = props;

  const [isOpened, setIsOpened] = useState(false);

  return (
    <div
      className={classNames("collapse__wrapper", {
        "collapse--opened": isOpened,
      })}
    >
      <div className="collapse__header" onClick={() => setIsOpened(!isOpened)}>
        <h6 className="collapse__title">{title}</h6>
        <div className="icon__wrapper">
          <IconChevron color="#1d2532" />
        </div>
      </div>
      {isOpened && <div className="collapse__hidden__content">{children}</div>}
    </div>
  );
};
