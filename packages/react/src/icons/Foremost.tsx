import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const Foremost = ({
  size = '1em',
  fill = 'currentColor',
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
          id="986.最前"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(5.000000, 2.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M9.08000724,13.9920909 L21.2240282,26.1550619 C21.6452932,26.5769842 21.6316574,27.2747128 21.2211918,27.6858187 C20.7983604,28.1093098 20.1027023,28.0991814 19.69282,27.6886594 L6.77204977,14.7477272 C6.35078478,14.3258048 6.3644207,13.6280763 6.77488617,13.2169704 C6.82125215,13.170532 11.1344232,8.8688758 19.7143992,0.31200168 C20.1342489,-0.108503121 20.8253323,-0.0981142466 21.2307002,0.307886132 C21.6482804,0.72611801 21.6350962,1.4174105 21.2265911,1.8265532 L9.08000724,13.9920909 Z M1.07692309,1.49622945e-08 C1.67169128,1.49622945e-08 2.15384617,0.48215491 2.15384617,1.07692306 L2.15384617,26.9230769 C2.15384617,27.5178452 1.67169128,28 1.07692309,28 C0.482154895,28 0,27.5178452 0,26.9230769 L0,1.07692306 C0,0.48215491 0.482154895,1.49622945e-08 1.07692309,1.49622945e-08 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
Foremost.displayName = 'Foremost';
export default Foremost;
