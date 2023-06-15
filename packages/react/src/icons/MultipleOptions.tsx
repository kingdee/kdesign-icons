import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const MultipleOptions = ({
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
          id="1216-多选项"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(4.000000, 6.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M15.4248,15.5436 L13.0956,13.2132 C12.6704792,12.7965398 11.9891743,12.799751 11.568,13.2204 C11.3634696,13.4217225 11.2476954,13.6963149 11.2463318,13.9833021 C11.2449922,14.2702892 11.3581749,14.54596 11.5608,14.7492 L14.6448,17.8332 C15.0168,18.2052 15.6132,18.2448 16.0368,17.9412 C16.1271597,17.891109 16.2099801,17.8284888 16.2828,17.7552 L21.4452,12.594 C21.649505,12.3906427 21.7643623,12.1142616 21.7643623,11.826 C21.7643623,11.5377384 21.649505,11.2613573 21.4452,11.058 C21.2418427,10.853695 20.9654616,10.7388377 20.6772,10.7388377 C20.3889384,10.7388377 20.1125573,10.853695 19.9092,11.058 L15.4248,15.5436 L15.4248,15.5436 Z M24,4.26325641e-16 L24,18 C24,19.3254834 22.9254834,20.4 21.6,20.4 L0,20.4 L24,4.26325641e-16 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
MultipleOptions.displayName = 'MultipleOptions';
export default MultipleOptions;
