import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const CashManagement = ({
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
          id="755.现金管理"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(2.000000, 2.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M14,28 C8.9982819,28 4.37650356,25.3316152 1.87564438,21 C-0.625214794,16.668385 -0.625214794,11.331615 1.87564438,7 C4.37650356,2.66838483 8.9982819,0 14,0 C21.7319867,0 28,6.2680135 28,14 C28,21.7319865 21.7319867,28 14,28 L14,28 Z M14.4200002,11.7894737 L14.7191581,11.564 L19.1578949,8.45010526 L17.7181055,7.36842105 L13.2808423,10.64 L14.7191581,10.64 L10.2818949,7.36842105 L8.84210547,8.45010526 L13.2808423,11.564 L13.5800002,11.7894737 L8.84210547,11.7894737 L8.84210547,13.2631579 L13.2631581,13.2631579 L13.2631581,16.2105263 L8.84210547,16.2105263 L8.84210547,17.6842105 L13.2631581,17.6842105 L13.2631581,22.1052632 L14.6587371,22.1052632 L14.6587371,17.6842105 L19.1578949,17.6842105 L19.1578949,16.2105263 L14.6587371,16.2105263 L14.6587371,13.2631579 L19.1578949,13.2631579 L19.1578949,11.7894737 L14.4200002,11.7894737 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
CashManagement.displayName = 'CashManagement';
export default CashManagement;