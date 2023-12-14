import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const MenuOne = ({
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
          id="1251-菜单"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(4.000000, 7.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M24,17.1428572 L24,18.8571429 L5.14285715,18.8571429 L5.14285715,17.1428572 L24,17.1428572 Z M1.71428573,17.1428572 L1.71428573,18.8571429 L0,18.8571429 L0,17.1428572 L1.71428573,17.1428572 Z M24,8.57142858 L24,10.2857143 L5.14285715,10.2857143 L5.14285715,8.57142858 L24,8.57142858 Z M1.71428573,8.57142858 L1.71428573,10.2857143 L0,10.2857143 L0,8.57142858 L1.71428573,8.57142858 Z M24,0 L24,1.71428573 L5.14285715,1.71428573 L5.14285715,0 L24,0 Z M1.71428573,0 L1.71428573,1.71428573 L0,1.71428573 L0,0 L1.71428573,0 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
MenuOne.displayName = 'MenuOne';
export default MenuOne;
