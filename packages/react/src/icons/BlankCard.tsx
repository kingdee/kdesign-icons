import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const BlankCard = ({
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
          id="1443-空白卡片"
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
              d="M21,4.09272615e-16 L3,4.09272615e-16 C1.34314574,4.09272615e-16 4.09272615e-16,1.3431456 4.09272615e-16,3 L4.09272615e-16,21 C4.09272615e-16,22.6568544 1.34314574,24 3,24 L21,24 C22.6568544,24 24,22.6568544 24,21 L24,3 C24,1.3431456 22.6568544,4.09272615e-16 21,4.09272615e-16 Z M3.00000001,1.20000001 L21,1.20000001 C21.9941124,1.20000001 22.8,2.0058876 22.8,3.00000001 L22.8,21 C22.8,21.9941124 21.9941124,22.8 21,22.8 L3.00000001,22.8 C2.00588748,22.8 1.20000001,21.9941124 1.20000001,21 L1.20000001,3.00000001 C1.20000001,2.0058876 2.00588748,1.20000001 3.00000001,1.20000001 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
BlankCard.displayName = 'BlankCard';
export default BlankCard;
