import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const RowAndColumnPermutation = ({
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
          id="1483-行列置换"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(4.000000, 6.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M5.14285713,1.71428572 L6.85714284,1.71428572 L6.85714284,3.42857141 L5.14285713,3.42857141 L5.14285713,18 L15.4285714,18 L15.4285714,19.7142857 L3.42857144,19.7142857 L3.42857144,3.42857141 L1.71428572,3.42857141 L1.71428572,1.71428572 L3.42857144,1.71428572 L3.42857144,0 L5.14285713,0 L5.14285713,1.71428572 Z M18.8571429,18.8571428 L17.1428572,18.8571428 L17.1428572,17.1428572 L18.8571429,17.1428572 L18.8571429,1.71428572 L8.57142856,1.71428572 L8.57142856,0 L20.5714286,0 L20.5714286,17.1428572 L22.2857143,17.1428572 L22.2857143,18.8571428 L20.5714286,18.8571428 L20.5714286,20.5714286 L18.8571429,20.5714286 L18.8571429,18.8571428 Z M22.2857143,15.4285714 L24,15.4285714 L24,17.1428572 L22.2857143,17.1428572 L22.2857143,15.4285714 Z M15.4285714,15.4285714 L17.1428572,15.4285714 L17.1428572,17.1428572 L15.4285714,17.1428572 L15.4285714,15.4285714 Z M1.71428572,5.14285713 L-5.55111512e-16,5.14285713 L-5.55111512e-16,3.42857141 L1.71428572,3.42857141 L1.71428572,5.14285713 Z M8.57142856,5.14285713 L6.85714284,5.14285713 L6.85714284,3.42857141 L8.57142856,3.42857141 L8.57142856,5.14285713 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
RowAndColumnPermutation.displayName = 'RowAndColumnPermutation';
export default RowAndColumnPermutation;
