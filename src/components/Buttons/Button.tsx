interface IProps {
  type?: "button" | "submit" | "reset";
  padding?: string;
  color?: string;
  height?: string;
  backgroundColor?: string;
  onClick?: () => void;
}

export const Button: React.FC<IProps> = (props) => {
  const { padding, type, color, backgroundColor, onClick, height, children } =
    props;

  return (
    <button
      type={type}
      style={{ padding, color, backgroundColor, height }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
