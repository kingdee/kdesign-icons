import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const Image = ({
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
          id="52.图片"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="图片"
            transform="translate(4.000000, 7.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M23.1428571,0 C23.616244,0 24,0.380557974 24,0.85 L24,16.15 C24,16.619442 23.616244,17 23.1428571,17 L0.857142857,17 C0.383755941,17 0,16.619442 0,16.15 L0,0.85 C0,0.380557974 0.383755941,0 0.857142857,0 L23.1428571,0 Z M22.2857143,1.7 L1.71428571,1.7 L1.71428571,15.3 L7.09819345,6.14735684 C7.33671944,5.74186272 7.86156318,5.60489684 8.2704649,5.84143512 C8.35656241,5.89124017 8.43324008,5.95555568 8.49705076,6.03149044 L12,10.2 L15.6344308,8.03751364 C16.0061507,7.81634032 16.485874,7.90520348 16.7520148,8.24453308 L22.2848571,15.29915 L22.2857143,1.7 Z M18.8571429,3.4 C19.8039167,3.4 20.5714286,4.16111592 20.5714286,5.1 C20.5714286,6.03888408 19.8039167,6.8 18.8571429,6.8 C17.910369,6.8 17.1428571,6.03888408 17.1428571,5.1 C17.1428571,4.16111592 17.910369,3.4 18.8571429,3.4 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
Image.displayName = 'Image';
export default Image;
