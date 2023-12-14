import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const Unflod = ({
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
          id="215.展开"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="展开"
            transform="translate(4.000000, 9.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M21.5417662,12.5920416 L12,3.36265456 L2.45823376,12.5920416 C1.89587879,13.1359861 0.984121229,13.1359861 0.421766254,12.5920416 C-0.140588751,12.048097 -0.140588751,11.1661887 0.421766254,10.6222441 L10.9817662,0.40795843 C11.5441213,-0.135986143 12.4558788,-0.135986143 13.0182338,0.40795843 L23.5782338,10.6222441 C24.1405887,11.1661887 24.1405887,12.048097 23.5782338,12.5920416 C23.0158788,13.1359861 22.1041213,13.1359861 21.5417662,12.5920416 Z"
              id="路径"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
Unflod.displayName = 'Unflod';
export default Unflod;
