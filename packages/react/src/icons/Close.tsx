import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const Close = ({
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
          id="24.关闭"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="关闭"
            transform="translate(4.000000, 4.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M12,0 C18.627417,0 24,5.372583 24,12 C24,18.627417 18.627417,24 12,24 C5.372583,24 0,18.627417 0,12 C0,5.372583 5.372583,0 12,0 Z M8.32037727,7.10819419 C7.98564214,6.77345908 7.44292929,6.77345908 7.10819419,7.10819419 C6.79920793,7.41718044 6.77543975,7.90337845 7.03688966,8.23962805 L7.10819419,8.32037727 L10.7878169,12 L7.10819419,15.6796228 C6.77345908,16.0143579 6.77345908,16.5570707 7.10819419,16.8918058 C7.41718044,17.200792 7.90337845,17.2245602 8.23962805,16.9631103 L8.32037727,16.8918058 L12,13.2121831 L15.6796228,16.8918058 C16.0143579,17.2265409 16.5570707,17.2265409 16.8918058,16.8918058 C17.200792,16.5828195 17.2245602,16.0966215 16.9631103,15.7603719 L16.8918058,15.6796228 L13.2121831,12 L16.8918058,8.32037727 C17.2265409,7.98564214 17.2265409,7.44292929 16.8918058,7.10819419 C16.5828195,6.79920793 16.0966215,6.77543975 15.7603719,7.03688966 L15.6796228,7.10819419 L12,10.7878169 L8.32037727,7.10819419 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
Close.displayName = 'Close';
export default Close;
