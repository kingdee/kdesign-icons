import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const BoxDiagram = ({
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
          id="箱图"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g id="视觉修正模版" transform="translate(-2.000000, -0.500000)"></g>
          <path
            d="M23,1 C23.5522847,1 24,1.44771525 24,2 C24,2.55228475 23.5522847,3 23,3 L17,3 L17,7 L21,7 C22.6568542,7 24,8.34314575 24,10 L24,22 C24,23.6568542 22.6568542,25 21,25 L17,25 L17,29 L23,29 C23.5522847,29 24,29.4477153 24,30 C24,30.5522847 23.5522847,31 23,31 L9,31 C8.44771525,31 8,30.5522847 8,30 C8,29.4477153 8.44771525,29 9,29 L15,29 L15,25 L11,25 C9.40231912,25 8.09633912,23.75108 8.00509269,22.1762728 L8,22 L8,10 C8,8.34314575 9.34314575,7 11,7 L15,7 L15,3 L9,3 C8.44771525,3 8,2.55228475 8,2 C8,1.44771525 8.44771525,1 9,1 L23,1 Z M22,14 L10,14 L10,22 C10,22.5128358 10.3860402,22.9355072 10.8833789,22.9932723 L11,23 L21,23 C21.5522847,23 22,22.5522847 22,22 L22,14 Z M21,9 L11,9 C10.4477153,9 10,9.44771525 10,10 L10,12 L22,12 L22,10 C22,9.48716416 21.6139598,9.06449284 21.1166211,9.00672773 L21,9 Z"
            id="形状结合"
            fill={fill}
          ></path>
        </g>
      </svg>
    </IconWrapper>
  );
};
BoxDiagram.displayName = 'BoxDiagram';
export default BoxDiagram;
