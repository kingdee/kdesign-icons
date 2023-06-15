import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const AccountStatementQuery = ({
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
          id="812.账表查询"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(2.000000, 1.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M23.9743211,24.4169131 L28,28.4410814 L26.9305138,29.5105676 L22.9063455,25.4848887 C19.7904114,28.0317748 15.2247547,27.6881828 12.5250925,24.7036395 C9.8254304,21.7190963 9.94005686,17.1419642 12.7857267,14.2962944 C15.6313966,11.4506245 20.2085286,11.335998 23.1930719,14.0356601 C26.1776152,16.7353223 26.5212072,21.300979 23.9743211,24.4169131 L23.9743211,24.4169131 Z M11.293055,25.5906319 L1.50604804,25.5906319 C1.10637489,25.5914331 0.722839803,25.4330195 0.440227636,25.1504073 C0.15761547,24.8677952 -0.000798100621,24.4842601 3.02383591e-06,24.0845869 L3.02383591e-06,3.01208393 C3.02383591e-06,2.18126839 0.669190223,1.50604197 1.50604804,1.50604197 L6.04230082,1.50604197 L6.04230082,4.53172106 L18.1268904,4.53172106 L18.1268904,1.50604197 L22.578551,1.50604197 C23.4108771,1.50604197 24.0861036,2.17522612 24.0861036,3.01208393 L24.0861036,12.8081543 C20.4955468,9.67473149 15.0917185,9.85709267 11.7205751,13.2254497 C8.34943166,16.5938067 8.16260219,21.9974824 11.293055,25.5906319 Z M7.55287451,0 L16.6163167,0 L16.6163167,3.02114738 L7.55287451,3.02114738 L7.55287451,0 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
AccountStatementQuery.displayName = 'AccountStatementQuery';
export default AccountStatementQuery;
