import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const TypesOfBusiness = ({
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
          id="870.业务类型"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(4.000000, 2.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M0,1.54470119 C0.000821551623,1.13339442 0.1653219,0.73932947 0.457179996,0.449514381 C0.749038092,0.159699292 1.14424885,-0.00202888931 1.55555124,1.92182198e-05 L23.3332687,1.92182198e-05 C24.1919329,1.92182198e-05 24.8888199,0.692259107 24.8888199,1.54470119 L24.8888199,26.4552988 C24.8879984,26.8666056 24.723498,27.2606705 24.4316399,27.5504856 C24.1397818,27.8403007 23.7445711,28.0020289 23.3332687,27.9999808 L1.55555124,27.9999808 C0.696886957,27.9999808 0,27.3077409 0,26.4552988 L0,1.54470119 Z M4.66665373,6.22224378 L4.66665373,9.33334627 L7.77775622,9.33334627 L7.77775622,6.22224378 L4.66665373,6.22224378 Z M4.66665373,12.4444488 L4.66665373,15.5555512 L7.77775622,15.5555512 L7.77775622,12.4444488 L4.66665373,12.4444488 Z M4.66665373,18.6666537 L4.66665373,21.7777562 L7.77775622,21.7777562 L7.77775622,18.6666537 L4.66665373,18.6666537 Z M9.33330746,6.22224378 L9.33330746,9.33334627 L20.2221662,9.33334627 L20.2221662,6.22224378 L9.33330746,6.22224378 Z M9.33330746,18.6666537 L9.33330746,21.7777562 L20.2221662,21.7777562 L20.2221662,18.6666537 L9.33330746,18.6666537 Z M9.33330746,12.4444488 L9.33330746,15.5555512 L20.2221662,15.5555512 L20.2221662,12.4444488 L9.33330746,12.4444488 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
TypesOfBusiness.displayName = 'TypesOfBusiness';
export default TypesOfBusiness;
