import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const CustomizeOne = ({
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
          id="1041.自定义"
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
              d="M2,25.996 C2,25.992 8.66600001,25.994 21.996,26 C21.992,26 21.994,19.334 22,6.00399998 C22,6.00799999 15.334,6.00599999 2.00399998,5.99999997 C2.00799998,5.99999997 2.00599998,12.666 2,25.996 Z M0,6.00399998 C0,4.90000001 0.911999988,4.00000001 2.00399998,4.00000001 L21.996,4.00000001 C23.1,4.00000001 24,4.91199999 24,6.00399998 L24,25.996 C24,27.1 23.088,28 21.996,28 L2.00399998,28 C0.89949531,27.9945293 0.00547066423,27.1005047 0,25.996 L0,6.00399998 Z M4.00000001,1.98400001 C4.01199999,0.886000008 4.91999998,0 6.00399998,0 L25.996,0 C27.1,0 28,0.911999988 28,2.00399998 L28,21.996 C28,23.084 27.118,23.972 26.046,24 L26.046,1.98 L4.00000001,1.98 L4.00000001,1.98400001 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
CustomizeOne.displayName = 'CustomizeOne';
export default CustomizeOne;
