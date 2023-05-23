import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const ScriptFunctionGrouping = ({
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
          id="903.脚本_功能分组"
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
              d="M1.83400001,23.3333333 C0.821109773,23.3333333 0,22.5122236 0,21.4993333 L0,1.83400001 C0,0.821333342 0.821333342,0 1.83400001,0 L21.4993333,0 C22.512,0 23.3333333,0.821333342 23.3333333,1.83400001 L23.3333333,21.4993333 C23.3333333,22.5122236 22.5122236,23.3333333 21.4993333,23.3333333 L1.83400001,23.3333333 Z M25.2,7.00000002 L26.166,7.00000002 C27.1786667,7.00000002 28,7.82133336 28,8.83399999 L28,26.166 C28,26.652407 27.8067756,27.1188921 27.4628338,27.4628338 C27.1188921,27.8067756 26.652407,28 26.166,28 L8.83399999,28 C7.82110977,28 7.00000002,27.1788902 7.00000002,26.166 L7.00000002,25.2 L25.2,25.2 L25.2,7.00000002 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
ScriptFunctionGrouping.displayName = 'ScriptFunctionGrouping';
export default ScriptFunctionGrouping;
