import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const CadreAppointment = ({
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
          id="772.干部任用"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(6.000000, 2.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M5.37735849,5.25 L1.79245283,0 L15.4150943,0 L11.8301887,5.25 L17.2075472,21 L8.60377358,28 L0,21 L5.37735849,5.25 Z M14.2107897,7 L19,13.2617184 L17.6836671,16.84375 L14.2107897,7 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
CadreAppointment.displayName = 'CadreAppointment';
export default CadreAppointment;
