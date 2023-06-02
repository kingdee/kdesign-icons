import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const DynamicFormTwo = ({
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
          id="1029.动态表格-2"
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
              d="M26.9230769,25.8461538 C27.5178451,25.8461538 28,26.3283088 28,26.9230769 C28,27.5178451 27.5178451,28 26.9230769,28 L15.0769231,28 C14.4821549,28 14,27.5178451 14,26.9230769 C14,26.3283088 14.4821549,25.8461538 15.0769231,25.8461538 L26.9230769,25.8461538 Z M4.30769231,15.0769231 C6.31772626,15.0769231 8.00621575,16.4536186 8.48168343,18.3155323 C8.52506113,18.3105129 8.56989345,18.3076923 8.61538462,18.3076923 L26.9230769,18.3076923 C27.5178451,18.3076923 28,18.7898472 28,19.3846154 C28,19.9793835 27.5178451,20.4615385 26.9230769,20.4615385 L8.61538462,20.4615385 C8.56989345,20.4615385 8.52506113,20.4587179 8.48105299,20.4532419 C8.00621575,22.3156122 6.31772626,23.6923077 4.30769231,23.6923077 C1.92861953,23.6923077 0,21.7636882 0,19.3846154 C0,17.0055426 1.92861953,15.0769231 4.30769231,15.0769231 Z M4.30769231,17.2307692 C3.11815592,17.2307692 2.15384615,18.195079 2.15384615,19.3846154 C2.15384615,20.5741518 3.11815592,21.5384615 4.30769231,21.5384615 C5.4972287,21.5384615 6.46153846,20.5741518 6.46153846,19.3846154 C6.46153846,18.195079 5.4972287,17.2307692 4.30769231,17.2307692 Z M26.9230769,10.7692308 C27.5178451,10.7692308 28,11.2513857 28,11.8461538 C28,12.440922 27.5178451,12.9230769 26.9230769,12.9230769 L15.0769231,12.9230769 C14.4821549,12.9230769 14,12.440922 14,11.8461538 C14,11.2513857 14.4821549,10.7692308 15.0769231,10.7692308 L26.9230769,10.7692308 Z M4.30769231,0 C6.31772626,0 8.00621575,1.37669552 8.48168343,3.23860923 C8.52506113,3.23358984 8.56989345,3.23076923 8.61538462,3.23076923 L26.9230769,3.23076923 C27.5178451,3.23076923 28,3.71292413 28,4.30769231 C28,4.90246048 27.5178451,5.38461538 26.9230769,5.38461538 L8.61538462,5.38461538 C8.56989345,5.38461538 8.52506113,5.38179478 8.48105299,5.37631887 C8.00621575,7.23868909 6.31772626,8.61538462 4.30769231,8.61538462 C1.92861953,8.61538462 0,6.68676509 0,4.30769231 C0,1.92861953 1.92861953,0 4.30769231,0 Z M4.30769231,2.15384615 C3.11815592,2.15384615 2.15384615,3.11815592 2.15384615,4.30769231 C2.15384615,5.4972287 3.11815592,6.46153846 4.30769231,6.46153846 C5.4972287,6.46153846 6.46153846,5.4972287 6.46153846,4.30769231 C6.46153846,3.11815592 5.4972287,2.15384615 4.30769231,2.15384615 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
DynamicFormTwo.displayName = 'DynamicFormTwo';
export default DynamicFormTwo;