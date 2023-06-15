import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const FlipVertically = ({
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
          id="79.垂直翻转"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="垂直翻转"
            transform="translate(4.000000, 4.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M0,12 C0,11.5266131 0.383755941,11.1428571 0.857142857,11.1428571 L23.1428571,11.1428571 C23.616244,11.1428571 24,11.5266131 24,12 C24,12.4733869 23.616244,12.8571429 23.1428571,12.8571429 L0.857142857,12.8571429 C0.383755941,12.8571429 0,12.4733869 0,12 Z M3.42857143,14.5714286 L5.14285714,14.5714286 L5.14285714,22.2857143 L18.8571429,22.2857143 L18.8571429,14.5714286 L20.5714286,14.5714286 L20.5714286,23.1428571 C20.5714286,23.616244 20.1876726,24 19.7142857,24 L4.28571429,24 C3.81232737,24 3.42857143,23.616244 3.42857143,23.1428571 L3.42857143,14.5714286 Z M3.42857143,0.857142857 C3.42857143,0.383755941 3.81232737,0 4.28571429,0 L19.7142857,0 C20.1876726,0 20.5714286,0.383755941 20.5714286,0.857142857 L20.5714286,9.42857143 L18.8571429,9.42857143 L18.8571429,1.71428571 L5.14285714,1.71428571 L5.14285714,9.42857143 L3.42857143,9.42857143 L3.42857143,0.857142857 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
FlipVertically.displayName = 'FlipVertically';
export default FlipVertically;
