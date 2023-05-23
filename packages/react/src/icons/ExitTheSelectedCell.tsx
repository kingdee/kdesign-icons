import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const ExitTheSelectedCell = ({
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
          id="1025.退出选取单元格"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(2.000000, 3.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M27,0 C27.5522847,0 28,0.447715264 28,1 L28,21 C28,21.5522847 27.5522847,22 27,22 L14.999,22 L14.999,23.019 L18,23 L14,27 L10,23.0506193 L12.999,23.031 L12.999,22 L1,22 C0.447715264,22 0,21.5522847 0,21 L0,1 C0,0.447715264 0.447715264,0 1,0 L27,0 Z M26,6 L2,6 L2,20 L12.999,20 L13,18 L6,18 C4.94563821,18 4.08183488,17.1841222 4.00548573,16.1492623 L4,16 L4,10 C4,8.94563821 4.81587779,8.08183491 5.85073766,8.0054857 L6,8 L22,8 C23.0543618,8 23.9181651,8.81587779 23.9945143,9.8507377 L24,10 L24,16 C24,17.0543618 23.1841222,17.9181651 22.1492623,17.9945143 L22,18 L15,18 L14.999,20 L26,20 L26,6 Z M22,10 L6,10 L6,16 L13,16 L13,13 C13,12.4477153 13.4477153,12 14,12 C14.5522847,12 15,12.4477153 15,13 L15,16 L22,16 L22,10 Z M26,2 L2,2 L2,4 L26,4 L26,2 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
ExitTheSelectedCell.displayName = 'ExitTheSelectedCell';
export default ExitTheSelectedCell;
