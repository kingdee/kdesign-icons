import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const BankCardSolid = ({
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
          id="67.银行卡"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="银行卡"
            transform="translate(4.000000, 7.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M24,6.8 L24,16.15 C24,16.619442 23.616244,17 23.1428571,17 L0.857142857,17 C0.383755941,17 0,16.619442 0,16.15 L0,6.8 L24,6.8 Z M20.5714286,11.05 L16.2857143,11.05 L15.4285714,12.75 L19.7142857,12.75 L20.5714286,11.05 Z M23.1428571,0 C23.616244,0 24,0.380557974 24,0.85 L24,5.1 L0,5.1 L0,0.85 C0,0.380557974 0.383755941,0 0.857142857,0 L23.1428571,0 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
BankCardSolid.displayName = 'BankCardSolid';
export default BankCardSolid;
