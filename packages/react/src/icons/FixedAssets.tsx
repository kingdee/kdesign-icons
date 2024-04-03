import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const FixedAssets = ({
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
          id="1710.固定资产"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
          opacity="0.900000036"
        >
          <path
            d="M11.9932432,22 L3,22 C2.44771525,22 2,21.5522847 2,21 L2,5 C2,4.44771525 2.44771525,4 3,4 L28.9983108,4 C29.5505956,4 29.9983108,4.44771525 29.9983108,5 L29.9983108,21 C29.9983108,21.5522847 29.5505956,22 28.9983108,22 L20,22 L20,25 L21.881966,25 C22.2607381,25 22.6070012,25.2140024 22.7763932,25.5527864 L23.5,27 L8.5,27 L9.2236068,25.5527864 C9.39299881,25.2140024 9.73926193,25 10.118034,25 L11.9932432,25 L11.9932432,22 Z M11,16 L9,16 L9,18 L11,18 L11,16 Z M22,16 L14,16 C13.4477153,16 13,16.4477153 13,17 C13,17.5522847 13.4477153,18 14,18 L22,18 C22.5522847,18 23,17.5522847 23,17 C23,16.4477153 22.5522847,16 22,16 Z M11,12 L9,12 L9,14 L11,14 L11,12 Z M22,12 L14,12 C13.4477153,12 13,12.4477153 13,13 C13,13.5522847 13.4477153,14 14,14 L22,14 C22.5522847,14 23,13.5522847 23,13 C23,12.4477153 22.5522847,12 22,12 Z M11,8 L9,8 L9,10 L11,10 L11,8 Z M22,8 L14,8 C13.4477153,8 13,8.44771525 13,9 C13,9.55228475 13.4477153,10 14,10 L22,10 C22.5522847,10 23,9.55228475 23,9 C23,8.44771525 22.5522847,8 22,8 Z"
            id="形状结合"
            fill={fill}
          ></path>
        </g>
      </svg>
    </IconWrapper>
  );
};
FixedAssets.displayName = 'FixedAssets';
export default FixedAssets;
