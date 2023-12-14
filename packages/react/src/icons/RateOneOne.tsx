import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const RateOneOne = ({
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
          id="82.1:1比率"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="1:1比率"
            transform="translate(4.000000, 4.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M23,0 C23.5522847,0 24,0.447715264 24,1 L24,23 C24,23.5522847 23.5522847,24 23,24 L1,24 C0.447715264,24 0,23.5522847 0,23 L0,1 C0,0.447715264 0.447715264,0 1,0 L23,0 Z M22,2 L2,2 L2,22 L22,22 L22,2 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
RateOneOne.displayName = 'RateOneOne';
export default RateOneOne;
