import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const Menu = ({
  size = '1em',
  fill = 'currentColor',
  rotate = 0,
  spin = false,
}: SvgIconProps) => {
  return (
    <IconWrapper rotate={rotate} spin={spin}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 32 32"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          id="102.菜单"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="菜单"
            transform="translate(4.000000, 6.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M0.923076923,0 L23.0769231,0 C23.5867243,0 24,0.407013876 24,0.909090909 C24,1.41116794 23.5867243,1.81818182 23.0769231,1.81818182 L0.923076923,1.81818182 C0.413275628,1.81818182 0,1.41116794 0,0.909090909 C0,0.407013876 0.413275628,0 0.923076923,0 Z M0.923076923,9.09090909 L23.0769231,9.09090909 C23.5867243,9.09090909 24,9.497923 24,10 C24,10.502077 23.5867243,10.9090909 23.0769231,10.9090909 L0.923076923,10.9090909 C0.413275628,10.9090909 0,10.502077 0,10 C0,9.497923 0.413275628,9.09090909 0.923076923,9.09090909 Z M0.923076923,18.1818182 L23.0769231,18.1818182 C23.5867243,18.1818182 24,18.5888321 24,19.0909091 C24,19.5929861 23.5867243,20 23.0769231,20 L0.923076923,20 C0.413275628,20 0,19.5929861 0,19.0909091 C0,18.5888321 0.413275628,18.1818182 0.923076923,18.1818182 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
Menu.displayName = 'Menu';
export default Menu;
