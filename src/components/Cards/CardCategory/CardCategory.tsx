import { Badge } from "@components/Badge";

import "./CardCategory.scss";

export const CardCategory: React.FC = (props) => {
  return (
    <div className="card__category">
      <Badge text="124" backgroundColor="#ebf0fe" top="10px" right="10px" />
      <div className="card__image"></div>
      <h6 className="card__title">Кровля и водосток</h6>
    </div>
  );
};
