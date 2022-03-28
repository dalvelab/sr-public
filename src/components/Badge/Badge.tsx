interface IProps {
  text: string;
  backgroundColor: string;
  color?: string;
  padding?: string;
}

import "./Badge.scss";

export const Badge: React.FC<IProps> = (props) => {
  const {
    text,
    backgroundColor,
    color = "#3661ed",
    padding = "5px 13px",
  } = props;

  return (
    <div className="badge__wrapper" style={{ backgroundColor, padding }}>
      <span className="badge__text" style={{ color }}>
        {text}
      </span>
    </div>
  );
};
