import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const BasicInformation = ({
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
          id="1711.基础资料"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <path
            d="M28,21 C28.5522847,21 29,21.4477153 29,22 L29,26 C29,26.5522847 28.5522847,27 28,27 L4,27 C3.44771525,27 3,26.5522847 3,26 L3,22 C3,21.4477153 3.44771525,21 4,21 L28,21 Z M27,23 L25,23 L25,25 L27,25 L27,23 Z M24,23 L22,23 L22,25 L24,25 L24,23 Z M28,13 C28.5522847,13 29,13.4477153 29,14 L29,18 C29,18.5522847 28.5522847,19 28,19 L4,19 C3.44771525,19 3,18.5522847 3,18 L3,14 C3,13.4477153 3.44771525,13 4,13 L28,13 Z M27,15 L25,15 L25,17 L27,17 L27,15 Z M28,5 C28.5522847,5 29,5.44771525 29,6 L29,10 C29,10.5522847 28.5522847,11 28,11 L4,11 C3.44771525,11 3,10.5522847 3,10 L3,6 C3,5.44771525 3.44771525,5 4,5 L28,5 Z M27,7 L25,7 L25,9 L27,9 L27,7 Z M24,7 L22,7 L22,9 L24,9 L24,7 Z M21,7 L19,7 L19,9 L21,9 L21,7 Z"
            id="形状结合"
            fill={fill}
          ></path>
        </g>
      </svg>
    </IconWrapper>
  );
};
BasicInformation.displayName = 'BasicInformation';
export default BasicInformation;
