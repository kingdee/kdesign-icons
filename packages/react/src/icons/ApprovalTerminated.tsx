import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const ApprovalTerminated = ({
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
          id="1380-审批终止"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(4.000000, 4.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M12,0 C18.6274169,0 24,5.37258301 24,12 C24,18.6274169 18.6274169,24 12,24 C5.37258301,24 0,18.6274169 0,12 C0,8.46390368 1.52947616,5.28503568 3.96296891,3.08885552 C3.99881861,2.93409736 4.08066827,2.78846744 4.20596843,2.67211731 C4.35586128,2.53293109 4.5429408,2.45885445 4.73238237,2.44859757 C6.74981549,0.912758507 9.26831467,0 12,0 Z M4.75328637,4.49878051 C2.790564,6.3953184 1.57009347,9.05513112 1.57009347,12 C1.57009347,17.7602783 6.23972168,22.4299065 12,22.4299065 C14.6885643,22.4299065 17.1395324,21.4126365 18.9889979,19.7420032 C18.9301697,19.7168355 18.8754928,19.6819133 18.8246715,19.6401751 L18.7413813,19.5617623 L4.75328637,4.49878051 Z M12,1.57009347 C9.79143176,1.57009347 7.74319549,2.25655629 6.05701685,3.42775627 L19.9741181,18.4170781 C20.0213508,18.4679441 20.0610856,18.5230925 20.0933729,18.5811623 C21.5530541,16.7874413 22.4299065,14.4961207 22.4299065,12 C22.4299065,6.23972168 17.7602783,1.57009347 12,1.57009347 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
ApprovalTerminated.displayName = 'ApprovalTerminated';
export default ApprovalTerminated;
