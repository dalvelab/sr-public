import React from "react";

interface IProps {
  color: string;
}

export const IconCall: React.FC<IProps> = (props) => {
  const { color } = props;
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19.41 13C19.19 13 18.96 12.93 18.74 12.88C18.2948 12.7805 17.8571 12.6501 17.43 12.49C16.9661 12.3212 16.4561 12.33 15.9983 12.5146C15.5405 12.6992 15.1671 13.0466 14.95 13.49L14.73 13.95C13.7588 13.3992 12.8616 12.7271 12.06 11.95C11.2828 11.1484 10.6108 10.2512 10.06 9.28L10.52 9.07C10.9634 8.85292 11.3108 8.47953 11.4954 8.02169C11.68 7.56385 11.6888 7.05391 11.52 6.59C11.3612 6.15903 11.2309 5.71808 11.13 5.27C11.08 5.05 11.04 4.82 11.01 4.6C10.8886 3.89562 10.5196 3.25774 9.96961 2.80124C9.41961 2.34474 8.72469 2.09961 8.00999 2.11H4.99999C4.57724 2.10945 4.15914 2.19825 3.77311 2.37058C3.38707 2.54292 3.04182 2.7949 2.75999 3.11C2.47231 3.43365 2.2581 3.81575 2.13209 4.23004C2.00608 4.64432 1.97125 5.08098 2.02999 5.51C2.57358 9.67214 4.4752 13.5387 7.43999 16.51C10.4113 19.4748 14.2779 21.3764 18.44 21.92C18.5698 21.9299 18.7002 21.9299 18.83 21.92C19.5674 21.9211 20.2794 21.6505 20.83 21.16C21.1451 20.8782 21.3971 20.5329 21.5694 20.1469C21.7417 19.7609 21.8305 19.3428 21.83 18.92V15.92C21.8246 15.229 21.5808 14.5611 21.1399 14.0291C20.699 13.4971 20.0879 13.1336 19.41 13ZM19.9 19C19.8997 19.1395 19.8701 19.2775 19.8133 19.4049C19.7565 19.5324 19.6736 19.6465 19.57 19.74C19.4604 19.8399 19.33 19.9141 19.1881 19.9573C19.0463 20.0006 18.8967 20.0117 18.75 19.99C15.0183 19.5026 11.5502 17.802 8.87999 15.15C6.20746 12.4775 4.49202 8.99737 3.99999 5.25C3.97826 5.10333 3.98943 4.95367 4.03266 4.81185C4.0759 4.67003 4.15014 4.5396 4.24999 4.43C4.34461 4.32515 4.46037 4.24154 4.58964 4.18466C4.71891 4.12778 4.85876 4.09892 4.99999 4.1H7.99999C8.23115 4.09435 8.45713 4.16898 8.63945 4.3112C8.82178 4.45341 8.94919 4.65442 8.99999 4.88C8.99999 5.15 9.08999 5.43 9.14999 5.7C9.26556 6.22386 9.41931 6.73857 9.60999 7.24L8.20999 7.9C7.96935 8.01046 7.78235 8.21185 7.68999 8.46C7.58997 8.70346 7.58997 8.97654 7.68999 9.22C9.12919 12.3028 11.6072 14.7808 14.69 16.22C14.9334 16.32 15.2065 16.32 15.45 16.22C15.6981 16.1276 15.8995 15.9406 16.01 15.7L16.64 14.3C17.1559 14.4881 17.6837 14.6418 18.22 14.76C18.48 14.82 18.76 14.87 19.03 14.91C19.2556 14.9608 19.4566 15.0882 19.5988 15.2705C19.741 15.4529 19.8156 15.6788 19.81 15.91L19.9 19ZM14 2C13.77 2 13.53 2 13.3 2C13.0348 2.02254 12.7894 2.14952 12.6178 2.353C12.4462 2.55647 12.3624 2.81978 12.385 3.085C12.4075 3.35022 12.5345 3.59562 12.738 3.76721C12.9415 3.93881 13.2048 4.02254 13.47 4H14C15.5913 4 17.1174 4.63214 18.2426 5.75736C19.3678 6.88258 20 8.4087 20 10C20 10.18 20 10.35 20 10.53C19.9778 10.7938 20.0612 11.0556 20.2317 11.2581C20.4023 11.4606 20.6462 11.5871 20.91 11.61H20.99C21.2403 11.611 21.4819 11.5181 21.6671 11.3496C21.8522 11.1811 21.9675 10.9493 21.99 10.7C21.99 10.47 21.99 10.23 21.99 10C21.99 7.88 21.1485 5.84668 19.6504 4.34668C18.1523 2.84667 16.12 2.00265 14 2ZM16 10C16 10.2652 16.1053 10.5196 16.2929 10.7071C16.4804 10.8946 16.7348 11 17 11C17.2652 11 17.5196 10.8946 17.7071 10.7071C17.8946 10.5196 18 10.2652 18 10C18 8.93913 17.5786 7.92172 16.8284 7.17157C16.0783 6.42143 15.0609 6 14 6C13.7348 6 13.4804 6.10536 13.2929 6.29289C13.1053 6.48043 13 6.73478 13 7C13 7.26522 13.1053 7.51957 13.2929 7.70711C13.4804 7.89464 13.7348 8 14 8C14.5304 8 15.0391 8.21071 15.4142 8.58579C15.7893 8.96086 16 9.46957 16 10Z" />
    </svg>
  );
};
