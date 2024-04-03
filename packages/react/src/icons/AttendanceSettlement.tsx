import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const AttendanceSettlement = ({
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
          id="1954考勤结算"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g id="调入单" transform="translate(2.000000, 3.000000)">
            <path
              d="M1,15 L6.03602629,15 L6.03602629,15 L7.5032276,17.8794011 C7.8446707,18.5494874 8.53315906,18.9713841 9.28522232,18.9713841 L18.816861,18.9713841 C19.5712005,18.9713841 20.2613685,18.5469558 20.601718,17.8737617 L22.0546178,15 L22.0546178,15 L27,15 C27.5522847,15 28,15.4477153 28,16 L28,24 C28,25.1045695 27.1045695,26 26,26 L2,26 C0.8954305,26 6.76353751e-17,25.1045695 0,24 L0,16 C-6.76353751e-17,15.4477153 0.44771525,15 1,15 Z"
              id="Rectangle-127-Copy"
              fill={fill}
            ></path>
            <path
              d="M6.03602629,15 L7.5032276,17.8794011 C7.8446707,18.5494874 8.53315906,18.9713841 9.28522232,18.9713841 L18.816861,18.9713841 C19.5173191,18.9713841 20.1624456,18.605423 20.5235357,18.014146 L20.601718,17.8737617 L22.0546178,15 L27,15 C27.5522847,15 28,15.4477153 28,16 L28,24 C28,25.1045695 27.1045695,26 26,26 L2,26 C0.8954305,26 0,25.1045695 0,24 L0,16 C0,15.4477153 0.44771525,15 1,15 L6.03602629,15 Z M23,0 C23.5522847,0 24,0.44771525 24,1 L24,14 L21.439654,14 L19.7092895,17.4225729 C19.5391147,17.7591699 19.1940307,17.9713841 18.816861,17.9713841 L9.28522232,17.9713841 C8.90919069,17.9713841 8.56494651,17.7604358 8.39422496,17.4253926 L6.6488132,14 L4,14 L4,1 C4,0.44771525 4.44771525,0 5,0 L23,0 Z M19.0240764,5 L12.3756746,10.2536322 L9.88501453,8.35408884 L9,9.23910336 L12.3491075,13 L19.8825239,5.91158157 L19.0240764,5 Z"
              id="形状"
              fill={fill}
              fillRule="nonzero"
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
AttendanceSettlement.displayName = 'AttendanceSettlement';
export default AttendanceSettlement;
