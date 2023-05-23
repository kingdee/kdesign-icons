import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const AccountingCoordination = ({
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
          id="819.账务协同"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(2.000000, 2.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M1.55555556,3.11111111 L17.1111111,3.11111111 C21.4066592,3.11111111 24.8888889,6.59334083 24.8888889,10.8888889 L24.8888889,26.4444444 C24.8888889,26.8570034 24.7250005,27.2526651 24.4332772,27.5443883 C24.141554,27.8361116 23.7458923,28 23.3333333,28 L7.77777778,28 C3.48222972,28 0,24.5177703 0,20.2222222 L0,4.66666667 C0,3.80755706 0.696445945,3.11111111 1.55555556,3.11111111 Z M13.6655556,14 L13.9813333,13.762 L18.6666667,8.91955556 L17.1468889,7.77777778 L12.4631111,12.7866667 L13.9813333,12.7866667 L9.29755556,7.77777778 L7.77777778,8.91955556 L12.4631111,13.762 L12.7788889,14 L7.77777778,14 L7.77777778,15.5555556 L12.4444444,15.5555556 L12.4444444,17.1111111 L7.77777778,17.1111111 L7.77777778,18.6666667 L12.4444444,18.6666667 L12.4444444,21.7777778 L13.9175556,21.7777778 L13.9175556,18.6666667 L18.6666667,18.6666667 L18.6666667,17.1111111 L13.9175556,17.1111111 L13.9175556,15.5555556 L18.6666667,15.5555556 L18.6666667,14 L13.6655556,14 L13.6655556,14 Z M24.8888889,24.8888889 L24.8888889,23.3333333 L26.4444444,23.3333333 L26.4444444,7.77777778 C26.4444444,5.95311111 25.8953333,4.438 24.8888889,3.36 L24.8888889,3.11111111 L24.64,3.11111111 C23.576,2.11555556 22.0733333,1.55555556 20.2222222,1.55555556 L4.66666667,1.55555556 L4.66666667,3.11111111 L3.11111111,3.11111111 L3.11111111,1.55555556 C3.11111111,0.696445945 3.80755706,0 4.66666667,0 L20.2222222,0 C24.8888889,0 28,3.11111111 28,7.77777778 L28,23.3333333 C28,24.1924429 27.3035541,24.8888889 26.4444444,24.8888889 L24.8888889,24.8888889 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
AccountingCoordination.displayName = 'AccountingCoordination';
export default AccountingCoordination;
