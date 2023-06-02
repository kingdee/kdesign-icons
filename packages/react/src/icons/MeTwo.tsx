import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const MeTwo = ({
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
          id="186.我的"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="我的"
            transform="translate(5.000000, 4.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M11,0 C14.7385429,0 17.7692308,3.07004744 17.7692308,6.85714286 C17.7692308,9.28070718 16.5280421,11.4106114 14.6544483,12.6301659 C18.9330561,14.1556654 22,18.2864482 22,23.1428571 C22,23.616244 21.621164,24 21.1538462,24 C20.6865283,24 20.3076923,23.616244 20.3076923,23.1428571 C20.3076923,17.935601 16.1404965,13.7142857 11,13.7142857 C5.85950348,13.7142857 1.69230769,17.935601 1.69230769,23.1428571 C1.69230769,23.616244 1.3134717,24 0.846153846,24 C0.378835993,24 0,23.616244 0,23.1428571 C0,18.2864482 3.06694391,14.1556654 7.3458561,12.6295748 C5.47195787,11.4106114 4.23076923,9.28070718 4.23076923,6.85714286 C4.23076923,3.07004744 7.26145709,0 11,0 Z M11,1.71428571 C8.1960928,1.71428571 5.92307692,4.01682128 5.92307692,6.85714286 C5.92307692,9.69746444 8.1960928,12 11,12 C13.8039072,12 16.0769231,9.69746444 16.0769231,6.85714286 C16.0769231,4.01682128 13.8039072,1.71428571 11,1.71428571 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
MeTwo.displayName = 'MeTwo';
export default MeTwo;