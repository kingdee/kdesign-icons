import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const ArrowDownSolid = ({
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
          id="1018.down"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(2.000000, 7.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M17.3889821,16.9831401 C15.5180289,19.4156573 12.4878074,19.4128773 10.6168542,16.9831401 L0.953505857,4.40633115 C-0.914667331,1.97381395 0.0388794142,1.85186509e-15 3.14416137,1.85186509e-15 L24.8616749,1.85186509e-15 C27.9419366,1.85186509e-15 28.9205036,1.97381395 27.0523303,4.40633115 L17.3889821,16.9831401 L17.3889821,16.9831401 Z"
              id="路径"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
ArrowDownSolid.displayName = 'ArrowDownSolid';
export default ArrowDownSolid;
