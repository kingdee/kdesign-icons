import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const AnalysisProgram = ({
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
          id="1476-分析方案"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(6.000000, 4.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M13.0902857,-4.28228881e-16 L13.7142857,-4.28228881e-16 L13.7142857,0.570857143 L20.5714286,6.85714284 L20.5714286,24 L8.56457762e-16,24 L8.56457762e-16,-4.28228881e-16 L13.0902857,-4.28228881e-16 Z M12,1.71428572 L1.71428572,1.71428572 L1.71428572,22.2857143 L18.8571428,22.2857143 L18.8571428,7.61142856 L18.8571428,8.57142856 L12,8.57142856 L12,1.71428572 Z M13.7142857,2.89714285 L13.7142857,6.85714284 L18.0342857,6.85714284 L13.7142857,2.89714285 L13.7142857,2.89714285 Z M5.14285713,8.57142856 L5.14285713,6.85714284 L8.57142856,6.85714284 L8.57142856,8.57142856 L5.14285713,8.57142856 Z M5.14285713,13.7142857 L5.14285713,12 L15.4285714,12 L15.4285714,13.7142857 L5.14285713,13.7142857 Z M5.14285713,18.8571429 L5.14285713,17.1428572 L15.4285714,17.1428572 L15.4285714,18.8571429 L5.14285713,18.8571429 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
AnalysisProgram.displayName = 'AnalysisProgram';
export default AnalysisProgram;
