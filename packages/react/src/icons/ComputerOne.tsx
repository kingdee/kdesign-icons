import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const ComputerOne = ({
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
          id="电脑"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g id="视觉修正模版" transform="translate(-2.000000, -0.500000)"></g>
          <path
            d="M28,3 C29.6568542,3 31,4.34314575 31,6 L31,21 C31,22.6568542 29.6568542,24 28,24 L17,24 L17,27 L22,27 C22.5522847,27 23,27.4477153 23,28 C23,28.5522847 22.5522847,29 22,29 L10,29 C9.44771525,29 9,28.5522847 9,28 C9,27.4477153 9.44771525,27 10,27 L15,27 L15,24 L4,24 C2.34314575,24 1,22.6568542 1,21 L1,6 C1,4.34314575 2.34314575,3 4,3 L28,3 Z M29,19 L3,19 L3,21 C3,21.5522847 3.44771525,22 4,22 L28,22 C28.5522847,22 29,21.5522847 29,21 L29,19 Z M28,5 L4,5 C3.44771525,5 3,5.44771525 3,6 L3,17 L29,17 L29,6 C29,5.44771525 28.5522847,5 28,5 Z"
            id="形状结合"
            fill={fill}
            fillRule="nonzero"
          ></path>
        </g>
      </svg>
    </IconWrapper>
  );
};
ComputerOne.displayName = 'ComputerOne';
export default ComputerOne;
