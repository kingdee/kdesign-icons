import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const Applications = ({
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
          id="1159-全部应用--面性"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(4.000000, 4.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M10.5,13.5 L10.5,21 C10.5,22.6568542 9.15685421,24 7.5,24 L3,24 C1.34314576,24 0,22.6568542 0,21 L0,16.5 C0,14.8431458 1.34314576,13.5 3,13.5 L10.5,13.5 Z M21,13.5 C22.6568542,13.5 24,14.8431458 24,16.5 L24,21 C24,22.6568542 22.6568542,24 21,24 L16.5,24 C14.8431458,24 13.5,22.6568542 13.5,21 L13.5,13.5 L21,13.5 Z M7.5,0 C9.15685421,0 10.5,1.34314576 10.5,3 L10.5,10.5 L3,10.5 C1.34314576,10.5 0,9.15685421 0,7.5 L0,3 C0,1.34314576 1.34314576,0 3,0 L7.5,0 Z M21,0 C21.8055978,0 22.5629908,0.32035024 23.1213204,0.87867968 C23.6146934,1.3720527 23.9241959,2.02337437 23.9908202,2.77310598 L23.9908202,2.77310598 L24,3 L24,7.5 C24,8.30559779 23.6796498,9.06299082 23.1213203,9.62132051 C22.6279472,10.1146934 21.9766255,10.4241959 21.226894,10.4908202 L21.226894,10.4908202 L21,10.5 L13.5,10.5 L13.5,3 C13.5,2.19440214 13.8203502,1.43700906 14.3786797,0.878679584 C14.8720528,0.385306624 15.5233744,0.075804064 16.273106,0.009179776 L16.273106,0.009179776 L16.5,0 L21,0 Z M16.5448533,1.9989936 L16.4078211,2.00412758 C16.1737775,2.02524461 15.9580118,2.12777462 15.7928932,2.29289322 C15.6059184,2.47986803 15.5,2.73028723 15.5,3 L15.5,3 L15.5,8.5 L20.9551467,8.5010064 L21.0921789,8.49587242 C21.3262226,8.47475539 21.5419882,8.37222541 21.7071067,8.20710691 C21.8940816,8.020132 22,7.7697127 22,7.5 L22,7.5 L22.0010064,3.04485325 L21.9958724,2.90782109 C21.9747554,2.67377741 21.8722254,2.45801181 21.7071069,2.29289331 C21.520132,2.1059184 21.2697127,2 21,2 L21,2 L16.5448533,1.9989936 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
Applications.displayName = 'Applications';
export default Applications;