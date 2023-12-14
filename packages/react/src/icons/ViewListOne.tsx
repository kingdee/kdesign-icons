import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const ViewListOne = ({
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
          id="1164-视图_列表"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(4.000000, 5.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M23.0769231,20.3076923 C23.5867243,20.3076923 24,20.720968 24,21.2307692 C24,21.7405705 23.5867243,22.1538462 23.0769231,22.1538462 L0.923076923,22.1538462 C0.413275628,22.1538462 0,21.7405705 0,21.2307692 C0,20.720968 0.413275628,20.3076923 0.923076923,20.3076923 L23.0769231,20.3076923 Z M23.0769231,10.1538462 C23.5867243,10.1538462 24,10.5671218 24,11.0769231 C24,11.5867243 23.5867243,12 23.0769231,12 L0.923076923,12 C0.413275628,12 0,11.5867243 0,11.0769231 C0,10.5671218 0.413275628,10.1538462 0.923076923,10.1538462 L23.0769231,10.1538462 Z M23.0769231,0 C23.5867243,0 24,0.413275628 24,0.923076923 C24,1.43287822 23.5867243,1.84615385 23.0769231,1.84615385 L0.923076923,1.84615385 C0.413275628,1.84615385 0,1.43287822 0,0.923076923 C0,0.413275628 0.413275628,0 0.923076923,0 L23.0769231,0 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
ViewListOne.displayName = 'ViewListOne';
export default ViewListOne;
