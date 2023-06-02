import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const DemandApplication = ({
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
          id="525.需求申请"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(6.000000, 4.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M3.15800254,1.01135122 L3.15800254,3.03405362 L6.3158902,3.03405362 L6.3158902,1.01135122 L13.6842948,1.01135122 L13.6842948,3.03405362 L16.8421824,3.03405362 L16.8421824,1.01135122 L18.952704,1.01135122 C19.5316501,1.01135122 20.0000069,1.4614025 20.0000069,2.0227024 L20.0000069,22.3219659 C20.0000069,22.8802317 19.526387,23.3333171 18.952704,23.3333171 L1.04748094,23.3333171 C0.768874441,23.3330505 0.501835774,23.2262502 0.305325484,23.0364972 C0.108815167,22.8467441 -0.00100416939,22.589645 6.9203098e-06,22.3219659 L6.9203098e-06,2.0227024 C6.9203098e-06,1.46443655 0.473798033,1.01135122 1.04748094,1.01135122 L3.15800254,1.01135122 Z M16.2499956,17.4999878 L3.75000431,17.4999878 C3.51988583,17.4999878 3.33333793,17.6865357 3.33333793,17.9166542 C3.33333793,18.1467727 3.51988583,18.3333206 3.75000431,18.3333206 L3.75000431,18.3333206 L16.2499956,18.3333206 C16.4801141,18.3333206 16.666662,18.1467727 16.666662,17.9166542 C16.666662,17.6865357 16.4801141,17.4999878 16.2499956,17.4999878 L16.2499956,17.4999878 Z M16.2499956,12.4999913 L3.75000431,12.4999913 C3.51988583,12.4999913 3.33333793,12.6865392 3.33333793,12.9166577 C3.33333793,13.1467762 3.51988583,13.333324 3.75000431,13.333324 L3.75000431,13.333324 L16.2499956,13.333324 C16.4801141,13.333324 16.666662,13.1467762 16.666662,12.9166577 C16.666662,12.6865392 16.4801141,12.4999913 16.2499956,12.4999913 L16.2499956,12.4999913 Z M16.2499956,7.49999477 L3.75000431,7.49999477 C3.51988583,7.49999477 3.33333793,7.68654264 3.33333793,7.91666115 C3.33333793,8.14677966 3.51988583,8.33332753 3.75000431,8.33332753 L3.75000431,8.33332753 L16.2499956,8.33332753 C16.4801141,8.33332753 16.666662,8.14677966 16.666662,7.91666115 C16.666662,7.68654264 16.4801141,7.49999477 16.2499956,7.49999477 L16.2499956,7.49999477 Z M5.26326102,0 L5.26326102,2.0227024 L4.21063178,2.0227024 L4.21063178,0 L5.26326102,0 Z M15.7895532,0 L15.7895532,2.0227024 L14.736924,2.0227024 L14.736924,0 L15.7895532,0 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
DemandApplication.displayName = 'DemandApplication';
export default DemandApplication;