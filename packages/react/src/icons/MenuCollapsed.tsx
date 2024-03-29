import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const MenuCollapsed = ({
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
          id="1232-菜单收起"
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
              d="M22.4,0 C23.2836555,0 24,0.716344416 24,1.6 L24,22.4 C24,23.2836555 23.2836555,24 22.4,24 L1.6,24 C0.716344416,24 0,23.2836555 0,22.4 L0,1.6 C0,0.716344416 0.716344416,0 1.6,0 L22.4,0 Z M22.4,1.59996154 L1.59996154,1.59996154 L1.59996154,22.4000384 L6.4,22.4000384 L6.4,1.59996154 L8,1.59996154 L8,22.4000384 L22.4,22.4000384 L22.4,1.59996154 Z M4.8,16 L4.8,17.6 L3.2,17.6 L3.2,16 L4.8,16 Z M4.8,11.2 L4.8,12.8 L3.2,12.8 L3.2,11.2 L4.8,11.2 Z M4.8,6.4 L4.8,8 L3.2,8 L3.2,6.4 L4.8,6.4 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
MenuCollapsed.displayName = 'MenuCollapsed';
export default MenuCollapsed;
