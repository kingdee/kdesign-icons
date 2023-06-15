import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const Printing = ({
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
          id="1076.打印"
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
              d="M6.22222223,6.22222223 L21.7777778,6.22222223 L21.7777778,1.55555556 L6.22222223,1.55555556 L6.22222223,6.22222223 Z M4.66666668,21.7777778 L0,21.7777778 L0,7.77777777 C0,6.91866816 0.696445957,6.22222223 1.55555556,6.22222223 L4.66666668,6.22222223 L4.66666668,1.55555556 C4.66666668,0.696445946 5.36311262,0 6.22222223,0 L21.7777778,0 C22.6368874,0 23.3333333,0.696445946 23.3333333,1.55555556 L23.3333333,6.22222223 L26.4444444,6.22222223 C27.303554,6.22222223 28,6.91866816 28,7.77777777 L28,21.7777778 L23.3333333,21.7777778 L23.3333333,26.4444444 C23.3333333,27.3035541 22.6368874,28 21.7777778,28 L6.22222223,28 C5.36311262,28 4.66666668,27.3035541 4.66666668,26.4444444 L4.66666668,21.7777778 L4.66666668,21.7777778 Z M4.66666668,20.2222222 L4.66666668,15.5555556 C4.66666668,14.6964459 5.36311262,14 6.22222223,14 L21.7777778,14 C22.6368874,14 23.3333333,14.6964459 23.3333333,15.5555556 L23.3333333,20.2222222 L26.4444444,20.2222222 L26.4444444,7.77777777 L1.55555556,7.77777777 L1.55555556,20.2222222 L4.66666668,20.2222222 Z M6.22222223,15.5555556 L6.22222223,26.4444444 L21.7777778,26.4444444 L21.7777778,15.5555556 L6.22222223,15.5555556 Z M18.6666667,10.8888889 L23.3333333,10.8888889 L23.3333333,12.4444444 L18.6666667,12.4444444 L18.6666667,10.8888889 L18.6666667,10.8888889 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
Printing.displayName = 'Printing';
export default Printing;
