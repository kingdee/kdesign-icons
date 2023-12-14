import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const DividingLine = ({
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
          id="1046.分割线"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(2.000000, 14.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <polygon
              id="路径"
              points="-6.66133815e-16 0 28 0 28 4.00000001 -6.66133815e-16 4.00000001"
            ></polygon>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
DividingLine.displayName = 'DividingLine';
export default DividingLine;
