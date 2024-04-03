import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const InterviewerManagement = ({
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
          id="1912运营管理"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="dwhl_cbdysjz_48_48"
            transform="translate(3.000000, 2.000000)"
            fill="#999999"
            fillRule="nonzero"
          >
            <g id="Group-4">
              <path
                d="M23,0 C24.1045695,0 25,0.8954305 25,2 L25,26 C25,27.1045695 24.1045695,28 23,28 L2,28 C0.8954305,28 0,27.1045695 0,26 L0,2 C0,0.8954305 0.8954305,0 2,0 L23,0 Z M10,14 C9.44771525,14 9,14.4477153 9,15 L9,23 C9,23.5522847 9.44771525,24 10,24 C10.5522847,24 11,23.5522847 11,23 L11,15 C11,14.4477153 10.5522847,14 10,14 Z M15,17 C14.4477153,17 14,17.4477153 14,18 L14,23 C14,23.5522847 14.4477153,24 15,24 C15.5522847,24 16,23.5522847 16,23 L16,18 C16,17.4477153 15.5522847,17 15,17 Z M20,12 C19.4477153,12 19,12.4477153 19,13 L19,23 C19,23.5522847 19.4477153,24 20,24 C20.5522847,24 21,23.5522847 21,23 L21,13 C21,12.4477153 20.5522847,12 20,12 Z M5,17 C4.44771525,17 4,17.4477153 4,18 L4,23 C4,23.5522847 4.44771525,24 5,24 C5.55228475,24 6,23.5522847 6,23 L6,18 C6,17.4477153 5.55228475,17 5,17 Z M20.8600139,5.91625119 L15.2440037,10.5099921 L10.2906815,7.25262059 L4.01051977,11.9516341 L4.91437487,13.64973 L10.4735828,9.53380676 L15.2440037,12.5357147 L21.291342,7.50451344 L20.8600139,5.91625119 Z"
                id="形状"
                fill={fill}
              ></path>
            </g>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
InterviewerManagement.displayName = 'InterviewerManagement';
export default InterviewerManagement;
