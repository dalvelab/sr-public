import classNames from "classnames";

import "./Button.scss";

interface IProps {
  onClick: () => void;
  isActive: boolean;
}

export const Button: React.FC<IProps> = (props) => {
  const { onClick, isActive } = props;

  return (
    <button
      className={classNames("nav__mobile__button", {
        "nav__mobile__button--active": isActive,
      })}
      onClick={onClick}
    >
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
    </button>
  );
};
