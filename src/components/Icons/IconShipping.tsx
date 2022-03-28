import React from "react";

interface IProps {
  color: string;
}

export const IconShipping: React.FC<IProps> = (props) => {
  const { color } = props;
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1 12.5V17.5C1 17.7652 1.10536 18.0196 1.29289 18.2071C1.48043 18.3946 1.73478 18.5 2 18.5H3C3 19.2956 3.31607 20.0587 3.87868 20.6213C4.44129 21.1839 5.20435 21.5 6 21.5C6.79565 21.5 7.55871 21.1839 8.12132 20.6213C8.68393 20.0587 9 19.2956 9 18.5H15C15 19.2956 15.3161 20.0587 15.8787 20.6213C16.4413 21.1839 17.2044 21.5 18 21.5C18.7956 21.5 19.5587 21.1839 20.1213 20.6213C20.6839 20.0587 21 19.2956 21 18.5H22C22.2652 18.5 22.5196 18.3946 22.7071 18.2071C22.8946 18.0196 23 17.7652 23 17.5V5.5C23 4.70435 22.6839 3.94129 22.1213 3.37868C21.5587 2.81607 20.7956 2.5 20 2.5H11C10.2044 2.5 9.44129 2.81607 8.87868 3.37868C8.31607 3.94129 8 4.70435 8 5.5V7.5H6C5.53426 7.5 5.07493 7.60844 4.65836 7.81672C4.24179 8.025 3.87944 8.32741 3.6 8.7L1.2 11.9C1.17075 11.9435 1.14722 11.9905 1.13 12.04L1.07 12.15C1.02587 12.2615 1.00216 12.3801 1 12.5ZM17 18.5C17 18.3022 17.0586 18.1089 17.1685 17.9444C17.2784 17.78 17.4346 17.6518 17.6173 17.5761C17.8 17.5004 18.0011 17.4806 18.1951 17.5192C18.3891 17.5578 18.5673 17.653 18.7071 17.7929C18.847 17.9327 18.9422 18.1109 18.9808 18.3049C19.0194 18.4989 18.9996 18.7 18.9239 18.8827C18.8482 19.0654 18.72 19.2216 18.5556 19.3315C18.3911 19.4414 18.1978 19.5 18 19.5C17.7348 19.5 17.4804 19.3946 17.2929 19.2071C17.1054 19.0196 17 18.7652 17 18.5ZM10 5.5C10 5.23478 10.1054 4.98043 10.2929 4.79289C10.4804 4.60536 10.7348 4.5 11 4.5H20C20.2652 4.5 20.5196 4.60536 20.7071 4.79289C20.8946 4.98043 21 5.23478 21 5.5V16.5H20.22C19.9388 16.1906 19.5961 15.9435 19.2138 15.7743C18.8315 15.6052 18.418 15.5178 18 15.5178C17.582 15.5178 17.1685 15.6052 16.7862 15.7743C16.4039 15.9435 16.0612 16.1906 15.78 16.5H10V5.5ZM8 11.5H4L5.2 9.9C5.29315 9.7758 5.41393 9.675 5.55279 9.60557C5.69164 9.53615 5.84475 9.5 6 9.5H8V11.5ZM5 18.5C5 18.3022 5.05865 18.1089 5.16853 17.9444C5.27841 17.78 5.43459 17.6518 5.61732 17.5761C5.80004 17.5004 6.00111 17.4806 6.19509 17.5192C6.38907 17.5578 6.56725 17.653 6.70711 17.7929C6.84696 17.9327 6.9422 18.1109 6.98079 18.3049C7.01937 18.4989 6.99957 18.7 6.92388 18.8827C6.84819 19.0654 6.72002 19.2216 6.55557 19.3315C6.39112 19.4414 6.19778 19.5 6 19.5C5.73478 19.5 5.48043 19.3946 5.29289 19.2071C5.10536 19.0196 5 18.7652 5 18.5ZM3 13.5H8V16.28C7.40983 15.7526 6.63513 15.4797 5.84469 15.5209C5.05425 15.5621 4.31212 15.914 3.78 16.5H3V13.5Z" />
    </svg>
  );
};
