import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const UniversalIconsFive = ({
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
          id="1394-通用图标5"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(4.000000, 6.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M8.57142859,15.8333333 L1.71428573,15.8333333 C0.767511867,15.8333333 0,15.0871412 0,14.1666667 L0,1.66666667 C0,0.74619208 0.767511867,0 1.71428573,0 L22.2857143,0 C23.2324881,0 24,0.74619208 24,1.66666667 L24,14.1666667 C24,15.0871412 23.2324881,15.8333333 22.2857143,15.8333333 L16.2857143,15.8333333 L16.2857143,18.3333333 L17.1428572,18.3333333 C17.6162441,18.3333333 18,18.7064293 18,19.1666667 C18,19.626904 17.6162441,20 17.1428572,20 L7.71428573,20 C7.2408988,20 6.85714285,19.626904 6.85714285,19.1666667 C6.85714285,18.7064293 7.2408988,18.3333333 7.71428573,18.3333333 L8.57142859,18.3333333 L8.57142859,15.8333333 Z"
              id="路径"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
UniversalIconsFive.displayName = 'UniversalIconsFive';
export default UniversalIconsFive;
