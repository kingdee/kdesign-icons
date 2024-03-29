import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const ChannelStorage = ({
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
          id="892.渠道入库"
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
              d="M12.4467432,21.7812489 L12.4467432,27.9920165 L3.73424367,28.0402464 C2.94856291,28.0402464 3.08702942,27.5812844 3.08702942,27.0071929 L3.08702942,11.2235664 L1.68369466,11.2235664 C1.34764111,11.567399 0.599299628,11.6825284 0.151228222,11.2235664 C-0.0743632853,10.7646044 -0.0821423028,9.84668032 0.367484907,9.73155086 L13.5342499,0.172694188 C13.9838771,-0.0575647293 14.0943391,-0.0575647293 14.5455222,0.172694188 L27.5302581,9.73155086 C27.9798853,9.96180978 28.203921,10.6494749 27.7558496,11.2235664 C27.4182403,12.026361 26.6325595,11.3589213 26.1844881,11.1302182 L24.8838364,11.2235664 L24.8838364,26.8936192 C24.8838364,27.4661549 24.9491801,27.9251169 24.3875351,27.9251169 C24.0359235,27.9251169 19.9846112,27.948454 15.5583502,27.9733468 L15.5583502,21.7812489 L20.2257607,21.7812489 L14.0025467,14.045794 L7.77933276,21.7812489 L12.4467432,21.7812489 Z"
              id="路径"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
ChannelStorage.displayName = 'ChannelStorage';
export default ChannelStorage;
