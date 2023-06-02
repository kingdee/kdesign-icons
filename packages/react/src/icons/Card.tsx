import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const Card = ({
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
          id="1441-卡片-"
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
              d="M21,4.09272615e-16 C22.6568543,4.09272615e-16 24,1.3431456 24,3 L24,3 L24,21 C24,22.6568544 22.6568543,24 21,24 L21,24 L3,24 C1.34314571,24 4.09272615e-16,22.6568544 4.09272615e-16,21 L4.09272615e-16,21 L4.09272615e-16,3 C4.09272615e-16,1.3431456 1.34314571,4.09272615e-16 3,4.09272615e-16 L3,4.09272615e-16 L21,4.09272615e-16 Z M21,1.20000001 L3.00000001,1.20000001 C2.00588748,1.20000001 1.20000001,2.0058876 1.20000001,3.00000001 L1.20000001,3.00000001 L1.20000001,21 C1.20000001,21.9941124 2.00588748,22.8 3.00000001,22.8 L3.00000001,22.8 L21,22.8 C21.9941125,22.8 22.8,21.9941124 22.8,21 L22.8,21 L22.8,3.00000001 C22.8,2.0058876 21.9941125,1.20000001 21,1.20000001 L21,1.20000001 Z M10.2,13.2 C10.5313709,13.2 10.8,13.4686296 10.8,13.8 L10.8,13.8 L10.8,19.8 C10.8,20.1313704 10.5313709,20.4 10.2,20.4 L10.2,20.4 L4.20000002,20.4 C3.86862912,20.4 3.6,20.1313704 3.6,19.8 L3.6,19.8 L3.6,13.8 C3.6,13.4686296 3.86862912,13.2 4.20000002,13.2 L4.20000002,13.2 L10.2,13.2 Z M19.8,13.2 C20.1313709,13.2 20.4,13.4686296 20.4,13.8 L20.4,13.8 L20.4,19.8 C20.4,20.1313704 20.1313709,20.4 19.8,20.4 L19.8,20.4 L13.8,20.4 C13.4686291,20.4 13.2,20.1313704 13.2,19.8 L13.2,19.8 L13.2,13.8 C13.2,13.4686296 13.4686291,13.2 13.8,13.2 L13.8,13.2 L19.8,13.2 Z M9.60000001,14.4 L4.80000001,14.4 L4.80000001,19.2 L9.60000001,19.2 L9.60000001,14.4 Z M19.2,14.4 L14.4,14.4 L14.4,19.2 L19.2,19.2 L19.2,14.4 Z M10.2,3.6 C10.5313709,3.6 10.8,3.86862961 10.8,4.20000002 L10.8,4.20000002 L10.8,10.2 C10.8,10.5313704 10.5313709,10.8 10.2,10.8 L10.2,10.8 L4.20000002,10.8 C3.86862912,10.8 3.6,10.5313704 3.6,10.2 L3.6,10.2 L3.6,4.20000002 C3.6,3.86862961 3.86862912,3.6 4.20000002,3.6 L4.20000002,3.6 L10.2,3.6 Z M19.8,3.6 C20.1313709,3.6 20.4,3.86862961 20.4,4.20000002 L20.4,4.20000002 L20.4,10.2 C20.4,10.5313704 20.1313709,10.8 19.8,10.8 L19.8,10.8 L13.8,10.8 C13.4686291,10.8 13.2,10.5313704 13.2,10.2 L13.2,10.2 L13.2,4.20000002 C13.2,3.86862961 13.4686291,3.6 13.8,3.6 L13.8,3.6 L19.8,3.6 Z M9.60000001,4.80000001 L4.80000001,4.80000001 L4.80000001,9.60000001 L9.60000001,9.60000001 L9.60000001,4.80000001 Z M19.2,4.80000001 L14.4,4.80000001 L14.4,9.60000001 L19.2,9.60000001 L19.2,4.80000001 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
Card.displayName = 'Card';
export default Card;