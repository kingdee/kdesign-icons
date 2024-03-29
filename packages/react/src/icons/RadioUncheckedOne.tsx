import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const RadioUncheckedOne = ({
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
          id="197.问券单选未选"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="问券单选未选"
            transform="translate(4.000000, 4.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M12,0 C18.627417,0 24,5.372583 24,12 C24,18.627417 18.627417,24 12,24 C5.372583,24 0,18.627417 0,12 C0,5.372583 5.372583,0 12,0 Z M12,1.20000001 C6.03532471,1.20000001 1.20000001,6.03532471 1.20000001,12 C1.20000001,17.9646752 6.03532471,22.8 12,22.8 C17.9646752,22.8 22.8,17.9646752 22.8,12 C22.8,6.03532471 17.9646752,1.20000001 12,1.20000001 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
RadioUncheckedOne.displayName = 'RadioUncheckedOne';
export default RadioUncheckedOne;
