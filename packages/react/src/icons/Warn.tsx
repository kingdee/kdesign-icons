import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const Warn = ({
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
          id="1390-警告"
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
              d="M12,24 C5.372583,24 -5.62050406e-16,18.627417 -5.62050406e-16,12 C-5.62050406e-16,5.372583 5.372583,-5.62050406e-16 12,-5.62050406e-16 C18.627417,-5.62050406e-16 24,5.372583 24,12 C24,18.627417 18.627417,24 12,24 Z M12,22.5 C17.7989899,22.5 22.5,17.7989899 22.5,12 C22.5,6.20101013 17.7989899,1.5 12,1.5 C6.20101013,1.5 1.5,6.20101013 1.5,12 C1.5,17.7989899 6.20101013,22.5 12,22.5 Z M11.988,16.5 C12.408,16.5 12.7815,16.626 13.0785,16.929 C13.3515,17.2065 13.5,17.559 13.5,17.988 C13.5,18.441 13.35,18.7935 13.053,19.071 C12.756,19.3485 12.408,19.5 11.988,19.5 C11.5665,19.5 11.2185,19.35 10.9215,19.071 C10.6368277,18.7841149 10.4841574,18.3918444 10.5,17.988 C10.5,17.559 10.6245,17.2065 10.9215,16.929 C11.1993497,16.6410703 11.5866491,16.4850595 11.9865,16.5 L11.988,16.5 Z M12.0075,4.50000001 C12.5895,4.50000001 13.0605,4.97100001 13.0605,5.55300001 L13.0605,13.947 C13.0605,14.5285558 12.5890558,15 12.0075,15 C11.4259441,15 10.9545,14.5285558 10.9545,13.947 L10.9545,5.55300001 C10.9545,4.97100001 11.427,4.50000001 12.0075,4.50000001 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
Warn.displayName = 'Warn';
export default Warn;
