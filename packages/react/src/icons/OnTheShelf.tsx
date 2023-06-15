import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const OnTheShelf = ({
  size = '1em',
  fill = 'currentColor',
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
          id="1008.上架"
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
              d="M0,1.75 L10.5,1.75 L10.5,3.50000001 L0,3.50000001 L0,1.75 Z M0,8.74999999 L10.5,8.74999999 L10.5,10.5 L0,10.5 L0,8.74999999 Z M0,15.75 L10.5,15.75 L10.5,17.5 L0,17.5 L0,15.75 Z M0,22.75 L28,22.75 L28,24.5 L0,24.5 L0,22.75 Z M15.75,3.50000001 L17.5,3.50000001 L17.5,5.24999998 L15.75,5.24999998 L15.75,3.50000001 L15.75,3.50000001 Z M14,5.24999998 L15.75,5.24999998 L15.75,6.99999998 L14,6.99999998 L14,5.24999998 Z M12.25,6.99999998 L14,6.99999998 L14,8.74999999 L12.25,8.74999999 L12.25,6.99999998 Z M17.5,1.75 L19.25,1.75 L19.25,3.50000001 L17.5,3.50000001 L17.5,1.75 Z M19.25,0 L21,0 L21,19.25 L19.25,19.25 L19.25,0 Z M21,1.75 L22.75,1.75 L22.75,3.50000001 L21,3.50000001 L21,1.75 Z M22.75,3.50000001 L24.5,3.50000001 L24.5,5.24999998 L22.75,5.24999998 L22.75,3.50000001 Z M24.5,5.24999998 L26.25,5.24999998 L26.25,6.99999998 L24.5,6.99999998 L24.5,5.24999998 Z M26.25,6.99999998 L28,6.99999998 L28,8.74999999 L26.25,8.74999999 L26.25,6.99999998 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
OnTheShelf.displayName = 'OnTheShelf';
export default OnTheShelf;
