import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const RadioBoxUnchecked = ({
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
          id="1244-单选框-未选"
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
              d="M12,22.5 C17.7989899,22.5 22.5,17.7989899 22.5,12 C22.5,6.20101013 17.7989899,1.5 12,1.5 C6.20101013,1.5 1.5,6.20101013 1.5,12 C1.5,17.7989899 6.20101013,22.5 12,22.5 Z M12,24 C5.372583,24 0,18.627417 0,12 C0,5.372583 5.372583,0 12,0 C18.627417,0 24,5.372583 24,12 C24,18.627417 18.627417,24 12,24 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
RadioBoxUnchecked.displayName = 'RadioBoxUnchecked';
export default RadioBoxUnchecked;
