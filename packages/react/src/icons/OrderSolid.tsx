import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const OrderSolid = ({
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
          id="28.订单"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="订单"
            transform="translate(6.000000, 4.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M6.125,0.888888889 L6.125,1.77777778 C6.125,2.71498826 6.83889307,3.48281344 7.74439548,3.55067935 L7.875,3.55555556 L13.125,3.55555556 C14.0475666,3.55555556 14.8033945,2.83033085 14.8702,1.91045541 L14.875,1.77777778 L14.875,0.888888889 L20.125,0.888888889 C20.6082491,0.888888889 21,1.28685801 21,1.77777778 L21,23.1111111 C21,23.6020308 20.6082491,24 20.125,24 L0.875,24 C0.391750856,24 0,23.6020308 0,23.1111111 L0,1.77777778 C0,1.28685801 0.391750856,0.888888889 0.875,0.888888889 L6.125,0.888888889 Z M14.875,17.7777778 L6.125,17.7777778 C5.64175088,17.7777778 5.25,18.1757469 5.25,18.6666667 C5.25,19.1225207 5.58778517,19.4982286 6.02295655,19.5495754 L6.125,19.5555556 L14.875,19.5555556 C15.3582491,19.5555556 15.75,19.1575864 15.75,18.6666667 C15.75,18.1757469 15.3582491,17.7777778 14.875,17.7777778 Z M14.875,12.4444444 L6.125,12.4444444 C5.64175088,12.4444444 5.25,12.8424136 5.25,13.3333333 C5.25,13.7891874 5.58778517,14.1648953 6.02295655,14.216242 L6.125,14.2222222 L14.875,14.2222222 C15.3582491,14.2222222 15.75,13.8242531 15.75,13.3333333 C15.75,12.8424136 15.3582491,12.4444444 14.875,12.4444444 Z M14.875,7.11111111 L6.125,7.11111111 C5.64175088,7.11111111 5.25,7.50908026 5.25,8 C5.25,8.45585405 5.58778517,8.83156196 6.02295655,8.8829087 L6.125,8.88888889 L14.875,8.88888889 C15.3582491,8.88888889 15.75,8.49091974 15.75,8 C15.75,7.50908026 15.3582491,7.11111111 14.875,7.11111111 Z M13.125,0 C13.6082491,0 14,0.397969124 14,0.888888889 L14,1.77777778 C14,2.26869754 13.6082491,2.66666667 13.125,2.66666667 L7.875,2.66666667 C7.39175088,2.66666667 7,2.26869754 7,1.77777778 L7,0.888888889 C7,0.397969124 7.39175088,0 7.875,0 L13.125,0 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
OrderSolid.displayName = 'OrderSolid';
export default OrderSolid;