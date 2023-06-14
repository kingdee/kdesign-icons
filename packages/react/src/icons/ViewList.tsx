import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const ViewList = ({
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
          id="1051.视图_列表"
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
              d="M-8.5487173e-16,-5.69914487e-16 L28,-5.69914487e-16 L28,4.20000002 L-8.5487173e-16,4.20000002 L-8.5487173e-16,-5.69914487e-16 Z M-8.5487173e-16,9.80000002 L28,9.80000002 L28,14 L-8.5487173e-16,14 L-8.5487173e-16,9.80000002 Z M-8.5487173e-16,19.6 L28,19.6 L28,23.8 L-8.5487173e-16,23.8 L-8.5487173e-16,19.6 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
ViewList.displayName = 'ViewList';
export default ViewList;
