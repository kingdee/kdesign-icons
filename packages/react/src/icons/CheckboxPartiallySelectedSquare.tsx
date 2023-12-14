import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const CheckboxPartiallySelectedSquare = ({
  size = '1em',
  fill = 'currentColor',
  rotate = 0,
  spin = false,
  ...restProps
}: SvgIconProps) => {
  return (
    <IconWrapper rotate={rotate} spin={spin} {...restProps}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 32 32"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          id="1211-复选框_部分已选_方"
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
              d="M22.1538461,0 C23.1734488,0 24,0.82655124 24,1.84615385 L24,22.1538461 C24,23.1734488 23.1734488,24 22.1538461,24 L1.84615385,24 C0.82655124,24 0,23.1734488 0,22.1538461 L0,1.84615385 C0,0.82655124 0.82655124,0 1.84615385,0 L22.1538461,0 Z M22.1538461,1.84615385 L1.84615385,1.84615385 L1.84615385,22.1538461 L22.1538461,22.1538461 L22.1538461,1.84615385 Z M16.7884615,6.46153846 C17.2026751,6.46153846 17.5384615,6.7973249 17.5384615,7.21153846 L17.5384615,16.7884615 C17.5384615,17.2026751 17.2026751,17.5384615 16.7884615,17.5384615 L7.21153846,17.5384615 C6.7973249,17.5384615 6.46153846,17.2026751 6.46153846,16.7884615 L6.46153846,7.21153846 C6.46153846,6.7973249 6.7973249,6.46153846 7.21153846,6.46153846 L16.7884615,6.46153846 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
CheckboxPartiallySelectedSquare.displayName = 'CheckboxPartiallySelectedSquare';
export default CheckboxPartiallySelectedSquare;
