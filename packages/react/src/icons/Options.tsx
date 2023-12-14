import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const Options = ({
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
          id="60.选项"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="选项"
            transform="translate(4.000000, 4.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M10,13 C10.5522847,13 11,13.4477153 11,14 L11,23 C11,23.5522847 10.5522847,24 10,24 L1,24 C0.447715264,24 0,23.5522847 0,23 L0,14 C0,13.4477153 0.447715264,13 1,13 L10,13 Z M23,20 C23.5522847,20 24,20.4477153 24,21 C24,21.5522847 23.5522847,22 23,22 L15,22 C14.4477153,22 14,21.5522847 14,21 C14,20.4477153 14.4477153,20 15,20 L23,20 Z M23,15 C23.5522847,15 24,15.4477153 24,16 C24,16.5522847 23.5522847,17 23,17 L15,17 C14.4477153,17 14,16.5522847 14,16 C14,15.4477153 14.4477153,15 15,15 L23,15 Z M10,0 C10.5522847,0 11,0.447715264 11,1 L11,10 C11,10.5522847 10.5522847,11 10,11 L1,11 C0.447715264,11 0,10.5522847 0,10 L0,1 C0,0.447715264 0.447715264,0 1,0 L10,0 Z M23,7 C23.5522847,7 24,7.4477153 24,8 C24,8.5522847 23.5522847,9 23,9 L15,9 C14.4477153,9 14,8.5522847 14,8 C14,7.4477153 14.4477153,7 15,7 L23,7 Z M23,2 C23.5522847,2 24,2.44771526 24,3 C24,3.55228474 23.5522847,4 23,4 L15,4 C14.4477153,4 14,3.55228474 14,3 C14,2.44771526 14.4477153,2 15,2 L23,2 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
Options.displayName = 'Options';
export default Options;
