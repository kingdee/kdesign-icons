import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const UniversalIconsSix = ({
  size = '1em',
  fill = 'currentColor',
  rotate = 0,
  spin = false,
}: SvgIconProps) => {
  return (
    <IconWrapper rotate={rotate} spin={spin}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 32 32"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          id="1393-通用图标6"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(4.000000, 4.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M0,0 L18,0 L18,18 L0,18 L0,0 Z M24,24 L6,24 L6,19.5 L19.5,19.5 L19.5,6 L24,6 L24,24 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
UniversalIconsSix.displayName = 'UniversalIconsSix';
export default UniversalIconsSix;
