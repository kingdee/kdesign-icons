import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const BackTurnSingleArrow = ({
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
          id="970.后翻单箭头"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(8.000000, 2.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M2.17268135,0.372773184 C1.67565043,-0.124257728 0.869804079,-0.124257728 0.372773167,0.372773184 C-0.0860245297,0.831570962 -0.121316748,1.55350142 0.266896756,2.05278109 L0.372773167,2.17268136 L12.1990909,14 L0.372773167,25.8273187 C-0.0860245297,26.2861165 -0.121316748,27.0080468 0.266896756,27.5073265 L0.372773167,27.6272268 C0.831570985,28.0860245 1.55350132,28.1213167 2.05278103,27.7331032 L2.17268135,27.6272268 L14.8999541,14.8999541 C15.3587519,14.4411563 15.394044,13.7192259 15.0058305,13.2199462 L14.8999541,13.1000459 L2.17268135,0.372773184 Z"
              id="路径"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
BackTurnSingleArrow.displayName = 'BackTurnSingleArrow';
export default BackTurnSingleArrow;
