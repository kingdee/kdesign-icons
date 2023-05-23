import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const BrowseTheSvnRepository = ({
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
          id="1492-浏览SVN资源库"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(4.000000, 6.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M22.5,10.929 L24,9.639 L24,18 C23.988,19.0005 23.487,19.5 22.5,19.5 L12.531,19.5 L14.2755,18 L22.5,18 L22.5,10.929 Z M17.202,19.5000532 L1.5,19.5000532 C0.4995,19.506 0,19.005 0,18 L0,1.5 C0.0479999883,0.4995 0.548999991,0 1.5,0 L9.8925,0 C10.293237,0 10.6772819,0.160499905 10.959,0.4455 L13.053,2.56199999 C13.3350837,2.84737015 13.719743,3.00782494 14.121,3.00749999 L22.5,3 C23.469,3 23.97,3.49949998 24,4.5 L24,18 C23.988,19.0005 23.487,19.5000532 22.5,19.5000532 L17.202,19.5000532 Z M22.5,12.7845 C22.599,7.2615 22.599,4.5 22.5,4.5 L14.1225,4.5075 C13.3192485,4.5081554 12.5492841,4.18666152 11.985,3.615 L9.8925,1.5 L1.5,1.5 L1.5,18 L22.5,18 L22.5,12.7845 Z M24,9.639 L22.5315,10.902 L24,9.639 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
BrowseTheSvnRepository.displayName = 'BrowseTheSvnRepository';
export default BrowseTheSvnRepository;
