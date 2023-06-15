import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const LightingSolid = ({
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
          id="44.闪电"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="闪电"
            transform="translate(7.000000, 4.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M6.37481265,12.8535399 L0.858199351,12.8535399 C0.209725553,12.8535399 -0.203809325,12.1612747 0.10363198,11.5903798 L6.10266088,0.450645273 C6.25213353,0.173086029 6.54195151,0 6.85722825,0 L16.2842737,0 C16.9687589,0 17.3770283,0.762768022 16.9973442,1.33222673 L12.7435757,7.71212394 L17.1412778,7.71212394 C17.904787,7.71212394 18.2871537,8.63512968 17.7472712,9.17494831 L3.17820104,23.7422935 C2.5015657,24.4188487 1.393083,23.6460094 1.79408266,22.7772797 L6.37481265,12.8535399 Z"
              id="路径"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
LightingSolid.displayName = 'LightingSolid';
export default LightingSolid;
