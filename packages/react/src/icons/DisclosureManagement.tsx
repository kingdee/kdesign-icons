import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const DisclosureManagement = ({
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
          id="793.披露管理"
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
              d="M23.9743211,22.9108712 L28,26.9350395 L26.9305138,28.0045257 L22.9063455,23.9788468 C19.7904114,26.5257328 15.2247547,26.1821408 12.5250925,23.1975976 C9.8254304,20.2130543 9.94005686,15.6359223 12.7857267,12.7902524 C15.6313966,9.94458251 20.2085286,9.82995605 23.1930719,12.5296182 C26.1776152,15.2292803 26.5212072,19.794937 23.9743211,22.9108712 L23.9743211,22.9108712 Z M24.0861036,11.3021124 C20.4955468,8.16868952 15.0917185,8.35105071 11.7205751,11.7194077 C8.34943166,15.0877647 8.16260219,20.4914404 11.293055,24.08459 L1.50604804,24.08459 C1.10637489,24.0853911 0.722839803,23.9269775 0.440227636,23.6443654 C0.15761547,23.3617532 -0.000798100621,22.9782181 3.02383591e-06,22.578545 L3.02383591e-06,1.50604197 C3.02383591e-06,0.675226428 0.669190223,0 1.50604804,0 L22.578551,0 C23.4108771,0 24.0861036,0.669184152 24.0861036,1.50604197 L24.0861036,11.3021124 Z M4.53172714,4.53625279 L4.53172714,6.04682648 L19.637464,6.04682648 L19.637464,4.53625279 L4.53172714,4.53625279 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
DisclosureManagement.displayName = 'DisclosureManagement';
export default DisclosureManagement;
