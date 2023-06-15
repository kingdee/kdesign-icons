import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const SchemeList = ({
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
          id="682.方案列表"
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
              d="M1.42857142,0 C0.639593283,0 0,0.63959321 0,1.42857142 L0,24.2857143 C1.43988727,23.154126 2.26685385,22.5883318 2.48089971,22.5883318 C2.69494557,22.5883318 3.53642828,23.154126 5.00534801,24.2857143 L7.48410783,22.5883318 L10.0444312,24.2857143 L12.5920455,22.5883318 L15.0032379,24.2857143 C16.1355473,23.154126 16.9746175,22.5883318 17.5204483,22.5883318 C18.0662792,22.5883318 18.8927964,23.154126 20,24.2857143 L20,1.42857142 C20,0.63959321 19.3604068,0 18.5714286,0 L1.42857142,0 Z M4.1666667,12.5615763 L10,12.5615763 L10,14.2364532 L4.1666667,14.2364532 L4.1666667,12.5615763 Z M4.1666667,8.37438423 L15.8333333,8.37438423 L15.8333333,10.0492611 L4.1666667,10.0492611 L4.1666667,8.37438423 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
SchemeList.displayName = 'SchemeList';
export default SchemeList;
