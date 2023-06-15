import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const SortDownOne = ({
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
          id="1011.排序向下"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(1.000000, 1.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M14,26.25 C20.7654882,26.25 26.25,20.7654882 26.25,14 C26.25,7.23451181 20.7654882,1.75 14,1.75 C7.23451181,1.75 1.75,7.23451181 1.75,14 C1.75,20.7654882 7.23451181,26.25 14,26.25 Z M13.125,17.3495 L10.28825,14.51275 L9.051,15.75 L14,20.699 L15.23725,19.46175 L18.949,15.75 L17.71175,14.51275 L14.875,17.3495 L14.875,7 L13.125,7 L13.125,17.3495 Z M14,28 C6.2680135,28 0,21.7319865 0,14 C0,6.2680135 6.2680135,0 14,0 C21.7319865,0 28,6.2680135 28,14 C28,21.7319865 21.7319865,28 14,28 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
SortDownOne.displayName = 'SortDownOne';
export default SortDownOne;
