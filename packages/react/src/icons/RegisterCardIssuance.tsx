import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const RegisterCardIssuance = ({
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
          id="708.注册发卡"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(4.000000, 6.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M24,5.45454545 L24,18.5454546 C24,19.1479469 23.5115833,19.6363636 22.9090909,19.6363636 L1.09090908,19.6363636 C0.488416628,19.6363636 0,19.1479469 0,18.5454546 L0,5.45454545 L24,5.45454545 Z M21.8181818,13.0909091 L15.1363636,13.0909091 L14.1818182,16.3636364 L20.8636364,16.3636364 L21.8181818,13.0909091 Z M22.9090909,0 C23.5115833,0 24,0.488416628 24,1.09090908 L24,3.27272726 L0,3.27272726 L0,1.09090908 C0,0.488416628 0.488416628,0 1.09090908,0 L22.9090909,0 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
RegisterCardIssuance.displayName = 'RegisterCardIssuance';
export default RegisterCardIssuance;
