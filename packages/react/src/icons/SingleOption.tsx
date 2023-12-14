import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const SingleOption = ({
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
          id="1085.单选项"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(2.000000, 4.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M28,1.1513424e-15 L28,21.7777778 C28,23.495997 26.6071081,24.8888889 24.8888889,24.8888889 L0,24.8888889 L28,1.1513424e-15 Z"
              id="路径"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
SingleOption.displayName = 'SingleOption';
export default SingleOption;
