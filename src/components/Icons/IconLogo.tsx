import React from "react";

interface IProps {
  color: string;
}

export const IconLogo: React.FC<IProps> = (props) => {
  const { color } = props;
  return (
    <svg
      width="55"
      height="55"
      viewBox="0 0 55 55"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="55" height="55" rx="12" fill={color} />
      <path
        d="M14.5594 20.8364H10V24.0749H16.5709L25.6897 13.4876H32.931L39.636 20.3382H26.7625L23.1418 24.0749V31.4238L26.7625 34.2886V30.3027V25.3205L28.7739 23.5767H45V20.8364L34.272 10H23.5441L14.5594 20.8364Z"
        fill="white"
      />
      <path
        d="M33.0652 31.0497L29.9809 34.2882H39.502L33.0652 41.6371H26.6284L16.705 33.6654H10.1342V36.7793H14.8276L24.751 45.0001H35.0767L44.7319 33.6654V31.0497H33.0652Z"
        fill="white"
      />
    </svg>
  );
};
