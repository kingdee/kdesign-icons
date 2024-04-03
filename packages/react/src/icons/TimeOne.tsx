import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const TimeOne = ({
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
          id="时间"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g id="视觉修正模版" transform="translate(-2.000000, -0.500000)"></g>
          <path
            d="M16,1 C24.2842712,1 31,7.71572875 31,16 C31,24.2842712 24.2842712,31 16,31 C7.71572875,31 1,24.2842712 1,16 C1,7.71572875 7.71572875,1 16,1 Z M16,3 C8.82029825,3 3,8.82029825 3,16 C3,23.1797017 8.82029825,29 16,29 C23.1797017,29 29,23.1797017 29,16 C29,8.82029825 23.1797017,3 16,3 Z M16,6.5 C16.5522847,6.5 17,6.94771525 17,7.5 L17,14.999 L23.5,15 C24.0522847,15 24.5,15.4477153 24.5,16 C24.5,16.5522847 24.0522847,17 23.5,17 L16.0173091,16.9998532 C16.0115512,16.9999509 16.0057813,17 16,17 C15.4477153,17 15,16.5522847 15,16 L15,7.5 C15,6.94771525 15.4477153,6.5 16,6.5 Z"
            id="形状结合"
            fill={fill}
            fillRule="nonzero"
          ></path>
        </g>
      </svg>
    </IconWrapper>
  );
};
TimeOne.displayName = 'TimeOne';
export default TimeOne;
