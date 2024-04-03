import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const ReasonsForPartTimeJobs = ({
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
          id="1993.兼职原因"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <path
            d="M21.9983499,3 L28,8.86792327 L28,30 L25.024538,28.0178326 L22.0038854,30 L19.1104546,28.0178326 L16.0533175,30 L12.9809294,28.0178326 L10.0064176,30 L6.97707966,28.0178326 L4,30 L4,3.97794294 C4,3.43783997 4.44771525,3 5,3 L21.9983499,3 Z M14.3055556,18 L9.25722223,18 L9.25,20.6666667 C9.25,21.4066667 9.89277777,22 10.6944444,22 L20.8055556,22 C21.6072222,22 22.25,21.4066667 22.25,20.6666667 L22.25,18 L17.1944444,18 L17.1944444,18.6666667 L14.3055556,18.6666667 L14.3055556,18 Z M17.25,8.5 L14.25,8.5 L13,8.92105263 L12.8333333,11.5263158 L9.08333333,11.5263158 C8.30686275,11.5263158 8.25380623,11.865383 8.25025103,12.6073419 L8.25,15.4688995 C8.25,16.3186603 8.25083332,17 9.08333333,17 L14.25,17 L14.25,15.4688995 L17.25,15.4688995 L17.25,17 L22.4166667,17 C23.2416667,17 23.25,16.3110048 23.25,15.4688995 L23.25,12.7511962 C23.25,11.9473684 23.25,11.5263158 22.4166667,11.5263158 L18.6666667,11.5263158 L18.5,8.92105263 L17.25,8.5 Z M17.25,10 L17.25,12 L14.25,12 L14.25,10 L17.25,10 Z"
            id="形状结合备份-36"
            fill={fill}
          ></path>
        </g>
      </svg>
    </IconWrapper>
  );
};
ReasonsForPartTimeJobs.displayName = 'ReasonsForPartTimeJobs';
export default ReasonsForPartTimeJobs;
