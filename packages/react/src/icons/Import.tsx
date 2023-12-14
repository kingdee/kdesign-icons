import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const Import = ({
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
          id="1004.导入"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(2.000000, 2.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M11.1917927,0.00186530242 L11.1917927,1.86716409 L1.86529878,1.86716409 L1.86529878,26.1160482 L26.1141829,26.1160482 L26.1141829,16.7895543 L27.9794817,16.7895543 L27.9794817,26.1160482 C27.9794817,27.1462243 27.144359,27.981347 26.1141829,27.981347 L1.86529878,27.981347 C0.835122712,27.981347 0,27.1462243 0,26.1160482 L0,1.86716409 C0,0.836988014 0.835122712,0.00186530242 1.86529878,0.00186530242 L11.1917927,0.00186530242 Z M13.0570915,13.4264206 L26.6383319,0 L28,1.46799012 L14.5791753,14.9242555 L22.3835854,14.9242555 L22.3835854,16.7895543 L11.1917927,16.7895543 L11.1917927,5.59776162 L13.0570915,5.59776162 L13.0570915,13.4264206 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
Import.displayName = 'Import';
export default Import;
