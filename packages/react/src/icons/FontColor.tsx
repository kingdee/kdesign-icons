import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const FontColor = ({
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
          id="1075.字体颜色"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(2.000000, 1.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M1.47607999e-15,29.9145299 L11.965812,-1.47607999e-15 L15.7549858,-1.47607999e-15 L28,29.9145299 L23.4888889,29.9145299 L19.8692308,19.9789174 L8.04700855,19.9789174 L4.2039886,29.9145299 L1.47607999e-15,29.9145299 Z M10.0393162,16.0242165 L17.9866097,16.0242165 C15.6353276,8.47578348 14.3071225,4.16210826 13.9980057,3.08119658 C13.6111111,4.27378917 12.2928775,8.58746439 10.0393162,16.0242165 L10.0393162,16.0242165 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
FontColor.displayName = 'FontColor';
export default FontColor;
