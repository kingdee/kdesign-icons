import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const BasicDataOne = ({
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
          id="533.基础数据"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(4.000000, 4.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M22.8717949,3.69230769 C23.4948853,3.69230769 24,4.19742233 24,4.82051281 L24,22.8717949 C24,23.4948853 23.4948853,24 22.8717949,24 L4.82051281,24 C4.19742233,24 3.69230769,23.4948853 3.69230769,22.8717949 L3.69230769,21.7435898 L20.6153847,21.7435898 C21.1939686,21.7435898 21.6708286,21.3080572 21.7359995,20.7469571 L21.7435898,20.6153847 L21.7435898,3.69230769 L22.8717949,3.69230769 Z M19.1794872,0 C19.8025776,0 20.3076923,0.505114634 20.3076923,1.12820512 L20.3076923,19.1794872 C20.3076923,19.8025776 19.8025776,20.3076923 19.1794872,20.3076923 L1.12820512,20.3076923 C0.505114634,20.3076923 0,19.8025776 0,19.1794872 L0,1.12820512 C0,0.505114634 0.505114634,0 1.12820512,0 L19.1794872,0 Z M5.53846154,9.23076923 C5.02866024,9.23076923 4.61538462,9.64404486 4.61538462,10.1538462 L4.61538462,16.6153846 C4.61538462,17.125186 5.02866024,17.5384615 5.53846154,17.5384615 C6.04826283,17.5384615 6.46153846,17.125186 6.46153846,16.6153846 L6.46153846,10.1538462 C6.46153846,9.64404486 6.04826283,9.23076923 5.53846154,9.23076923 Z M10.1538462,5.53846154 C9.64404486,5.53846154 9.23076923,5.95173717 9.23076923,6.46153846 L9.23076923,16.6153846 C9.23076923,17.125186 9.64404486,17.5384615 10.1538462,17.5384615 C10.6636474,17.5384615 11.0769231,17.125186 11.0769231,16.6153846 L11.0769231,6.46153846 C11.0769231,5.95173717 10.6636474,5.53846154 10.1538462,5.53846154 Z M14.7692308,10.1538462 C14.2594295,10.1538462 13.8461538,10.5671218 13.8461538,11.0769231 L13.8461538,16.6153846 C13.8461538,17.125186 14.2594295,17.5384615 14.7692308,17.5384615 C15.2790321,17.5384615 15.6923077,17.125186 15.6923077,16.6153846 L15.6923077,11.0769231 C15.6923077,10.5671218 15.2790321,10.1538462 14.7692308,10.1538462 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
BasicDataOne.displayName = 'BasicDataOne';
export default BasicDataOne;
