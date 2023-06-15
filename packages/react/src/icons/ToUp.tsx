import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const ToUp = ({
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
          id="1487-向上"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(8.000000, 4.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M9.30536627,2.86646907 L15.4996771,9.06077985 C15.8279618,9.38860087 16.3598405,9.38822498 16.6876616,9.05994029 C17.0154826,8.73165559 17.0151067,8.19977681 16.686822,7.87195578 L9.04845938,0.235272262 C8.89535792,0.084508456 8.6890684,1.0737843e-15 8.4741969,1.0737843e-15 C8.25349262,-0.00461687161 8.04025492,0.0801935735 7.88314311,0.235272262 L0.246459624,7.87195578 C-0.0818250622,8.1997768 -0.082200941,8.73165557 0.245620075,9.05994027 C0.57344109,9.38822496 1.10531986,9.38860086 1.43360456,9.06077985 L7.62623621,2.86646907 L7.62623621,23.1436437 C7.62623621,23.6272331 8.00236134,24 8.46580126,24 C8.93218357,23.9908535 9.30545597,23.6101156 9.30536627,23.1436437 L9.30536627,2.86646907 Z"
              id="路径"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
ToUp.displayName = 'ToUp';
export default ToUp;
