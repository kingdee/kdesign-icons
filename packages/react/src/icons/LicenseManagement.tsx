import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const LicenseManagement = ({
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
          id="872.许可管理"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(3.000000, 2.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M16.3263578,16.2959867 C16.0344983,18.2723352 17.5856504,19.259028 19.9190455,19.259028 L5.9260827,19.259028 C8.25947776,19.259028 9.19135427,18.2708537 8.72615678,16.2959867 C8.40318527,14.9329876 7.85946718,13.3373899 7.09648403,11.5106749 C5.15569195,8.41725972 5.67422419,4.28085399 8.31429403,1.83338184 C10.9514008,-0.611127278 14.2151909,-0.611127278 16.8537792,1.83338184 C19.490886,4.28085399 20.0123813,8.41725972 18.0715892,11.5091934 C17.3071245,13.3359084 16.5352523,14.8915051 16.3263578,16.2945051 L16.3263578,16.2959867 Z M2.0993148,19.259028 L23.0865367,19.259028 C24.2465674,19.259028 25.1858515,20.2546099 25.1858515,21.481309 L25.1858515,25.1851107 L5.48272788e-16,25.1851107 L5.48272788e-16,21.481309 C5.48272788e-16,20.2546099 0.939284108,19.259028 2.0993148,19.259028 L2.0993148,19.259028 Z M5.48272788e-16,26.6666314 L25.1858515,26.6666314 L25.1858515,28 L5.48272788e-16,28 L5.48272788e-16,26.6666314 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
LicenseManagement.displayName = 'LicenseManagement';
export default LicenseManagement;
