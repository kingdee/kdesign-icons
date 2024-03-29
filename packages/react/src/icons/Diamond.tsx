import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const Diamond = ({
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
          id="1189-菱形"
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
              d="M10.8364999,0.481937481 L0.481937481,10.8364999 C-0.160645827,11.4790833 -0.160645827,12.5209167 0.481937481,13.1635 L10.8364999,23.5180625 C11.4790833,24.1606458 12.5209167,24.1606458 13.1635,23.5180625 L23.5180625,13.1635 C24.1606458,12.5209167 24.1606458,11.4790833 23.5180625,10.8364999 L13.1635,0.481937481 C12.5209167,-0.160645827 11.4790833,-0.160645827 10.8364999,0.481937481 Z M1.64608451,12 L12,1.64608451 L22.3545625,12 L12,22.3539155 L1.64608451,12 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
Diamond.displayName = 'Diamond';
export default Diamond;
