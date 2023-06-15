import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const CadreFile = ({
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
          id="763.干部档案"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(4.000000, 2.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M21,22.4 L2.7668144,22.4 C1.8444972,22.4 1.4,22.9258666 1.4,23.8 L1.4,25.2 C1.4,25.973199 2.1341964,26.6 2.7668144,26.6 L22.4,26.6 C22.4,27.373199 21.8871632,28 21.2545452,28 L2.2909096,28 C1.025675,28 0,26.7463966 0,25.2 L0,1.4 C0,0.626801 0.626801,0 1.4,0 L21,0 C21.773199,0 22.4,0.626801 22.4,1.4 L22.4,21 C22.4,21.773199 21.773199,22.4 21,22.4 Z M22.4,23.8 L22.4,25.2 L3.5,25.2 C3.1134012,25.2 2.8,24.8865988 2.8,24.5 C2.8,24.1134012 3.1134012,23.8 3.5,23.8 L22.4,23.8 Z M4.2,9.8 L4.2,11.2 L18.2,11.2 L18.2,9.8 L4.2,9.8 Z M4.2,5.6 L4.2,7 L18.2,7 L18.2,5.6 L4.2,5.6 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
CadreFile.displayName = 'CadreFile';
export default CadreFile;
