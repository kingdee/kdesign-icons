import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const RateTwoThree = ({
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
          id="81.2:3比率"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="2:3比率"
            transform="translate(8.000000, 4.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M16,23.2 C16,23.6418278 15.6418278,24 15.2,24 L0.8,24 C0.358172237,24 0,23.6418278 0,23.2 L0,0.8 C0,0.358172211 0.358172237,0 0.8,0 L15.2,0 C15.6418278,0 16,0.358172211 16,0.8 L16,23.2 Z M14.4,22.4 L14.4,1.6 L1.6,1.6 L1.6,22.4 L14.4,22.4 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
RateTwoThree.displayName = 'RateTwoThree';
export default RateTwoThree;
