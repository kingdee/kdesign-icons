import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const IntegrationGuidelines = ({
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
          id="1931集成指引"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g id="rcgyy_jczy_48_48" transform="translate(3.000000, 2.000000)">
            <g id="编组-24" fill="#999999">
              <path
                d="M20.9998708,16 C24.3365337,16 27.0303532,18.6938775 26.9997417,22 C26.9997417,25.3061224 24.3059221,28 20.9998708,28 C17.6938196,28 15,25.3061224 15,22 C15,18.6938776 17.6938196,16 20.9998708,16 Z M5,1 L5,3 C5,3.55228475 5.44771525,4 6,4 L7,4 C7.55228475,4 8,3.55228475 8,3 L8,1 L15,1 L15,3 C15,3.55228475 15.4477153,4 16,4 L17,4 C17.5522847,4 18,3.55228475 18,3 L18,1 L21,1 C22.1045695,1 23,1.8954305 23,3 L23.0003581,14.2521271 C22.3610104,14.0875387 21.6907281,14 21,14 C16.581722,14 13,17.581722 13,22 C13,23.4576273 13.3898332,24.8242042 14.0709285,26.0011597 L2,26 C0.8954305,26 0,25.1045695 0,24 L0,3 C0,1.8954305 0.8954305,1 2,1 L5,1 Z M23.4487977,19.3061225 L19.7141842,20.5306122 C19.6223495,20.5612245 19.5305147,20.6530612 19.4999031,20.744898 L18.2754397,24.4795918 C18.2264611,24.5530612 18.2362569,24.6265306 18.2734805,24.6843265 L18.3060513,24.7244898 C18.3366629,24.7857143 18.4591092,24.7857143 18.550944,24.755102 L22.2855574,23.5306122 C22.3773922,23.5 22.4692269,23.4081633 22.4998385,23.3163265 L23.724302,19.5816327 C23.7855252,19.4897959 23.7549136,19.3979592 23.6936904,19.3367347 C23.6630788,19.2755102 23.5406325,19.2755102 23.4487977,19.3061225 Z M21,21 C21.5666667,21 22,21.4666667 22,22 C22,22.5666667 21.5666667,23 21,23 C20.4333333,23 20,22.5333333 20,22 C20,21.4333333 20.4666667,21 21,21 Z M13.5,14 L7.5,14 C7.22385763,14 7,14.2238576 7,14.5 L7,15 C7,15.2761424 7.22385763,15.5 7.5,15.5 L13.5,15.5 C13.7761424,15.5 14,15.2761424 14,15 L14,14.5 C14,14.2238576 13.7761424,14 13.5,14 Z M5.5,14 L4.5,14 C4.22385763,14 4,14.2238576 4,14.5 L4,15 C4,15.2761424 4.22385763,15.5 4.5,15.5 L5.5,15.5 C5.77614237,15.5 6,15.2761424 6,15 L6,14.5 C6,14.2238576 5.77614237,14 5.5,14 Z M17.5,9 L7.5,9 C7.22385763,9 7,9.22385763 7,9.5 L7,10 C7,10.2761424 7.22385763,10.5 7.5,10.5 L17.5,10.5 C17.7761424,10.5 18,10.2761424 18,10 L18,9.5 C18,9.22385763 17.7761424,9 17.5,9 Z M5.5,9 L4.5,9 C4.22385763,9 4,9.22385763 4,9.5 L4,10 C4,10.2761424 4.22385763,10.5 4.5,10.5 L5.5,10.5 C5.77614237,10.5 6,10.2761424 6,10 L6,9.5 C6,9.22385763 5.77614237,9 5.5,9 Z M7,0 L7,3 L6,3 L6,0 L7,0 Z M17,0 L17,3 L16,3 L16,0 L17,0 Z"
                id="形状"
                fill={fill}
              ></path>
            </g>
            <g id="指南针-(5)" transform="translate(16.000000, 17.000000)"></g>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
IntegrationGuidelines.displayName = 'IntegrationGuidelines';
export default IntegrationGuidelines;
