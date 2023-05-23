import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const Location = ({
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
          id="23.定位"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="定位"
            transform="translate(6.000000, 4.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M10.5,0 C16.2989899,0 21,4.60507115 21,10.2857143 C21,15.2009765 17.6138369,19.7242372 10.9697661,23.8659956 C10.6831455,24.0446681 10.3168545,24.0446681 10.0302339,23.8659956 C3.38616314,19.7242372 0,15.2009765 0,10.2857143 C0,4.60507115 4.70101013,0 10.5,0 Z M10.5,6.85714286 C8.56700337,6.85714286 7,8.39216657 7,10.2857143 C7,12.179262 8.56700337,13.7142857 10.5,13.7142857 C12.4329966,13.7142857 14,12.179262 14,10.2857143 C14,8.39216657 12.4329966,6.85714286 10.5,6.85714286 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
Location.displayName = 'Location';
export default Location;
