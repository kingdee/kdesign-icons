import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const LaborContractFiles = ({
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
          id="928.劳动合同档案"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(2.000000, 4.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M1.4,0 L26.6,0 C27.3731987,0 28,0.626801349 28,1.4 L28,2.8 C28,3.57319864 27.3731987,4.19999999 26.6,4.19999999 L1.4,4.19999999 C0.626801349,4.19999999 0,3.57319864 0,2.8 L0,1.4 C0,0.626801349 0.626801349,0 1.4,0 Z M3.49999999,5.59999999 L24.5,5.59999999 C24.6856516,5.59999999 24.8636993,5.67374978 24.9949748,5.80502525 C25.1262502,5.93630072 25.2,6.11434847 25.2,6.30000001 L25.2,23.1 C25.2,23.4865993 24.8865993,23.8 24.5,23.8 L3.49999999,23.8 C3.11340067,23.8 2.8,23.4865993 2.8,23.1 L2.8,6.30000001 C2.8,6.11434847 2.87374977,5.93630072 3.00502524,5.80502525 C3.13630071,5.67374978 3.31434845,5.59999999 3.49999999,5.59999999 Z M10.0632,8.40000001 L10.0632,11.2 L17.9382,11.2 L17.9382,8.40000001 L10.0604,8.40000001 L10.0632,8.40000001 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
LaborContractFiles.displayName = 'LaborContractFiles';
export default LaborContractFiles;
