import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const Wallet = ({
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
          id="39.钱包"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="钱包"
            transform="translate(4.000000, 6.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M23.1428571,5.04 C23.616244,5.04 24,5.41608082 24,5.88 L24,10.08 L16.2857143,10.08 C15.8461407,10.08 15.483851,10.4042738 15.434338,10.8220383 L15.4285714,10.92 L15.4285714,15.12 C15.4285714,15.5507821 15.759463,15.905826 16.1857534,15.9543487 L16.2857143,15.96 L24,15.96 L24,20.16 C24,20.6239192 23.616244,21 23.1428571,21 L0.857142857,21 C0.383755941,21 0,20.6239192 0,20.16 L0,5.04 L23.1428571,5.04 Z M18.4285714,11.76 C19.1386518,11.76 19.7142857,12.3241212 19.7142857,13.02 C19.7142857,13.7158788 19.1386518,14.28 18.4285714,14.28 C17.7184911,14.28 17.1428571,13.7158788 17.1428571,13.02 C17.1428571,12.3241212 17.7184911,11.76 18.4285714,11.76 Z M18,0 C18.4733869,0 18.8571429,0.376080822 18.8571429,0.84 L18.8571429,3.36 L0,3.36 C0,1.50432323 1.53502371,0 3.42857143,0 L18,0 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
Wallet.displayName = 'Wallet';
export default Wallet;
