import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const RateFourThree = ({
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
          id="85.4：3比率"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="4：3比率"
            transform="translate(4.000000, 7.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M23.1428571,0 C23.616244,0 24,0.383755941 24,0.857142857 L24,17.1428571 C24,17.616244 23.616244,18 23.1428571,18 L0.857142857,18 C0.383755941,18 0,17.616244 0,17.1428571 L0,0.857142857 C0,0.383755941 0.383755941,0 0.857142857,0 L23.1428571,0 Z M22.2857143,1.71428571 L1.71428571,1.71428571 L1.71428571,16.2857143 L22.2857143,16.2857143 L22.2857143,1.71428571 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
RateFourThree.displayName = 'RateFourThree';
export default RateFourThree;
