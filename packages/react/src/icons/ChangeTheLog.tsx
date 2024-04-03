import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const ChangeTheLog = ({
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
          id="1871.变更日志"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <path
            d="M10,1 C10.5522847,1 11,1.44771525 11,2 L11,4 L21,4 L21,2 C21,1.44771525 21.4477153,1 22,1 L24,1 C24.5522847,1 25,1.44771525 25,2 L25,4 L27,4 C28.1045695,4 29,4.8954305 29,6 L29,28 C29,29.1045695 28.1045695,30 27,30 L5,30 C3.8954305,30 3,29.1045695 3,28 L3,6 C3,4.8954305 3.8954305,4 5,4 L7,4 L7,2 C7,1.44771525 7.44771525,1 8,1 L10,1 Z M18,21 L8,21 C7.44771525,21 7,21.4477153 7,22 C7,22.5522847 7.44771525,23 8,23 L18,23 C18.5522847,23 19,22.5522847 19,22 C19,21.4477153 18.5522847,21 18,21 Z M24,16 L8,16 C7.44771525,16 7,16.4477153 7,17 C7,17.5522847 7.44771525,18 8,18 L24,18 C24.5522847,18 25,17.5522847 25,17 C25,16.4477153 24.5522847,16 24,16 Z M24,11 L8,11 C7.44771525,11 7,11.4477153 7,12 C7,12.5522847 7.44771525,13 8,13 L24,13 C24.5522847,13 25,12.5522847 25,12 C25,11.4477153 24.5522847,11 24,11 Z"
            id="形状结合"
            fill={fill}
          ></path>
        </g>
      </svg>
    </IconWrapper>
  );
};
ChangeTheLog.displayName = 'ChangeTheLog';
export default ChangeTheLog;
