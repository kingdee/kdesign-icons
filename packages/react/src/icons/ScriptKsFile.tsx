import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const ScriptKsFile = ({
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
          id="901.脚本_ks文件"
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
              d="M2.79999999,1.0461717e-15 L20.8923077,1.0461717e-15 C22.438705,1.0461717e-15 23.6923077,1.2536027 23.6923077,2.79999999 L23.6923077,25.2 C23.6923077,26.7463973 22.438705,28 20.8923077,28 L2.79999999,28 C1.2536027,28 8.36937358e-16,26.7463973 8.36937358e-16,25.2 L8.36937358e-16,2.79999999 C8.36937358e-16,1.2536027 1.2536027,1.0461717e-15 2.79999999,1.0461717e-15 Z M5.38461539,7.53846155 L5.38461539,9.6923077 L18.3076923,9.6923077 L18.3076923,7.53846155 L5.38461539,7.53846155 Z M5.38461539,14 L5.38461539,16.1538462 L14,16.1538462 L14,14 L5.38461539,14 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
ScriptKsFile.displayName = 'ScriptKsFile';
export default ScriptKsFile;