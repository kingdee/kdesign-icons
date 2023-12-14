import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const TurnBackTwo = ({
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
          id="989.后翻"
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
              d="M12.4584542,13.9920909 L0.31187054,1.8265532 C-0.0966346813,1.4174105 -0.109818817,0.726118011 0.307761428,0.307886133 C0.713129249,-0.0981142468 1.40421273,-0.108503121 1.82406237,0.312001681 C10.4040384,8.86887582 14.7172095,13.1705321 14.7635753,13.2169704 C15.1740409,13.6280764 15.1876767,14.3258048 14.7664117,14.7477272 L1.84564148,27.6886594 C1.43575914,28.0991814 0.740101119,28.1093099 0.31726962,27.6858187 C-0.0931958505,27.2747128 -0.106831726,26.5769843 0.314433263,26.155062 L12.4584542,13.9920909 Z"
              id="路径"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
TurnBackTwo.displayName = 'TurnBackTwo';
export default TurnBackTwo;
