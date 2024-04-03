import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const ProductionExecution = ({
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
          id="1863.生产执行"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <path
            d="M8.03602629,18 L9.5032276,20.8794011 C9.8446707,21.5494874 10.5331591,21.9713841 11.2852223,21.9713841 L20.816861,21.9713841 C21.5173191,21.9713841 22.1624456,21.605423 22.5235357,21.014146 L22.601718,20.8737617 L24.0546178,18 L29,18 C29.5522847,18 30,18.4477153 30,19 L30,27 C30,28.0543618 29.1841222,28.9181651 28.1492623,28.9945143 L28,29 L4,29 C2.8954305,29 2,28.1045695 2,27 L2,19 C2,18.4477153 2.44771525,18 3,18 L8.03602629,18 Z M25,3 C25.5522847,3 26,3.44771525 26,4 L26,17 L23.439654,17 L21.7092895,20.4225729 C21.5391147,20.7591699 21.1940307,20.9713841 20.816861,20.9713841 L11.2852223,20.9713841 C10.9091907,20.9713841 10.5649465,20.7604358 10.394225,20.4253926 L8.6488132,17 L6,17 L6,4 C6,3.44771525 6.44771525,3 7,3 L25,3 Z M18.0457627,17.7562929 L13.9525424,17.7562929 L13.9525424,18.5 L18.0457627,18.5 L18.0457627,17.7562929 Z M18.0457627,16.4176201 L13.9525424,16.4176201 L13.9525424,17.1613272 L18.0457627,17.1613272 L18.0457627,16.4176201 Z M16,5.5 L10.5,11.7945509 L13.9533898,11.7945509 L13.9533898,15.8226545 L18.0466102,15.8226545 L18.0466102,11.7936213 L21.5,11.7936213 L16,5.5 Z"
            id="形状结合"
            fill={fill}
          ></path>
        </g>
      </svg>
    </IconWrapper>
  );
};
ProductionExecution.displayName = 'ProductionExecution';
export default ProductionExecution;
