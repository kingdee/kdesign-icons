import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const RateThreeFour = ({
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
          id="84.3:4比率"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="3:4比率"
            transform="translate(7.000000, 4.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M18,23.1428571 C18,23.616244 17.6162441,24 17.1428571,24 L0.857142857,24 C0.383755968,24 0,23.616244 0,23.1428571 L0,0.857142857 C0,0.383755941 0.383755968,0 0.857142857,0 L17.1428571,0 C17.6162441,0 18,0.383755941 18,0.857142857 L18,23.1428571 Z M16.2857143,22.2857143 L16.2857143,1.71428571 L1.71428571,1.71428571 L1.71428571,22.2857143 L16.2857143,22.2857143 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
RateThreeFour.displayName = 'RateThreeFour';
export default RateThreeFour;
