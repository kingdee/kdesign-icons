import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const FolderSolid = ({
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
          id="53.文件夹"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="文件夹"
            transform="translate(4.000000, 6.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M8.64495977,0 C8.87228821,0 9.09030583,0.092187228 9.25105133,0.256281564 L12.4285714,3.5 L23.1428571,3.5 C23.616244,3.5 24,3.89175086 24,4.375 L24,20.125 C24,20.6082491 23.616244,21 23.1428571,21 L0.857142857,21 C0.383755941,21 0,20.6082491 0,20.125 L0,0.875 C0,0.391750856 0.383755941,0 0.857142857,0 L8.64495977,0 Z M22.2857143,5.25 L1.71428571,5.25 L1.71428571,7 L22.2857143,7 L22.2857143,5.25 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
FolderSolid.displayName = 'FolderSolid';
export default FolderSolid;
