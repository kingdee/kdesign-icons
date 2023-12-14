import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const ListThree = ({
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
          id="1077.列表"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(2.000000, 3.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M26.25,17.5 L26.25,12.25 L19.25,12.25 L19.25,17.5 L26.25,17.5 Z M26.25,19.25 L19.25,19.25 L19.25,24.5 L17.5,24.5 L17.5,19.25 L10.5,19.25 L10.5,24.5 L8.75,24.5 L8.75,19.25 L1.75,19.25 L1.75,24.5 L26.25,24.5 L26.25,19.25 Z M1.75,17.5 L8.75,17.5 L8.75,12.25 L1.75,12.25 L1.75,17.5 Z M10.5,17.5 L17.5,17.5 L17.5,12.25 L10.5,12.25 L10.5,17.5 Z M26.25,10.5 L26.25,5.24999998 L19.25,5.24999998 L19.25,10.5 L26.25,10.5 Z M1.75,10.5 L8.75,10.5 L8.75,5.24999998 L1.75,5.24999998 L1.75,10.5 L1.75,10.5 Z M10.5,10.5 L17.5,10.5 L17.5,5.24999998 L10.5,5.24999998 L10.5,10.5 L10.5,10.5 Z M1.75,0 L26.25,0 C27.2164983,0 28,0.78350169 28,1.75 L28,24.5 C28,25.4664983 27.2164983,26.25 26.25,26.25 L1.75,26.25 C0.78350169,26.25 0,25.4664983 0,24.5 L0,1.75 C0,0.78350169 0.78350169,0 1.75,0 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
ListThree.displayName = 'ListThree';
export default ListThree;
