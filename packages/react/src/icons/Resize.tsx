import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const Resize = ({
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
          id="78.切换比率"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="切换比率"
            transform="translate(4.000000, 6.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M23.1428571,0 C23.616244,0 24,0.391750856 24,0.875 L24,20.125 C24,20.6082491 23.616244,21 23.1428571,21 L0.857142857,21 C0.383755941,21 0,20.6082491 0,20.125 L0,0.875 C0,0.391750856 0.383755941,0 0.857142857,0 L23.1428571,0 Z M22.2857143,1.75 L1.71428571,1.75 L1.71428571,19.25 L22.2857143,19.25 L22.2857143,1.75 Z M18,15.75 L18,18.375 L16.2857143,18.375 L16.2857143,15.75 L18,15.75 Z M18,11.375 L18,14 L16.2857143,14 L16.2857143,11.375 L18,11.375 Z M18,7 L18,9.625 L16.2857143,9.625 L16.2857143,8.75 L15.4285714,8.75 L15.4285714,7 L18,7 Z M5.14285714,7 L5.14285714,8.75 L2.57142857,8.75 L2.57142857,7 L5.14285714,7 Z M9.42857143,7 L9.42857143,8.75 L6.85714286,8.75 L6.85714286,7 L9.42857143,7 Z M13.7142857,7 L13.7142857,8.75 L11.1428571,8.75 L11.1428571,7 L13.7142857,7 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
Resize.displayName = 'Resize';
export default Resize;
