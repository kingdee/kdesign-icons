import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const BatchNumberManagement = ({
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
          id="877.批号管理"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(2.000000, 5.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M23.1874123,22.4241331 L1.31328924,22.4241331 L4.37482461,8.50691521 C4.37482461,7.6692724 5.15915013,6.99017839 6.12447384,6.99017839 L26.2489477,6.99017839 C27.2170776,6.99017839 28,7.6692724 28,8.50691521 L24.9370615,20.9073963 C24.9370615,21.7450391 24.152736,22.4241331 23.1874123,22.4241331 L23.1874123,22.4241331 Z M12.0693526,16.8833434 L11.1938264,19.6179595 L14,19.6179595 L14.8755262,16.8833434 L12.0693526,16.8833434 Z M16.2786129,16.8833434 L15.4030868,19.6179595 L18.2092604,19.6179595 L19.0847865,16.8833434 L16.2786129,16.8833434 Z M20.4878733,16.8833434 L19.6123472,19.6179595 L22.4185207,19.6179595 L23.2940469,16.8833434 L20.4878733,16.8833434 Z M23.84546,5.61655642 L4.85748647,5.61655642 C3.89075967,5.61655642 3.06153538,6.08518741 3.06153538,7.02946482 L0,20.6913209 L0,1.70755662 C0,0.764682301 0.782922429,7.7886963e-16 1.74964923,7.7886963e-16 L10.4992985,7.7886963e-16 C11.4674283,7.7886963e-16 12.5660453,0.764682301 12.5660453,1.70755662 L12.5660453,2.78793345 L22.1561435,2.78793345 C23.1214672,2.78793345 23.8005612,3.33654039 23.8005612,4.2808178 L23.84546,5.61795951 L23.84546,5.61655642 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
BatchNumberManagement.displayName = 'BatchNumberManagement';
export default BatchNumberManagement;
