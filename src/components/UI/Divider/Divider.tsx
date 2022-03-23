import React from "react";

interface IProps {
  margin?: string;
  color?: string;
}

export const Divider: React.FC<IProps> = (props) => {
  const { margin = "12px 0", color = "var(--color-light-gray)" } = props;

  return (
    <hr
      className="divider__default"
      style={{ margin, borderTop: `1px solid ${color}` }}
    />
  );
};
