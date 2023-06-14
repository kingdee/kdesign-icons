import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const Lock = ({
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
          id="162.锁"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="锁"
            transform="translate(6.000000, 4.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M16.625,6.85714286 L18.375,6.85714286 C19.8247474,6.85714286 21,8.00841068 21,9.42857143 L21,21.4285714 C21,22.8487322 19.8247474,24 18.375,24 L2.625,24 C1.17525254,24 0,22.8487322 0,21.4285714 L0,9.42857143 C0,8.00841068 1.17525254,6.85714286 2.625,6.85714286 L4.375,6.85714286 L4.375,6 C4.375,2.6862915 7.11725596,0 10.5,0 C13.882744,0 16.625,2.6862915 16.625,6 L16.625,6.85714286 Z M14.875,6.85714286 L14.875,6 C14.875,3.63306536 12.9162457,1.71428571 10.5,1.71428571 C8.08375425,1.71428571 6.125,3.63306536 6.125,6 L6.125,6.85714286 L14.875,6.85714286 Z M11.375,13.9436266 C11.8980762,14.2400347 12.25,14.7940437 12.25,15.4285714 C12.25,16.0630992 11.8980762,16.6171082 11.375,16.9135162 L11.375,18.8571429 C11.375,19.3305297 10.9832491,19.7142857 10.5,19.7142857 C10.0167509,19.7142857 9.625,19.3305297 9.625,18.8571429 L9.625,16.9135162 C9.10192377,16.6171082 8.75,16.0630992 8.75,15.4285714 C8.75,14.7940437 9.10192377,14.2400347 9.625,13.9436266 L9.625,12 C9.625,11.5266131 10.0167509,11.1428571 10.5,11.1428571 C10.9832491,11.1428571 11.375,11.5266131 11.375,12 L11.375,13.9436266 L11.375,13.9436266 Z M2.625,8.57142857 C2.14175086,8.57142857 1.75,8.95518454 1.75,9.42857143 L1.75,21.4285714 C1.75,21.9019583 2.14175086,22.2857143 2.625,22.2857143 L18.375,22.2857143 C18.8582491,22.2857143 19.25,21.9019583 19.25,21.4285714 L19.25,9.42857143 C19.25,8.95518454 18.8582491,8.57142857 18.375,8.57142857 L2.625,8.57142857 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
Lock.displayName = 'Lock';
export default Lock;
