import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const ClearOne = ({
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
          id="1086.清除"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(2.000000, 4.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M1.6346027,16.8645682 L6.56722745,21.7769709 L15.5582621,21.7691932 L19.4206738,18.0825579 L9.99564275,8.70108206 L1.6346027,16.8645682 Z M17.7546879,21.7769709 L26.4439474,21.7769709 L26.4439474,23.3325133 L15.5551511,23.3325133 L15.5551511,23.3247356 L5.92634401,23.3325133 L0.402613167,17.8336711 C0.144898737,17.5773332 3.73016587e-16,17.2288372 3.73016587e-16,16.865346 C3.73016587e-16,16.5018548 0.144898737,16.1533588 0.402613167,15.8970209 L15.9673698,0.400708167 C16.5054084,-0.133569389 17.3737591,-0.133569389 17.9117977,0.400708167 L27.5966043,10.040404 C27.8547971,10.2968031 28,10.6456333 28,11.0095069 C28,11.3733805 27.8547971,11.7222107 27.5966043,11.9786098 L17.7546879,21.7769709 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
ClearOne.displayName = 'ClearOne';
export default ClearOne;
