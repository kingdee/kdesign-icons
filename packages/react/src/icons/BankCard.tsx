import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const BankCard = ({
  size = '1em',
  color = 'currentColor',
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
          id="175.银行卡"
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
              d="M22.2857143,5.1 L22.2857143,1.7 L1.71428571,1.7 L1.71428571,5.1 L22.2857143,5.1 Z M22.2857143,6.8 L1.71428571,6.8 L1.71428571,15.3 L22.2857143,15.3 L22.2857143,6.8 Z M24,0.85 L24,16.15 C24,16.619442 23.616244,17 23.1428571,17 L0.857142857,17 C0.383755941,17 0,16.619442 0,16.15 L0,0.85 C0,0.380557974 0.383755941,0 0.857142857,0 L23.1428571,0 C23.616244,0 24,0.380557974 24,0.85 Z M16.2857143,11.05 L20.5714286,11.05 L19.7142857,12.75 L15.4285714,12.75 L16.2857143,11.05 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
BankCard.displayName = 'BankCard';
export default BankCard;
