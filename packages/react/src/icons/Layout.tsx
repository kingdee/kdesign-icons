import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const Layout = ({
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
          id="4.布局"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="布局"
            transform="translate(4.000000, 4.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M7.38461538,9.23076923 L7.38461538,24 L0.923076923,24 C0.413275628,24 0,23.5867243 0,23.0769231 L0,9.23076923 L7.38461538,9.23076923 Z M24,9.23076923 L24,23.0769231 C24,23.5867243 23.5867243,24 23.0769231,24 L9.23076923,24 L9.23076923,9.23076923 L24,9.23076923 Z M23.0769231,0 C23.5867243,0 24,0.413275628 24,0.923076923 L24,7.38461538 L0,7.38461538 L0,0.923076923 C0,0.413275628 0.413275628,0 0.923076923,0 L23.0769231,0 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
Layout.displayName = 'Layout';
export default Layout;
