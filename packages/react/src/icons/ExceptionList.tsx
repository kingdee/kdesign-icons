import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const ExceptionList = ({
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
          id="676.异常列表"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(5.000000, 3.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M3.71983333,1.83333333 L3.72077546,5.5 L18.3874422,5.5 L18.3865,1.83333333 L20.1621323,1.83333333 C21.1771586,1.83333333 22,2.65373061 22,3.66392095 L22,23.8360791 C22,24.8470847 21.1644382,25.6666667 20.1621323,25.6666667 L1.83786771,25.6666667 C0.822841389,25.6666667 0,24.8462694 0,23.8360791 L0,3.66392095 C0,2.65291532 0.83556176,1.83333333 1.83786771,1.83333333 L3.71983333,1.83333333 Z M11,18.3333333 C9.98747795,18.3333333 9.16666667,19.1541447 9.16666667,20.1666667 C9.16666667,21.1791886 9.98747795,22 11,22 C12.012522,22 12.8333333,21.1791886 12.8333333,20.1666667 C12.8333333,19.1541447 12.012522,18.3333333 11,18.3333333 Z M12.8333333,7.33333333 L9.16666667,7.33333333 L10.0833333,16.5 L11.9166667,16.5 L12.8333333,7.33333333 Z M16.5541088,0 L16.5541088,3.66666667 L5.55410879,3.66666667 L5.55410879,0 L16.5541088,0 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
ExceptionList.displayName = 'ExceptionList';
export default ExceptionList;
