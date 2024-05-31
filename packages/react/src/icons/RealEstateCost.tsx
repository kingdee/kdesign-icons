import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const RealEstateCost = ({
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
          id="1861.地产成本"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <path
            d="M25.5,18 C29.0898509,18 32,20.9101491 32,24.5 C32,28.0898509 29.0898509,31 25.5,31 C21.9101491,31 19,28.0898509 19,24.5 C19,20.9101491 21.9101491,18 25.5,18 Z M26,3.00010932 C26.5522847,3.00010932 27,3.44782457 27,4.00010932 L27.0008352,16.1320819 C26.5136592,16.0452895 26.0121186,16 25.5,16 C20.8055796,16 17,19.8055796 17,24.5 C17,26.1529768 17.4718353,27.6957506 18.2881696,29.0009852 L5,29.0001093 C4.44771525,29.0001093 4,28.5523941 4,28.0001093 L4,4.00010932 C4,3.44782457 4.44771525,3.00010932 5,3.00010932 L26,3.00010932 Z M24.6923077,21 L23.6800863,21 L21,27 L22.1139526,27 L22.830574,25.2914429 L25.3917847,25.2914429 L26.1877441,27 L27.372394,27 L24.6923077,21 Z M29.08555,21 L28.08555,21 L28.08555,27 L29.08555,27 L29.08555,21 Z M24.2061462,22.0462646 L25.0978394,24.3704834 L23.1878662,24.3704834 L24.2061462,22.0462646 Z M10,13 L8,13 L8,15 L10,15 L10,13 Z M21,13 L13,13 C12.4477153,13 12,13.4477153 12,14 C12,14.5522847 12.4477153,15 13,15 L21,15 C21.5522847,15 22,14.5522847 22,14 C22,13.4477153 21.5522847,13 21,13 Z M10,8 L8,8 L8,10 L10,10 L10,8 Z M21,8 L13,8 C12.4477153,8 12,8.44771525 12,9 C12,9.55228475 12.4477153,10 13,10 L21,10 C21.5522847,10 22,9.55228475 22,9 C22,8.44771525 21.5522847,8 21,8 Z"
            id="形状结合"
            fill={fill}
          ></path>
        </g>
      </svg>
    </IconWrapper>
  );
};
RealEstateCost.displayName = 'RealEstateCost';
export default RealEstateCost;