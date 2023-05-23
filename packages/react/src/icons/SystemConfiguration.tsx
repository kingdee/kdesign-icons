import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const SystemConfiguration = ({
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
          id="855.系统配置"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(2.000000, 4.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M11.6562963,8.88888889 L8.31111111,14.8148148 L1.48148148,14.8148148 C1.08856816,14.8148148 0.711747551,14.6587306 0.43391588,14.3808989 C0.156084208,14.1030673 0,13.7262467 0,13.3333333 L0,10.3703704 C0,9.55217074 0.663281852,8.88888889 1.48148148,8.88888889 L11.6562963,8.88888889 Z M8.19111111,17.7777778 L11.6133333,23.7037037 L1.48148148,23.7037037 C1.08856816,23.7037037 0.711747551,23.5476195 0.43391588,23.2697878 C0.156084208,22.9919562 0,22.6151355 0,22.2222222 L0,19.2592593 C0,18.8663459 0.156084208,18.4895253 0.43391588,18.2116937 C0.711747551,17.933862 1.08856816,17.7777778 1.48148148,17.7777778 L8.19259259,17.7777778 L8.19111111,17.7777778 Z M1.48148148,-4.4408921e-16 L23.7037037,-4.4408921e-16 C24.096617,-4.4408921e-16 24.4734376,0.156084208 24.7512693,0.43391588 C25.029101,0.711747551 25.1851852,1.08856816 25.1851852,1.48148148 L25.1851852,4.44444444 C25.1851852,5.26264407 24.5219033,5.92592593 23.7037037,5.92592593 L1.48148148,5.92592593 C0.663281852,5.92592593 0,5.26264407 0,4.44444444 L0,1.48148148 C0,0.663281852 0.663281852,-4.4408921e-16 1.48148148,-4.4408921e-16 Z M15.6340741,8.88888889 L22.7377778,8.88888889 C23.2608404,8.88888889 23.7450899,9.1648897 24.0118519,9.61481481 L28,16.3466667 L24.0148148,22.9837037 C23.7471208,23.4304456 23.2645092,23.7037037 22.7437037,23.7037037 L15.6237037,23.7037037 C15.1048499,23.7037037 14.623803,23.4322794 14.3555556,22.9881481 L10.3703704,16.3807407 L14.3585185,9.61777778 C14.6248091,9.1662594 15.1098799,8.88907608 15.6340741,8.88888889 L15.6340741,8.88888889 Z M19.2592593,19.2592593 C20.8956585,19.2592593 22.2222222,17.9326956 22.2222222,16.2962963 C22.2222222,14.659897 20.8956585,13.3333333 19.2592593,13.3333333 C17.62286,13.3333333 16.2962963,14.659897 16.2962963,16.2962963 C16.2962963,17.9326956 17.62286,19.2592593 19.2592593,19.2592593 L19.2592593,19.2592593 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
SystemConfiguration.displayName = 'SystemConfiguration';
export default SystemConfiguration;
