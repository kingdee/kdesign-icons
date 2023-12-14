import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const AddChildren = ({
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
          id="1038.添加子级"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(2.000000, 2.000000)"
            fill="#515151"
            fillRule="nonzero"
          >
            <path
              d="M19.25,19.25 L19.25,15.75 L21,15.75 L21,19.25 L24.5,19.25 L24.5,21 L21,21 L21,24.5 L19.25,24.5 L19.25,21 L15.75,21 L15.75,19.25 L19.25,19.25 Z M24.52625,10.5315 L24.52625,2.58475 C24.52625,1.9355 24.15175,1.74299999 23.51125,1.74299999 L2.95749999,1.77975 C2.32049998,1.77975 1.7325,2.3485 1.7325,2.99949998 L1.7325,23.2225 C1.7325,23.8735 2.35724999,24.535 2.99425,24.535 L10.44925,24.535 L10.479,26.2815 L2.81925,26.2815 C1.26525001,26.2815 0,24.96025 0,23.37475 L0,2.87000001 C0,1.28624999 1.26525001,0 2.8175,0 L23.65125,0 C25.207,0 26.27275,1.00099999 26.27275,2.58650001 L26.27275,10.5315 L24.52625,10.5315 Z M14,12.25 L26.25,12.25 C27.2164983,12.25 28,13.0335017 28,14 L28,26.25 C28,27.2164983 27.2164983,28 26.25,28 L14,28 C13.0335017,28 12.25,27.2164983 12.25,26.25 L12.25,14 C12.25,13.0335017 13.0335017,12.25 14,12.25 L14,12.25 Z M14,14 L14,26.25 L26.25,26.25 L26.25,14 L14,14 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
AddChildren.displayName = 'AddChildren';
export default AddChildren;
