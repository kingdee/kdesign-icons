import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const ForwardSingleArrow = ({
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
          id="969.前翻单箭头"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(8.000000, 2.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M13.1000459,0.372773184 C13.5970768,-0.124257728 14.4029232,-0.124257728 14.8999541,0.372773184 C15.3587518,0.831570962 15.394044,1.55350142 15.0058305,2.05278109 L14.8999541,2.17268136 L3.07363638,14 L14.8999541,25.8273187 C15.3587518,26.2861165 15.394044,27.0080468 15.0058305,27.5073265 L14.8999541,27.6272268 C14.4411563,28.0860245 13.719226,28.1213167 13.2199462,27.7331032 L13.1000459,27.6272268 L0.372773194,14.8999541 C-0.0860245833,14.4411563 -0.12131672,13.7192259 0.266896784,13.2199462 L0.372773194,13.1000459 L13.1000459,0.372773184 Z"
              id="路径"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
ForwardSingleArrow.displayName = 'ForwardSingleArrow';
export default ForwardSingleArrow;
