import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const WritingViews = ({
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
          id="1039.编写视图"
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
              d="M2.00000001,4.00000001 L2.00000001,24 L22,24 L22,4.00000001 L2.00000001,4.00000001 Z M2,2.00000001 L22,2.00000001 C23.1045695,2.00000001 24,2.89543052 24,4.00000001 L24,24 C24,25.1045695 23.1045695,26 22,26 L2,26 C0.895430503,26 0,25.1045695 0,24 L0,4.00000001 C0,2.89543051 0.895430503,2.00000001 2,2.00000001 Z M28,0 L28,28 L26,28 L26,0 L28,0 Z M28,0 L28,28 L26,28 L26,0 L28,0 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
WritingViews.displayName = 'WritingViews';
export default WritingViews;
