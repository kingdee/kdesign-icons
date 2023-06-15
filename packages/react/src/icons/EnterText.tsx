import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const EnterText = ({
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
          id="1079.输入文字"
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
              d="M13.0666667,1.86666667 L1.40000001,1.86666667 C0.629066649,1.86666667 -3.10862447e-16,1.44666667 -3.10862447e-16,0.933333319 C-3.10862447e-16,0.419999967 0.629066681,0 1.40000001,0 L26.6,0 C27.3690667,0 28,0.42 28,0.933333319 C28,1.44666664 27.3690667,1.86666664 26.6,1.86666667 L14.9333333,1.86666667 L14.9333333,26.5066667 C14.9333333,27.328 14.5133333,28 14,28 C13.4866667,28 13.0666667,27.328 13.0666667,26.5066667 L13.0666667,1.86666667 Z"
              id="路径"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
EnterText.displayName = 'EnterText';
export default EnterText;
