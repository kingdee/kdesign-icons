import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const StatisticsManagement = ({
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
          id="916.统计管理"
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
              d="M6.22222222,1.55555556 L6.22222222,4.66666667 L20.2222222,4.66666667 L20.2222222,1.55555556 L24.8888889,1.55555556 C25.7475556,1.55555556 26.4444444,2.26333333 26.4444444,3.11111111 L26.4444444,26.4444444 C26.4444444,27.3031111 25.7366667,28 24.8888889,28 L1.55555556,28 C0.696888889,28 0,27.2922222 0,26.4444444 L0,3.11111111 C0,2.25244444 0.707777778,1.55555556 1.55555556,1.55555556 L6.22222222,1.55555556 Z M7.77777778,-6.66133815e-16 L18.6666667,-6.66133815e-16 L18.6666667,3.11111111 L7.77777778,3.11111111 L7.77777778,-6.66133815e-16 Z M6.22222222,15.5555556 L6.22222222,24.8888889 L7.77777778,24.8888889 L7.77777778,15.5555556 L6.22222222,15.5555556 Z M18.6666667,15.5555556 L18.6666667,24.8888889 L20.2222222,24.8888889 L20.2222222,15.5555556 L18.6666667,15.5555556 Z M12.4444444,9.33333333 L12.4444444,24.8888889 L14,24.8888889 L14,9.33333333 L12.4444444,9.33333333 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
StatisticsManagement.displayName = 'StatisticsManagement';
export default StatisticsManagement;
