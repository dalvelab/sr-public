import { ChangeEvent } from "react";

import classNames from "classnames";

import "./StandardInput.scss";

interface IProps {
  classes?: string;
  type?: string;
  value: string;
  error?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const StandardInput: React.FC<IProps> = (props) => {
  const { classes, type = "text", value, error, onChange } = props;
  return (
    <div className="standard__input__group__wrapper">
      <div className="standard__input__wrapper">
        <input
          type={type}
          placeholder="Поиск..."
          value={value}
          onChange={onChange}
          className={classNames(classes, {
            "input__error--active": error,
          })}
        />
      </div>
      {error && <small>{error}</small>}
    </div>
  );
};
