import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const OnSiteVisa = ({
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
          id="607.现场签证"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(4.000000, 7.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M21.4285715,0 C21.9019584,0 22.2857143,0.383755934 22.2857143,0.857142866 L22.2857143,16.2857611 C22.2857143,16.759148 21.9019584,17.142904 21.4285715,17.142904 L0.857142866,17.142904 C0.383755934,17.142904 0,16.759148 0,16.2857611 L0,0.857142866 C0,0.383755934 0.383755934,0 0.857142866,0 L21.4285715,0 Z M7.71428574,4.28576109 L4.2857143,4.28576109 C3.81232737,4.28576109 3.42857144,4.66951703 3.42857144,5.14290393 L3.42857144,5.14290393 L3.42857144,12.0000468 C3.42857144,12.4734337 3.81232737,12.8571897 4.2857143,12.8571897 L4.2857143,12.8571897 L7.71428574,12.8571897 L7.71428574,12.8571897 L7.86835826,12.8433799 C8.26821403,12.770804 8.57142858,12.4208352 8.57142858,12.0000468 L8.57142858,12.0000468 L8.57142858,5.14290393 C8.57142858,4.66951703 8.18767267,4.28576109 7.71428574,4.28576109 L7.71428574,4.28576109 Z M16.7142858,10.2857611 L11.5714286,10.2857611 C11.3347351,10.2857611 11.1428572,10.4776391 11.1428572,10.7143325 C11.1428572,10.951026 11.3347351,11.142904 11.5714286,11.142904 L11.5714286,11.142904 L16.7142858,11.142904 L16.7142858,11.142904 L16.8125533,11.1315851 C17.0018856,11.0871671 17.1428572,10.9172126 17.1428572,10.7143325 C17.1428572,10.4776391 16.9509792,10.2857611 16.7142858,10.2857611 L16.7142858,10.2857611 Z M19.2857144,6.00004682 L11.5714286,6.00004682 C11.3347351,6.00004682 11.1428572,6.19192478 11.1428572,6.42861823 C11.1428572,6.66531171 11.3347351,6.85718966 11.5714286,6.85718966 L11.5714286,6.85718966 L19.2857144,6.85718966 L19.2857144,6.85718966 L19.3839819,6.84587078 C19.5733141,6.80145279 19.7142858,6.63149836 19.7142858,6.42861823 C19.7142858,6.19192478 19.5224078,6.00004682 19.2857144,6.00004682 L19.2857144,6.00004682 Z M23.1428572,18.8571912 C23.6162441,18.8571912 24,18.4734353 24,18.0000484 L24,0.857191175 L23.1417547,0.858746473 L23.1428572,17.1429056 C23.1428572,17.5636939 22.8396426,17.9136628 22.4397868,17.9862387 L22.2857143,18.0000484 L0.857142866,18.0016862 L0.857142866,18.8571912 L23.1428572,18.8571912 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
OnSiteVisa.displayName = 'OnSiteVisa';
export default OnSiteVisa;