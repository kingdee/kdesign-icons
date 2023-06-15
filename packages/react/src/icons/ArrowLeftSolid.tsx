import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const ArrowLeftSolid = ({
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
          id="1021.left"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(6.000000, 2.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M1.82417943,10.5687058 C-0.60805981,12.4394452 -0.60805981,15.4693203 1.82417943,17.3400598 L14.3995511,27.0023039 C16.8317904,28.8702636 19.5419998,28.0724891 19.5419998,24.967562 L19.5419998,3.2525302 C19.5419998,0.172620401 16.8317903,-0.961498021 14.3995511,0.906461739 L1.82417943,10.5687058 Z"
              id="路径"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
ArrowLeftSolid.displayName = 'ArrowLeftSolid';
export default ArrowLeftSolid;
