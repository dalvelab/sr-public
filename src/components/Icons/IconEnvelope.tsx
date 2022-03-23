import React from "react";

interface IProps {
  color: string;
}

export const IconEnvelope: React.FC<IProps> = (props) => {
  const { color } = props;
  return (
    <svg
      width="20"
      height="16"
      viewBox="0 0 20 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17 0H3C2.20435 0 1.44129 0.316071 0.87868 0.87868C0.316071 1.44129 0 2.20435 0 3V13C0 13.7956 0.316071 14.5587 0.87868 15.1213C1.44129 15.6839 2.20435 16 3 16H17C17.7956 16 18.5587 15.6839 19.1213 15.1213C19.6839 14.5587 20 13.7956 20 13V3C20 2.20435 19.6839 1.44129 19.1213 0.87868C18.5587 0.316071 17.7956 0 17 0V0ZM16.59 2L10.71 7.88C10.617 7.97373 10.5064 8.04812 10.3846 8.09889C10.2627 8.14966 10.132 8.1758 10 8.1758C9.86799 8.1758 9.73728 8.14966 9.61542 8.09889C9.49356 8.04812 9.38296 7.97373 9.29 7.88L3.41 2H16.59ZM18 13C18 13.2652 17.8946 13.5196 17.7071 13.7071C17.5196 13.8946 17.2652 14 17 14H3C2.73478 14 2.48043 13.8946 2.29289 13.7071C2.10536 13.5196 2 13.2652 2 13V3.41L7.88 9.29C8.4425 9.8518 9.205 10.1674 10 10.1674C10.795 10.1674 11.5575 9.8518 12.12 9.29L18 3.41V13Z"
        fill={color}
      />
    </svg>
  );
};
