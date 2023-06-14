import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const BillRedPunch = ({
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
          id="237.发票红冲"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="发票红冲"
            transform="translate(6.000000, 4.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M18.3333333,0 C19.2538079,0 20,0.741045928 20,1.65517241 L20,24 L17.6115922,22.3296028 L15.0964868,24 L12.5946487,22.3296028 L10.1025237,24 L7.60129509,22.3296028 L5.09126651,24 L2.55847925,22.3296028 L0,24 L0,1.65517241 C0,0.741045928 0.74619208,0 1.66666667,0 L18.3333333,0 Z M7.5,10.7586207 L3.33333333,14.0689655 L7.5,17.3793103 L7.5,14.8965517 L15.8333333,14.8965517 C16.2935706,14.8965517 16.6666667,14.5260287 16.6666667,14.0689655 C16.6666667,13.6119023 16.2935706,13.2413793 15.8333333,13.2413793 L7.5,13.2413793 L7.5,10.7586207 Z M12.5,4.13793103 L12.5,6.62068966 L4.16666667,6.62068966 C3.70642939,6.62068966 3.33333333,6.99121266 3.33333333,7.44827586 C3.33333333,7.8726917 3.65503349,8.22248872 4.0694824,8.27029431 L4.16666667,8.27586207 L12.5,8.27586207 L12.5,10.7586207 L16.6666667,7.44827586 L12.5,4.13793103 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
BillRedPunch.displayName = 'BillRedPunch';
export default BillRedPunch;
