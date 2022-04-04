import React from "react";

interface IProps {
  color: string;
}

export const IconChevron: React.FC<IProps> = (props) => {
  const { color } = props;
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M21.125 11.5C20.625 11 19.875 11 19.375 11.5L15 15.875L10.625 11.5C10.125 11 9.375 11 8.875 11.5C8.375 12 8.375 12.75 8.875 13.25L14.125 18.5C14.375 18.75 14.625 18.875 15 18.875C15.375 18.875 15.625 18.75 15.875 18.5L21.125 13.25C21.625 12.75 21.625 12 21.125 11.5Z" />
    </svg>
  );
};
