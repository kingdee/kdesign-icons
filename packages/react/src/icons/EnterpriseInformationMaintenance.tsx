import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const EnterpriseInformationMaintenance = ({
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
          id="847.企业信息维护"
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
              d="M1.55555556,0 L17.1375556,0 C17.9966652,0 18.6931111,0.696445945 18.6931111,1.55555556 L18.6931111,27.9984444 L1.55555556,27.9984444 C0.696445945,27.9984444 0,27.3019985 0,26.4428889 L0,1.55555556 C0,0.696445945 0.696445945,0 1.55555556,0 Z M4.66666667,17.0862222 L4.66666667,20.2222222 L7.77777778,20.2222222 L7.77777778,17.0862222 L4.66666667,17.0862222 L4.66666667,17.0862222 Z M10.8888889,17.0862222 L10.8888889,20.2222222 L14,20.2222222 L14,17.0862222 L10.8888889,17.0862222 L10.8888889,17.0862222 Z M4.66666667,9.31933333 L4.66666667,12.446 L7.77777778,12.446 L7.77777778,9.31777778 L4.66666667,9.31777778 L4.66666667,9.31933333 Z M10.8888889,9.31933333 L10.8888889,12.446 L14,12.446 L14,9.31777778 L10.8888889,9.31777778 L10.8888889,9.31933333 Z M22.5773333,13.3855556 L27.244,16.1855556 C27.713079,16.4666343 28.0001147,16.9733765 28,17.5202222 L28,26.418 C28,27.2771096 27.3035541,27.9735556 26.4444444,27.9735556 L20.2222222,27.9735556 L20.2222222,14.7202222 C20.2221047,14.1599015 20.5233419,13.6428149 21.0108242,13.3665535 C21.4983064,13.0902921 22.0966957,13.0975507 22.5773333,13.3855556 L22.5773333,13.3855556 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
EnterpriseInformationMaintenance.displayName =
  'EnterpriseInformationMaintenance';
export default EnterpriseInformationMaintenance;
