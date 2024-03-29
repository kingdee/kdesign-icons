import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const Resign = ({
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
          id="740.离职"
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
              d="M28,12.18 L22.6519664,17.1080364 L22.6519664,13.9160714 L13.86,13.9160714 L13.86,10.4439314 L22.651965,10.4439314 L22.651965,7.2519664 L28,12.18 Z M18.8719664,1.1480364 L2.74393,1.1480364 L11.34,4.7880364 L11.34,22.0360714 L18.871965,22.0360714 L18.871965,15.091965 L20.131965,15.091965 L20.131965,23.211965 L11.34,23.211965 L11.34,28 L0,23.2119664 L0,0 L20.131965,0 L20.131965,9.29607 L18.871965,9.29607 L18.871965,1.148035 L18.8719664,1.1480364 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
Resign.displayName = 'Resign';
export default Resign;
