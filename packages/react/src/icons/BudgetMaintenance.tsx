import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const BudgetMaintenance = ({
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
          id="863.预算数维护"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(4.000000, 2.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M6.22222222,1.55555556 L6.22222222,4.66666667 L17.1111111,4.66666667 L17.1111111,1.55555556 L21.7668889,1.55555556 C22.6317778,1.55555556 23.3333333,2.26333333 23.3333333,3.11111111 L23.3333333,26.4444444 C23.3333333,27.3031111 22.6348889,28 21.7668889,28 L1.56644444,28 C0.705905174,27.9991734 0.00682928289,27.304957 0,26.4444444 L0,3.11111111 C0,2.25244444 0.698444444,1.55555556 1.56644444,1.55555556 L6.22222222,1.55555556 Z M7.77777778,-6.66133815e-16 L15.5555556,-6.66133815e-16 L15.5555556,3.11111111 L7.77777778,3.11111111 L7.77777778,-6.66133815e-16 Z M10.8888889,10.8888889 L10.8888889,23.3333333 L12.4444444,23.3333333 L12.4444444,10.8888889 L10.8888889,10.8888889 L10.8888889,10.8888889 Z M6.22222222,14 L6.22222222,23.3333333 L7.77777778,23.3333333 L7.77777778,14 L6.22222222,14 L6.22222222,14 Z M15.5555556,15.5555556 L15.5555556,23.3333333 L17.1111111,23.3333333 L17.1111111,15.5555556 L15.5555556,15.5555556 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
BudgetMaintenance.displayName = 'BudgetMaintenance';
export default BudgetMaintenance;
