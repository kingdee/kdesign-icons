import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const DepreciationManagement = ({
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
          id="807.折旧管理"
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
              d="M10.3158083,4.42103001 L7.16217434e-05,4.42103001 L7.16217434e-05,5.89470669 L10.3158083,5.89470669 L10.3158083,10.3157367 L14,8.87595459 L17.6841917,10.3157367 L17.6841917,5.89470669 L27.9999284,5.89470669 L27.9999284,4.42103001 L17.6841917,4.42103001 L17.6841917,0 L10.3158083,0 L10.3158083,4.42103001 Z M3.53383006e-05,1.48399241 C3.53383006e-05,0.664628179 0.663226124,0 1.46637991,0 L26.5336201,0 C26.9249787,0.00194719498 27.2994898,0.159486772 27.5745619,0.437876305 C27.849634,0.716265837 28.0026728,1.09263854 27.9999647,1.48399241 L27.9999647,20.6211577 C27.9999647,21.4405219 27.3367739,22.1051501 26.5336201,22.1051501 L1.46637991,22.1051501 C1.07502126,22.1032029 0.700510169,21.9456633 0.425438089,21.6672738 C0.150366009,21.3888842 -0.00267276676,21.0125115 3.53383006e-05,20.6211577 L3.53383006e-05,1.48399241 Z M19.8947067,17.6841201 C19.4877621,17.6841201 19.1578683,18.0140138 19.1578683,18.4209584 C19.1578683,18.827903 19.4877621,19.1577967 19.8947067,19.1577967 L24.3157367,19.1577967 C24.7226813,19.1577967 25.052575,18.827903 25.052575,18.4209584 C25.052575,18.0140138 24.7226813,17.6841201 24.3157367,17.6841201 L19.8947067,17.6841201 L19.8947067,17.6841201 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
DepreciationManagement.displayName = 'DepreciationManagement';
export default DepreciationManagement;
