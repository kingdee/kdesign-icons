import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const UniversalIconsTwo = ({
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
          id="1397-通用图标2"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(4.000000, 5.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <polygon
              id="路径"
              points="12 19.1753968 4.58359213 22.8253563 5.76311383 14.6440338 -1.79306123e-16 8.71851033 8.14539236 7.31213442 12 0 15.8546076 7.31213442 24 8.71851033 18.2368861 14.6440338 19.4164078 22.8253563"
            ></polygon>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
UniversalIconsTwo.displayName = 'UniversalIconsTwo';
export default UniversalIconsTwo;
