import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const ProfitAnalysis = ({
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
          id="1786.盈利分析"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g id="Group-10" transform="translate(1.000000, 2.000000)">
            <circle id="Oval-3" fill="#474444" cx="15" cy="13" r="7"></circle>
            <line
              x1="6.5"
              y1="5"
              x2="24"
              y2="21.5"
              id="Path-6"
              stroke="#474444"
              opacity="0.699999988"
            ></line>
            <line
              x1="6.5"
              y1="5"
              x2="24"
              y2="21.5"
              id="Path-6"
              stroke="#474444"
              opacity="0.699999988"
              transform="translate(15.250000, 13.250000) scale(-1, 1) translate(-15.250000, -13.250000) "
            ></line>
            <circle
              id="Oval-3-Copy"
              fill="#474444"
              cx="25.5"
              cy="3.5"
              r="3.5"
            ></circle>
            <circle
              id="Oval-3-Copy-3"
              fill="#474444"
              cx="25.5"
              cy="22.5"
              r="3.5"
            ></circle>
            <circle
              id="Oval-3-Copy-2"
              fill="#474444"
              cx="5"
              cy="4"
              r="3"
            ></circle>
            <circle
              id="Oval-3-Copy-4"
              fill="#474444"
              cx="4"
              cy="23"
              r="4"
            ></circle>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
ProfitAnalysis.displayName = 'ProfitAnalysis';
export default ProfitAnalysis;
