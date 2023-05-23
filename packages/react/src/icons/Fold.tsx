import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const Fold = ({
  size = '1em',
  color = 'currentColor',
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
          id="214.收起"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="收起"
            transform="translate(4.000000, 9.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M21.5417662,0.40795843 L12,9.63734545 L2.45823376,0.40795843 C1.89587879,-0.135986143 0.984121229,-0.135986143 0.421766254,0.40795843 C-0.140588751,0.951903004 -0.140588751,1.8338113 0.421766254,2.3777559 L10.9817662,12.5920416 C11.5441213,13.1359861 12.4558788,13.1359861 13.0182338,12.5920416 L23.5782338,2.3777559 C24.1405887,1.8338113 24.1405887,0.951903004 23.5782338,0.40795843 C23.0158788,-0.135986143 22.1041213,-0.135986143 21.5417662,0.40795843 Z"
              id="路径"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
Fold.displayName = 'Fold';
export default Fold;
