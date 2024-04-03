import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const Consumption = ({
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
          id="1811.消费税"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <path
            d="M29,8 C29.5522847,8 30,8.44771525 30,9 L30,14 L20,14 C17.790861,14 16,15.790861 16,18 C16,20.209139 17.790861,22 20,22 L30,22 L30,27 C30,27.5522847 29.5522847,28 29,28 L3,28 C2.44771525,28 2,27.5522847 2,27 L2,9 C2,8.44771525 2.44771525,8 3,8 L29,8 Z M21,16 C22.1045695,16 23,16.8954305 23,18 C23,19.1045695 22.1045695,20 21,20 C19.8954305,20 19,19.1045695 19,18 C19,16.8954305 19.8954305,16 21,16 Z M24.9223804,2.74142915 L26.0621778,6.998 L5.17217777,6.998 L23.6976356,2.03432237 C24.2311017,1.89138056 24.7794386,2.20796305 24.9223804,2.74142915 Z"
            id="形状结合"
            fill={fill}
          ></path>
        </g>
      </svg>
    </IconWrapper>
  );
};
Consumption.displayName = 'Consumption';
export default Consumption;
