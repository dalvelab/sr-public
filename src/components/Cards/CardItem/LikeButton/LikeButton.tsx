import classNames from "classnames";

import { IconLike } from "@components/Icons";

import "./LikeButton.scss";

interface IProps {
  isLiked: boolean;
  onClick: () => void;
}

export const LikeButton: React.FC<IProps> = (props) => {
  const { isLiked, onClick } = props;

  return (
    <button
      className={classNames("card__categody__like__button", {
        "card__categody__like__button--liked": isLiked,
      })}
      onClick={onClick}
    >
      <IconLike color={isLiked ? "#ffffff" : "#7178a1"} />
    </button>
  );
};
