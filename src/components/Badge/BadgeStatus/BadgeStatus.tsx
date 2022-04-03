import { defaultTo } from "ramda";

import { ItemStatuses } from "@models/data";

import { Badge } from "../Badge";
import "./BadgeStatus.scss";

const statusToColorMap = {
  [ItemStatuses.IN]: "badge__status--success",
  [ItemStatuses.OUT]: "badge__status--danger",
  [ItemStatuses.AWAITING]: "badge__status--warning",
};

interface IProps {
  padding?: string;
  status: ItemStatuses;
  text: string;
}

export const BadgeStatus: React.FC<IProps> = (props) => {
  const { padding, text, status } = props;

  const style = defaultTo("badge__status--default", statusToColorMap[status]);

  return <Badge text={text} className={style} padding={padding} />;
};
