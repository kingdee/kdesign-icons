import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const AllFrameLines = ({
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
          id="1055.所有框线"
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
              d="M0,28 L0,-6.31965069e-16 L28,-6.31965069e-16 L28,28 L0,28 Z M13.1764706,14.8235294 L1.64705884,14.8235294 L1.64705884,26.3529412 L13.1764706,26.3529412 L13.1764706,14.8235294 Z M26.3529412,14.8235294 L14.8235294,14.8235294 L14.8235294,26.3529412 L26.3529412,26.3529412 L26.3529412,14.8235294 Z M13.1764706,1.64705881 L1.64705884,1.64705881 L1.64705884,13.1764706 L13.1764706,13.1764706 L13.1764706,1.64705881 Z M26.3529412,1.64705881 L14.8235294,1.64705881 L14.8235294,13.1764706 L26.3529412,13.1764706 L26.3529412,1.64705881 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
AllFrameLines.displayName = 'AllFrameLines';
export default AllFrameLines;
