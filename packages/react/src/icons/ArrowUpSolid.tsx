import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const ArrowUpSolid = ({
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
          id="1019.up"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(2.000000, 6.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M17.4257348,1.82417943 C15.5577751,-0.608059811 12.5278999,-0.608059811 10.6571605,1.82417943 L0.997696114,14.3995512 C-0.8702636,16.8317904 -0.0724891372,19.5419998 3.03243793,19.5419998 L24.7474698,19.5419998 C27.8273796,19.5419998 28.961498,16.8317904 27.0935383,14.3995512 L17.4312942,1.82417943 L17.4257348,1.82417943 Z"
              id="路径"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
ArrowUpSolid.displayName = 'ArrowUpSolid';
export default ArrowUpSolid;
