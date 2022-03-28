import "./StandardInput.scss";

interface IProps {
  width?: string;
  height?: string;
  type?: string;
}

export const StandardInput: React.FC<IProps> = (props) => {
  const { width = "280px", height = "40px", type = "text" } = props;
  return (
    <div className="standard__input__wrapper" style={{ width, height }}>
      <input type={type} placeholder="Поиск..." />
    </div>
  );
};
