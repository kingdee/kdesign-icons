import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const AdministrativeOrganizationChart = ({
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
          id="1748.行政组织结构图"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组-3"
            transform="translate(3.000000, 1.600000)"
            fill="#333333"
          >
            <g
              id="编组"
              transform="translate(12.600000, 14.200000) rotate(90.000000) translate(-12.600000, -14.200000) translate(-1.600000, 1.600000)"
            >
              <path
                d="M16.2,5.36762692e-14 L27.2,5.36762692e-14 C27.8627417,5.23772598e-14 28.4,0.5372583 28.4,1.2 L28.4,4.8 C28.4,5.4627417 27.8627417,6 27.2,6 L16.2,6 C15.5372583,6 15,5.4627417 15,4.8 L15,1.2 C15,0.5372583 15.5372583,5.35353871e-14 16.2,5.36762692e-14 Z"
                id="矩形"
                fill={fill}
              ></path>
              <path
                d="M16.2,9.6 L27.2,9.6 C27.8627417,9.6 28.4,10.1372583 28.4,10.8 L28.4,14.4 C28.4,15.0627417 27.8627417,15.6 27.2,15.6 L16.2,15.6 C15.5372583,15.6 15,15.0627417 15,14.4 L15,10.8 C15,10.1372583 15.5372583,9.6 16.2,9.6 Z"
                id="矩形备份-21"
                fill={fill}
              ></path>
              <path
                d="M16.2,19.2 L27.2,19.2 C27.8627417,19.2 28.4,19.7372583 28.4,20.4 L28.4,24 C28.4,24.6627417 27.8627417,25.2 27.2,25.2 L16.2,25.2 C15.5372583,25.2 15,24.6627417 15,24 L15,20.4 C15,19.7372583 15.5372583,19.2 16.2,19.2 Z"
                id="矩形备份-22"
                fill={fill}
              ></path>
              <rect
                id="矩形备份-22"
                transform="translate(3.000000, 12.600000) rotate(90.000000) translate(-3.000000, -12.600000) "
                x="-7"
                y="9.6"
                width="20"
                height="6"
                rx="1.2"
              ></rect>
            </g>
            <g id="编组-2" transform="translate(2.400000, 5.400000)">
              <rect
                id="Combined-Shape"
                transform="translate(10.100000, 2.000000) rotate(90.000000) translate(-10.100000, -2.000000) "
                x="8.1"
                y="1.5"
                width="4"
                height="1"
              ></rect>
              <rect
                id="Combined-Shape"
                transform="translate(10.100000, 7.500000) rotate(90.000000) translate(-10.100000, -7.500000) "
                x="7.6"
                y="7"
                width="5"
                height="1"
              ></rect>
              <rect
                id="Combined-Shape"
                x="4.61852778e-14"
                y="4"
                width="20.4"
                height="1.2"
              ></rect>
              <rect
                id="Combined-Shape"
                transform="translate(0.600000, 10.600000) rotate(90.000000) translate(-0.600000, -10.600000) "
                x="-4.8"
                y="10"
                width="10.8"
                height="1.2"
              ></rect>
              <rect
                id="Combined-Shape备份"
                transform="translate(19.800000, 10.600000) rotate(90.000000) translate(-19.800000, -10.600000) "
                x="14.4"
                y="10"
                width="10.8"
                height="1.2"
              ></rect>
            </g>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
AdministrativeOrganizationChart.displayName = 'AdministrativeOrganizationChart';
export default AdministrativeOrganizationChart;
