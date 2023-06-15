import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const Statements = ({
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
          id="790.报表"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(3.000000, 2.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M1.55555556,3.11111111 L21.7777778,3.11111111 C22.6368874,3.11111111 23.3333333,3.80755706 23.3333333,4.66666667 L23.3333333,26.4444444 C23.3333333,27.3035541 22.6368874,28 21.7777778,28 L1.55555556,28 C0.696445945,28 0,27.3035541 0,26.4444444 L0,4.66666667 C0,3.80755706 0.696445945,3.11111111 1.55555556,3.11111111 Z M4.66666667,17.1111111 L4.66666667,23.3333333 L6.22222222,23.3333333 L6.22222222,17.1111111 L4.66666667,17.1111111 L4.66666667,17.1111111 Z M10.8888889,18.6666667 L10.8888889,23.3333333 L12.4444444,23.3333333 L12.4444444,18.6666667 L10.8888889,18.6666667 Z M17.1111111,14 L17.1111111,23.3333333 L18.6666667,23.3333333 L18.6666667,14 L17.1111111,14 Z M11.6931111,14.28 L19.2966667,9.76888889 L18.5033333,8.43111111 L11.9513333,12.32 L8.50577778,8.79511111 L3.76911111,11.9528889 L4.63088889,13.2471111 L8.29422222,10.8048889 L11.6931111,14.2815556 L11.6931111,14.28 Z M24.8888889,24.8888889 L24.8888889,3.11111111 C24.8888889,2.2520015 24.1924429,1.55555556 23.3333333,1.55555556 L3.11111111,1.55555556 L3.11111111,0 L23.3333333,0 C24.1584513,0 24.9497746,0.327776837 25.5332211,0.911223347 C26.1166676,1.49466986 26.4444444,2.28599314 26.4444444,3.11111111 L26.4444444,24.8888889 L24.8888889,24.8888889 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
Statements.displayName = 'Statements';
export default Statements;
