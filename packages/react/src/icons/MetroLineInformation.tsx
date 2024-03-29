import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const MetroLineInformation = ({
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
          id="675.地铁线信息"
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
              d="M23,22 C23.5522848,22 24,22.4477152 24,23 C24,23.5522848 23.5522848,24 23,24 L1,24 C0.447715264,24 0,23.5522848 0,23 C0,22.4477152 0.447715264,22 1,22 L23,22 Z M22,0 C23.1045694,0 24,0.895430496 24,2 L24,18 C24,19.1045695 23.1045694,20 22,20 L2,20 C0.895430496,20 0,19.1045695 0,18 L0,2 C0,0.895430496 0.895430496,0 2,0 L22,0 Z M6,14 C4.8954305,14 4,14.8954305 4,16 C4,17.1045695 4.8954305,18 6,18 C7.1045695,18 8,17.1045695 8,16 C8,14.8954305 7.1045695,14 6,14 Z M18,14 C16.8954305,14 16,14.8954305 16,16 C16,17.1045695 16.8954305,18 18,18 C19.1045695,18 20,17.1045695 20,16 C20,14.8954305 19.1045695,14 18,14 Z M18,4 L6,4 C4.97432832,4 4.1289857,4.77208038 4.01345546,5.76675773 L4,6 L4,8 C4,9.02567168 4.77208038,9.87101434 5.76675773,9.98654454 L6,10 L18,10 C19.0256717,10 19.8710143,9.22791962 19.9865445,8.23324227 L20,8 L20,6 C20,4.8954305 19.1045695,4 18,4 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
MetroLineInformation.displayName = 'MetroLineInformation';
export default MetroLineInformation;
