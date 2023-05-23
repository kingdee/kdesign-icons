import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const DuplicateDelivery = ({
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
          id="317.重复投递"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="重复投递"
            transform="translate(4.000000, 5.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M19.5824176,3.66720084 C19.9829757,3.66720084 20.3076923,4.07759454 20.3076923,4.58384079 L20.3076923,21.08336 C20.3076923,21.5896063 19.9829757,22 19.5824176,22 L0.725274742,22 C0.324716544,22 0,21.5896063 0,21.08336 L0,4.58384079 C0,4.07759454 0.324716544,3.66720084 0.725274742,3.66720084 L19.5824176,3.66720084 Z M23.0769231,0.000641002656 C23.5867243,0.000641002656 24,0.411034704 24,0.917280961 L24,20.2724862 C24,20.7203195 23.5867243,21.08336 23.0769231,21.08336 C22.5671218,21.08336 22.1538462,20.7203195 22.1538462,20.2724862 L22.1529231,1.83327992 L22.1538462,1.83392092 L22.1538462,-8.33679185e-16 L23.0769231,0.000641002656 Z M10.6153846,16.5001603 C9.85068258,16.5001603 9.23076923,17.1157507 9.23076923,17.8751202 C9.23076923,18.6344897 9.85068258,19.2500801 10.6153846,19.2500801 C11.3800866,19.2500801 12,18.6344897 12,17.8751202 C12,17.1157507 11.3800866,16.5001603 10.6153846,16.5001603 Z M10.9968005,6.87544069 L10.2339688,6.87544069 C9.72416752,6.87544069 9.31089184,7.28583442 9.31089184,7.79208065 C9.31089184,7.8174878 9.31195569,7.84288403 9.31408042,7.86820347 L9.86558391,14.4400951 C9.89808083,14.8273385 10.2240701,15.1252003 10.6153846,15.1252003 C11.0066992,15.1252003 11.3326884,14.8273385 11.3651853,14.4400951 L11.9166888,7.86820347 C11.9590255,7.36370593 11.5814982,6.92064846 11.0734577,6.87860695 C11.0479605,6.87649704 11.022386,6.87544069 10.9968005,6.87544069 Z M22.1538462,0.000641002656 L22.1529231,1.83327992 L3.51479291,1.83392092 C3.1030303,1.83392092 2.76923077,1.42352722 2.76923077,0.917280961 C2.76923077,0.411034704 3.1030303,0.000641002656 3.51479291,0.000641002656 L22.1538462,0.000641002656 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
DuplicateDelivery.displayName = 'DuplicateDelivery';
export default DuplicateDelivery;
