import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const Flag = ({
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
          id="1268-旗"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(6.000000, 4.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M0,0.828397521 C0,0.240165419 0.596461173,-0.160269532 1.1408976,0.0624544282 L1.1408976,0.0624544282 L19.3471566,7.51046948 C20.0327792,7.79095148 20.0327792,8.76187372 19.3471566,9.04235572 L19.3471566,9.04235572 L1.65511446,16.2797059 L1.65511446,23.1724428 C1.65511446,23.62949 1.28460446,24 0.827557231,24 C0.403156223,24 0.0533715095,23.6805296 0.0055675932,23.2689534 L0,23.1724428 L0,0.828397521 Z M1.65511446,2.06063024 L1.65511446,14.4913674 L16.8482377,8.2764126 L1.65511446,2.06063024 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
Flag.displayName = 'Flag';
export default Flag;
