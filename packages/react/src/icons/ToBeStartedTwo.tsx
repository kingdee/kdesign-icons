import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const ToBeStartedTwo = ({
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
          id="1383-待开始"
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
              d="M12,0 C18.627417,0 24,5.372583 24,12 C24,18.627417 18.627417,24 12,24 C5.372583,24 0,18.627417 0,12 C0,5.372583 5.372583,0 12,0 Z M12,1.2 C6.03532471,1.2 1.2,6.03532471 1.2,12 C1.2,17.9646752 6.03532471,22.8 12,22.8 C17.9646752,22.8 22.8,17.9646752 22.8,12 C22.8,6.03532471 17.9646752,1.2 12,1.2 Z M17.4,10.8 C17.7313709,10.8 18,11.0686292 18,11.4 C18,11.7313709 17.7313709,12 17.4,12 L6.6,12 C6.26862917,12 6,11.7313709 6,11.4 C6,11.0686292 6.26862917,10.8 6.6,10.8 L17.4,10.8 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
ToBeStartedTwo.displayName = 'ToBeStartedTwo';
export default ToBeStartedTwo;
