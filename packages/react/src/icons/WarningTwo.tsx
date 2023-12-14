import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const WarningTwo = ({
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
          id="202.Toast-警告"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="Toast-警告"
            transform="translate(4.000000, 4.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M12,0 C18.627417,0 24,5.372583 24,12 C24,18.627417 18.627417,24 12,24 C5.372583,24 0,18.627417 0,12 C0,5.372583 5.372583,0 12,0 Z M12,0.857142857 C5.84596992,0.857142857 0.857142857,5.84596992 0.857142857,12 C0.857142857,18.15403 5.84596992,23.1428571 12,23.1428571 C18.15403,23.1428571 23.1428571,18.15403 23.1428571,12 C23.1428571,5.84596992 18.15403,0.857142857 12,0.857142857 Z M12,16.2857143 C12.7100804,16.2857143 13.2857143,16.8613482 13.2857143,17.5714286 C13.2857143,18.2815089 12.7100804,18.8571429 12,18.8571429 C11.2899196,18.8571429 10.7142857,18.2815089 10.7142857,17.5714286 C10.7142857,16.8613482 11.2899196,16.2857143 12,16.2857143 Z M13.0604466,6 C13.1618866,6 13.2468639,6.07048578 13.2690729,6.16515195 L13.2746655,6.21963785 L12.8673221,14.3678438 C12.8616199,14.4818886 12.767491,14.5714286 12.6533038,14.5714286 L11.3466962,14.5714286 C11.232509,14.5714286 11.1383801,14.4818886 11.1326779,14.3678438 L10.725535,6.22498664 C10.7196251,6.10678755 10.8106534,6.0061773 10.9288525,6.00026737 L13.0604466,6 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
WarningTwo.displayName = 'WarningTwo';
export default WarningTwo;
