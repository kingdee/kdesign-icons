import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const CalendarTwo = ({
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
          id="147.日历"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="日历"
            transform="translate(5.000000, 4.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M14.6666667,3.69230769 L7.33333333,3.69230769 L7.33333333,4.61538462 C7.33333333,5.12518591 6.92292765,5.53846154 6.41666667,5.53846154 C5.91040569,5.53846154 5.5,5.12518591 5.5,4.61538462 L5.5,3.69230769 L1.83333333,3.69230769 L1.83333333,7.38461538 L20.1666667,7.38461538 L20.1666667,3.69230769 L16.5,3.69230769 L16.5,4.61538462 C16.5,5.12518591 16.0895943,5.53846154 15.5833333,5.53846154 C15.0770724,5.53846154 14.6666667,5.12518591 14.6666667,4.61538462 L14.6666667,3.69230769 Z M16.5,1.84615385 L21.0833333,1.84615385 C21.5895943,1.84615385 22,2.25942947 22,2.76923077 L22,23.0769231 C22,23.5867243 21.5895943,24 21.0833333,24 L0.916666667,24 C0.410405659,24 0,23.5867243 0,23.0769231 L0,2.76923077 C0,2.25942947 0.410405659,1.84615385 0.916666667,1.84615385 L5.5,1.84615385 L5.5,0.923076923 C5.5,0.413275628 5.91040569,0 6.41666667,0 C6.92292765,0 7.33333333,0.413275628 7.33333333,0.923076923 L7.33333333,1.84615385 L14.6666667,1.84615385 L14.6666667,0.923076923 C14.6666667,0.413275628 15.0770724,0 15.5833333,0 C16.0895943,0 16.5,0.413275628 16.5,0.923076923 L16.5,1.84615385 Z M20.1666667,9.23076923 L1.83333333,9.23076923 L1.83333333,22.1538462 L20.1666667,22.1538462 L20.1666667,9.23076923 Z M6.41666667,12 L15.5833333,12 C16.0895943,12 16.5,12.4132757 16.5,12.9230769 C16.5,13.4328782 16.0895943,13.8461538 15.5833333,13.8461538 L6.41666667,13.8461538 C5.91040569,13.8461538 5.5,13.4328782 5.5,12.9230769 C5.5,12.4132757 5.91040569,12 6.41666667,12 Z M6.41666667,17.5384615 L15.5833333,17.5384615 C16.0895943,17.5384615 16.5,17.9517372 16.5,18.4615385 C16.5,18.9713397 16.0895943,19.3846154 15.5833333,19.3846154 L6.41666667,19.3846154 C5.91040569,19.3846154 5.5,18.9713397 5.5,18.4615385 C5.5,17.9517372 5.91040569,17.5384615 6.41666667,17.5384615 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
CalendarTwo.displayName = 'CalendarTwo';
export default CalendarTwo;