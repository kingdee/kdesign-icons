import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const BusinessTravelSettings = ({
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
          id="794.设置"
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
              d="M9.36663693,14.0530776 C9.37008019,11.4684853 11.4653614,9.37460098 14.0499554,9.37288136 C16.632025,9.37288136 18.7332739,11.471008 18.7332739,14.0530776 C18.7289724,16.6373135 16.6341936,18.7306958 14.0499554,18.7332739 C11.4678858,18.7332739 9.36663693,16.6335861 9.36663693,14.0530776 Z M10.6732828,-8.66587999e-16 C10.6732828,2.62734166 8.48617306,4.75825156 5.78702052,4.75825156 C4.93746159,4.76035964 4.10159439,4.5442705 3.35950045,4.13068689 L5.77725332e-16,9.85057984 C1.470562,10.6717217 2.4603033,12.2140946 2.4603033,13.9812667 C2.4603033,15.7484389 1.470562,17.2908118 5.77725332e-16,18.1119536 L3.35950045,23.8318466 C4.10159439,23.418263 4.93746159,23.2021738 5.78702052,23.2042819 C8.48617306,23.2042819 10.6732828,25.3336307 10.6732828,27.9625335 L17.3267172,27.9625335 C17.3267172,25.3336307 19.5138269,23.2042819 22.2129795,23.2042819 C23.0625208,23.2023134 23.8983533,23.4183936 24.6404996,23.8318466 L28,18.1119536 C26.529438,17.2908118 25.5396967,15.7484389 25.5396967,13.9812667 C25.5396967,12.2140946 26.529438,10.6717217 28,9.85057984 L24.6404996,4.13068689 C23.8983533,4.54413988 23.0625208,4.76022006 22.2129795,4.75825156 C19.5138269,4.75825156 17.3267172,2.62734166 17.3267172,-8.66587999e-16 L10.6732828,-8.66587999e-16 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
BusinessTravelSettings.displayName = 'BusinessTravelSettings';
export default BusinessTravelSettings;
