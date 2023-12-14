import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const ReduceLine = ({
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
          id="1146-减少_线"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(4.000000, 14.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M0.923076923,0 L23.0769231,0 C23.5867243,0 24,0.413275658 24,0.923076923 C24,1.43287819 23.5867243,1.84615385 23.0769231,1.84615385 L0.923076923,1.84615385 C0.413275628,1.84615385 0,1.43287819 0,0.923076923 C0,0.413275658 0.413275628,0 0.923076923,0 Z"
              id="路径"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
ReduceLine.displayName = 'ReduceLine';
export default ReduceLine;
