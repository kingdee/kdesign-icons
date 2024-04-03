import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const IntelligentAccountingOne = ({
  size = '1em',
  fill = 'currentColor',
  rotate = 0,
  spin = false,
  ...restProps
}: SvgIconProps) => {
  return (
    <IconWrapper rotate={rotate} spin={spin} {...restProps}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 32 32"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          id="1785.智能核算"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <rect
            id="Rectangle-13"
            fill="#FFFFFF"
            opacity="0.5"
            transform="translate(10.000000, 32.000000) scale(-1, 1) translate(-10.000000, -32.000000) "
            x="1"
            y="28"
            width="18"
            height="8"
          ></rect>
          <rect
            id="Rectangle-13备份"
            fill="#FFFFFF"
            opacity="0.5"
            transform="translate(10.000000, 32.000000) scale(-1, 1) translate(-10.000000, -32.000000) "
            x="1"
            y="28"
            width="18"
            height="8"
          ></rect>
          <path
            d="M11.9932432,23 L3,23 C2.44771525,23 2,22.5522847 2,22 L2,6 C2,5.44771525 2.44771525,5 3,5 L28.9983108,5 C29.5505956,5 29.9983108,5.44771525 29.9983108,6 L29.9983108,22 C29.9983108,22.5522847 29.5505956,23 28.9983108,23 L20,23 L20,26 L21.881966,26 C22.2607381,26 22.6070012,26.2140024 22.7763932,26.5527864 L23.5,28 L8.5,28 L9.2236068,26.5527864 C9.39299881,26.2140024 9.73926193,26 10.118034,26 L11.9932432,26 L11.9932432,23 Z M25.2317787,9.3598156 L20.932,14.517 L16.7071068,10.2928932 L16.6128392,10.209611 C16.188133,9.87912062 15.5648618,9.94314165 15.2191312,10.375305 L11.917,14.502 L9.70710678,12.2928932 C9.27679741,11.8625838 8.56512961,11.9131605 8.2,12.4 L5.2,16.4 C4.86862915,16.8418278 4.9581722,17.4686292 5.4,17.8 L5.50502515,17.8690296 C5.93651067,18.1155105 6.49411922,18.007841 6.8,17.6 L9.108,14.523 L11.2928932,16.7071068 L11.3871608,16.790389 C11.811867,17.1208794 12.4351382,17.0568583 12.7808688,16.624695 L16.082,12.497 L20.2928932,16.7071068 C20.7086942,17.1229077 21.3917728,17.0919226 21.7682213,16.6401844 L26.7682213,10.6401844 C27.1217854,10.2159075 27.0644613,9.5853428 26.6401844,9.23177872 C26.2159075,8.87821464 25.5853428,8.9355387 25.2317787,9.3598156 Z"
            id="形状结合"
            fill={fill}
          ></path>
        </g>
      </svg>
    </IconWrapper>
  );
};
IntelligentAccountingOne.displayName = 'IntelligentAccountingOne';
export default IntelligentAccountingOne;
