import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const HandoverApplicationGrey = ({
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
          id="1496-移交应用-灰色"
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
              d="M3.01028572,17.1428572 L8.57142856,22.2857143 L8.57142856,24 L7.39200001,24 L0.454285698,17.1428572 L-4.28228881e-16,17.1428572 L-4.28228881e-16,15.4285714 L24,15.4285714 L24,17.1428572 L3.01028572,17.1428572 Z M21.0857143,6.85714284 L15.4285714,1.26685715 L15.4285714,-4.28228881e-16 L16.584,-4.28228881e-16 L24,6.85714284 L24,8.57142856 L-4.28228881e-16,8.57142856 L-4.28228881e-16,6.85714284 L21.0857143,6.85714284 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
HandoverApplicationGrey.displayName = 'HandoverApplicationGrey';
export default HandoverApplicationGrey;
