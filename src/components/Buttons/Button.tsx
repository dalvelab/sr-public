interface IProps {
  padding?: string;
  color?: string;
  height?: string;
  backgroundColor?: string;
  onClick: () => void;
}

export const Button: React.FC<IProps> = (props) => {
  const { padding, color, backgroundColor, onClick, height, children } = props;

  return (
    <button
      style={{ padding, color, backgroundColor, height }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
