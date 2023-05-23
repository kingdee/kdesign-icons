import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const Share = ({
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
          id="999.分享(回来）"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(2.000000, 2.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M13.9386997,-6.74932637e-16 L13.9386997,1.9789234 L2.82703348,1.9789234 C2.42583935,1.9789234 2.06776757,2.31653305 1.9931491,2.78639053 L1.97892344,2.96838512 L1.97892344,24.7365427 C1.97892344,25.2362534 2.29241807,25.6293865 2.67907642,25.7105801 L2.82703348,25.7260045 L24.8778945,25.7260045 C25.2790885,25.7260045 25.6371603,25.3883948 25.7117788,24.9185374 L25.7260045,24.7365427 L25.7260045,12.8089328 L27.7049279,12.8089328 L27.7049279,24.7365427 C27.7049279,26.2647159 26.5988563,27.5457625 25.1528226,27.691186 L24.8778945,27.7049279 L2.82703348,27.7049279 C1.34149715,27.7049279 0.148041084,26.5137739 0.0127747304,25.0199622 L0,24.7365427 L0,2.96838512 C0,1.44021204 1.10607159,0.159165476 2.55210526,0.0137419015 L2.82703348,-6.74932637e-16 L13.9386997,-6.74932637e-16 Z M28,0.618687808 L28,2.52793905 L26.0509706,2.52793905 L25.5896159,2.53577271 C18.8523816,2.76491863 13.4335957,7.99292452 13.1960878,14.4929603 L13.1960878,14.4929603 L13.189102,14.8372526 L16.2979057,11.7280419 L17.6972159,13.1273521 L12.297038,18.52753 L6.69979729,12.9302893 L8.04984179,11.5802448 L11.2121575,14.7422643 L11.2166708,14.4746374 C11.4702281,6.78074726 18.0147262,0.618687808 26.0509706,0.618687808 L26.0509706,0.618687808 L28,0.618687808 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
Share.displayName = 'Share';
export default Share;
