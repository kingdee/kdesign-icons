import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const UniversalEntry = ({
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
          id="1457-通用录入"
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
              d="M0.666666656,24 C0.2984768,24 0,23.701523 0,23.3333337 L0,23.3333337 L0,16.857143 C0,16.6803323 0.070237856,16.510763 0.195262144,16.385739 L0.195262144,16.385739 L16.3857384,0.195262992 C16.6460879,-0.065087664 17.0681979,-0.065087664 17.3285473,0.195262992 L17.3285473,0.195262992 L23.8047379,6.67145234 C24.0650873,6.93180299 24.0650873,7.35391234 23.8047379,7.61426168 L23.8047379,7.61426168 L8.75066666,22.666667 L23.3333333,22.666667 C23.7015232,22.666667 24,22.9651443 24,23.3333337 C24,23.6606137 23.7641664,23.932811 23.4531675,23.989259 L23.3333333,24 L0.666666656,24 Z M16.8573333,1.60933368 L1.33333334,17.1320003 L1.33333334,22.666667 L6.86533334,22.666667 L22.3906667,7.14266699 L16.8573333,1.60933368 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
UniversalEntry.displayName = 'UniversalEntry';
export default UniversalEntry;
