import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const Round = ({
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
          id="1190-圆形"
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
              d="M12,0 C5.372583,0 0,5.372583 0,12 C0,18.627417 5.372583,24 12,24 C18.627417,24 24,18.627417 24,12 C24,5.372583 18.627417,0 12,0 Z M12,1.71428571 C17.6806431,1.71428571 22.2857143,6.31935686 22.2857143,12 C22.2857143,17.6806431 17.6806431,22.2857143 12,22.2857143 C6.31935686,22.2857143 1.71428571,17.6806431 1.71428571,12 C1.71428571,6.31935686 6.31935686,1.71428571 12,1.71428571 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
Round.displayName = 'Round';
export default Round;
