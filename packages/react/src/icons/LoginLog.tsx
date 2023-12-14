import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const LoginLog = ({
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
          id="430.登陆日志"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(6.000000, 3.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M18.75,20 L2.46999999,20 C1.64625,20 1.24999998,20.47 1.24999998,21.25 L1.24999998,22.5 C1.24999998,23.19 1.905,23.75 2.46999999,23.75 L20,23.75 C20,24.44 19.5425,25 18.9775,25 L2.04499998,25 C0.916249981,25 1.13686838e-15,23.88125 1.13686838e-15,22.5 L1.13686838e-15,1.25000001 C1.13686838e-15,0.559644061 0.559644061,5.68434189e-16 1.24999998,5.68434189e-16 L18.75,5.68434189e-16 C19.4403559,5.68434189e-16 20,0.559644061 20,1.25000001 L20,18.75 C20,19.4403559 19.4403559,20 18.75,20 Z M20,21.25 L20,22.5 L3.12499998,22.5 C2.77982202,22.5 2.49999999,22.220178 2.49999999,21.875 C2.49999999,21.529822 2.77982202,21.25 3.12499998,21.25 L20,21.25 Z M3.75,6.25000003 L3.75,7.50000001 L4.99999998,7.50000001 L4.99999998,6.25000003 L3.75,6.25000003 Z M3.75,12.5 L3.75,13.75 L4.99999998,13.75 L4.99999998,12.5 L3.75,12.5 Z M7.50000001,6.25000003 L7.50000001,7.50000001 L17.5,7.50000001 L17.5,6.25000003 L7.50000001,6.25000003 Z M7.50000001,12.5 L7.50000001,13.75 L17.5,13.75 L17.5,12.5 L7.50000001,12.5 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
LoginLog.displayName = 'LoginLog';
export default LoginLog;
