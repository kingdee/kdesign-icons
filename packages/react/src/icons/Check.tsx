import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const Check = ({
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
          id="1379-勾选"
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
              d="M6.63592124,13.3252668 L2.89209913,8.44900346 C1.72430931,6.92797746 -0.684801347,8.38243927 0.185617767,10.082998 L4.97746966,19.444954 C5.47942652,20.4256392 6.83300381,20.6080433 7.58801826,19.7967438 L23.5608578,2.63315793 C24.9234467,1.1689906 22.8160787,-0.899935939 21.3104369,0.423787938 L6.63592124,13.3252668 Z"
              id="路径"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
Check.displayName = 'Check';
export default Check;
