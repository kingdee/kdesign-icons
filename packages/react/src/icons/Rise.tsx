import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const Rise = ({
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
          id="980.上升"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(5.000000, 2.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <polygon
              id="路径"
              points="10.5 0 21 10.5 12.25 10.5 12.25 28 8.75 28 8.75 10.5 0 10.5"
            ></polygon>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
Rise.displayName = 'Rise';
export default Rise;
