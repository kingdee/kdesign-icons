import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const MissionCenter = ({
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
          id="1713.任务中心"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <path
            d="M4,4 L14,4 C14.5522847,4 15,4.44771525 15,5 L15,15 C15,15.5522847 14.5522847,16 14,16 L4,16 C3.44771525,16 3,15.5522847 3,15 L3,5 C3,4.44771525 3.44771525,4 4,4 Z M4,18 L14,18 C14.5522847,18 15,18.4477153 15,19 L15,29 C15,29.5522847 14.5522847,30 14,30 L4,30 C3.44771525,30 3,29.5522847 3,29 L3,19 C3,18.4477153 3.44771525,18 4,18 Z M23.4852814,1.70710678 L29.8492424,8.07106781 C30.2397667,8.4615921 30.2397667,9.09475708 29.8492424,9.48528137 L23.4852814,15.8492424 C23.0947571,16.2397667 22.4615921,16.2397667 22.0710678,15.8492424 L15.7071068,9.48528137 C15.3165825,9.09475708 15.3165825,8.4615921 15.7071068,8.07106781 L22.0710678,1.70710678 C22.4615921,1.31658249 23.0947571,1.31658249 23.4852814,1.70710678 Z M18,18 L28,18 C28.5522847,18 29,18.4477153 29,19 L29,29 C29,29.5522847 28.5522847,30 28,30 L18,30 C17.4477153,30 17,29.5522847 17,29 L17,19 C17,18.4477153 17.4477153,18 18,18 Z"
            id="形状结合"
            fill={fill}
          ></path>
        </g>
      </svg>
    </IconWrapper>
  );
};
MissionCenter.displayName = 'MissionCenter';
export default MissionCenter;
