import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const ClearTwo = ({
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
          id="1201-清空2"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(4.000000, 4.000000)"
            fillRule="nonzero"
          >
            <path
              d="M12,24 C5.37258299,24 0,18.627417 0,12 C0,5.37258299 5.37258299,0 12,0 C18.627417,0 24,5.37258299 24,12 C24,18.627417 18.627417,24 12,24 Z"
              id="路径"
              fill={fill}
            ></path>
            <path
              d="M12,10.9297079 L8.78958998,7.71929783 C8.49377933,7.42348716 8.00574075,7.43192198 7.71883133,7.71883133 C7.42327833,8.01438435 7.43070528,8.50099748 7.71929783,8.78958998 L10.9297079,12 L7.71929783,15.2104101 C7.42348716,15.5062207 7.43192198,15.9942593 7.71883133,16.2811686 C8.01438435,16.5767217 8.50099748,16.5692947 8.78958998,16.2807021 L12,13.0702922 L15.2104101,16.2807021 C15.5062207,16.5765128 15.9942593,16.568078 16.2811686,16.2811686 C16.5767217,15.9856157 16.5692947,15.4990025 16.2807021,15.2104101 L13.0702922,12 L16.2807021,8.78958998 C16.5765128,8.49377933 16.568078,8.00574075 16.2811686,7.71883133 C15.9856157,7.42327833 15.4990025,7.43070528 15.2104101,7.71929783 L12,10.9297079 Z"
              id="路径"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
ClearTwo.displayName = 'ClearTwo';
export default ClearTwo;
