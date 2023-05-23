import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const FrontTurn = ({
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
          id="988.前翻"
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
              d="M2.61846883,13.9920909 L14.7650525,1.8265532 C15.1735577,1.4174105 15.1867419,0.726118011 14.7691616,0.307886133 C14.3637938,-0.0981142468 13.6727103,-0.108503121 13.2528607,0.312001681 C4.67288464,8.86887582 0.359713582,13.1705321 0.313347714,13.2169704 C-0.0971178344,13.6280764 -0.110753632,14.3258048 0.310511318,14.7477272 L13.2312816,27.6886594 C13.6411639,28.0991814 14.3368219,28.1093099 14.7596534,27.6858187 C15.1701189,27.2747128 15.1837548,26.5769843 14.7624898,26.155062 L2.61846883,13.9920909 Z"
              id="路径"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
FrontTurn.displayName = 'FrontTurn';
export default FrontTurn;
