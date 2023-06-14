import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const More = ({
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
          id="27.更多"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="更多"
            transform="translate(4.000000, 4.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M12,0 C18.627417,0 24,5.372583 24,12 C24,18.627417 18.627417,24 12,24 C5.372583,24 0,18.627417 0,12 C0,5.372583 5.372583,0 12,0 Z M5.57142857,10.7142857 C4.8613482,10.7142857 4.28571429,11.2899196 4.28571429,12 C4.28571429,12.7100804 4.8613482,13.2857143 5.57142857,13.2857143 C6.28150897,13.2857143 6.85714286,12.7100804 6.85714286,12 C6.85714286,11.2899196 6.28150897,10.7142857 5.57142857,10.7142857 Z M12,10.7142857 C11.2899196,10.7142857 10.7142857,11.2899196 10.7142857,12 C10.7142857,12.7100804 11.2899196,13.2857143 12,13.2857143 C12.7100804,13.2857143 13.2857143,12.7100804 13.2857143,12 C13.2857143,11.2899196 12.7100804,10.7142857 12,10.7142857 Z M18.4285714,10.7142857 C17.7184911,10.7142857 17.1428571,11.2899196 17.1428571,12 C17.1428571,12.7100804 17.7184911,13.2857143 18.4285714,13.2857143 C19.1386518,13.2857143 19.7142857,12.7100804 19.7142857,12 C19.7142857,11.2899196 19.1386518,10.7142857 18.4285714,10.7142857 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
More.displayName = 'More';
export default More;
