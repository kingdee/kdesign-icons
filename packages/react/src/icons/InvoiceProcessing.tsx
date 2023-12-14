import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const InvoiceProcessing = ({
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
          id="859.发票处理"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(2.000000, 4.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M23.8,8.4 L23.8,22.3902 C23.8,23.1686 23.2302,23.5424 22.5218,23.2218 L18.2882,21.3066 L14.6846,23.8 L14.0182,23.8 L10.4146,21.3066 L5.4866,23.2834 C4.7768,23.569 4.2,23.1714 4.2,22.3902 L4.2,8.4 L1.4,8.4 C0.62680135,8.4 0,7.77319865 0,7 L0,1.4 C0,0.62680135 0.62680135,7.77156117e-16 1.4,7.77156117e-16 L26.6,7.77156117e-16 C26.9713031,7.77156117e-16 27.3273986,0.147499577 27.5899495,0.410050506 C27.8525004,0.672601436 28,1.02869691 28,1.4 L28,7 C28,7.77319865 27.3731986,8.4 26.6,8.4 L23.8,8.4 Z M23.8,7 C24.5731986,7 25.2,6.37319865 25.2,5.6 L25.2,4.2 C25.2,3.42680135 24.5731986,2.8 23.8,2.8 L4.2,2.8 C3.42680135,2.8 2.8,3.42680135 2.8,4.2 L2.8,5.6 C2.8,5.97130309 2.94749958,6.32739856 3.21005051,6.58994949 C3.47260144,6.85250042 3.82869691,7 4.2,7 L4.2,5.6098 C4.2,4.83 4.83,4.2 5.6098,4.2 L22.3902,4.2 C23.17,4.2 23.8,4.83 23.8,5.6098 L23.8,7 L23.8,7 Z M8.4,14 L8.4,15.4 L19.6,15.4 L19.6,14 L8.4,14 Z M8.4,9.8 L8.4,11.2 L19.6,11.2 L19.6,9.8 L8.4,9.8 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
InvoiceProcessing.displayName = 'InvoiceProcessing';
export default InvoiceProcessing;
