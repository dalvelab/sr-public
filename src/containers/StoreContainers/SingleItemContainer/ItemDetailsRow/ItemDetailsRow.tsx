import { notEmpty } from "@utils/common";

import "./ItemDetailsRow.scss";

interface IProps {
  title: string;
  content?: string | number;
  units?: string;
}

export const ItemDetailsRow: React.FC<IProps> = (props) => {
  const { title, content, units } = props;

  return (
    <>
      {notEmpty(content) && (
        <div className="item__details__row">
          <span className="row__title">{title}:</span>
          <span className="row__content">
            {content} {units}
          </span>
        </div>
      )}
    </>
  );
};
