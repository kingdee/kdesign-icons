import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const MobilePhoneSolid = ({
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
          id="42.手机"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="手机"
            transform="translate(7.000000, 4.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M19,17.1428571 L19,20.5714286 C19,22.4649763 17.4533473,24 15.5454545,24 L3.45454545,24 C1.54665267,24 0,22.4649763 0,20.5714286 L0,17.1428571 L19,17.1428571 Z M9.5,18.8571429 C8.54605361,18.8571429 7.77272727,19.6246547 7.77272727,20.5714286 C7.77272727,21.5182024 8.54605361,22.2857143 9.5,22.2857143 C10.4539464,22.2857143 11.2272727,21.5182024 11.2272727,20.5714286 C11.2272727,19.6246547 10.4539464,18.8571429 9.5,18.8571429 Z M15.5454545,0 C17.4533473,0 19,1.53502371 19,3.42857143 L19,15.4285714 L0,15.4285714 L0,3.42857143 C0,1.53502371 1.54665267,0 3.45454545,0 L15.5454545,0 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
MobilePhoneSolid.displayName = 'MobilePhoneSolid';
export default MobilePhoneSolid;
