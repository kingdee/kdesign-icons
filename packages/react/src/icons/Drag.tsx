import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const Drag = ({
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
          id="90.拖拽"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="拖拽"
            transform="translate(4.000000, 9.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M1,0 L23,0 C23.5522848,0 24,0.207867801 24,0.464285714 L24,1.39285714 C24,1.64927509 23.5522848,1.85714286 23,1.85714286 L1,1.85714286 C0.447715259,1.85714286 0,1.64927509 0,1.39285714 L0,0.464285714 C0,0.207867801 0.447715259,0 1,0 Z M1,5.60271344 L23,5.60271344 C23.5522848,5.60271344 24,5.81058121 24,6.06699915 L24,6.96428571 C24,7.22070366 23.5522848,7.42857143 23,7.42857143 L1,7.42857143 C0.447715259,7.42857143 0,7.22070366 0,6.96428571 L0,6.06699915 C0,5.81058121 0.447715259,5.60271344 1,5.60271344 Z M1,11.174142 L23,11.174142 C23.5522848,11.174142 24,11.3820098 24,11.6384277 L24,12.5357143 C24,12.7921322 23.5522848,13 23,13 L1,13 C0.447715259,13 0,12.7921322 0,12.5357143 L0,11.6384277 C0,11.3820098 0.447715259,11.174142 1,11.174142 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
Drag.displayName = 'Drag';
export default Drag;
