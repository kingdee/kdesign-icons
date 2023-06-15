import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const AccountVersioning = ({
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
          id="441.科目版本化"
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
              d="M18,4.80000001 C18.6627416,4.80000001 19.2,5.3372583 19.2,6.00000001 L19.2,22.8 C19.2,23.4627416 18.6627416,24 18,24 L1.20000001,24 C0.537258297,24 4.09272615e-16,23.4627416 4.09272615e-16,22.8 L4.09272615e-16,6.00000001 C4.09272615e-16,5.3372583 0.537258297,4.80000001 1.20000001,4.80000001 L18,4.80000001 Z M13.2,19.2 L6.00000001,19.2 L6.00000001,20.4 L13.2,20.4 L13.2,19.2 Z M22.8,4.09272615e-16 C23.4627416,4.09272615e-16 24,0.537258297 24,1.20000001 L24,18 C24,18.6627416 23.4627416,19.2 22.8,19.2 L20.3988,19.2 L20.4,4.80000001 C20.4,4.184597 19.9367517,3.67739141 19.3399453,3.60807327 L19.2,3.6 L4.7988,3.59880002 L4.80000001,1.20000001 C4.80000001,0.537258297 5.3372583,4.09272615e-16 6.00000001,4.09272615e-16 L22.8,4.09272615e-16 Z M7.2696,9.60000001 L5.9292,9.60000001 L9.06334369,15.8683282 L9.12127449,15.9625308 C9.35763485,16.2791564 9.8423652,16.2791564 10.0787255,15.9625308 L10.1366563,15.8683282 L13.2708,9.60000001 L11.928,9.60000001 L9.60000001,14.2572 L7.2696,9.60000001 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
AccountVersioning.displayName = 'AccountVersioning';
export default AccountVersioning;
