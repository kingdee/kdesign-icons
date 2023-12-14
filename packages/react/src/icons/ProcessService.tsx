import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const ProcessService = ({
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
          id="1210-流程服务"
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
              d="M22.1538462,0 C23.1734487,0 24,0.826551245 24,1.84615385 L24,5.53846155 C24,6.55806413 23.1734487,7.3846154 22.1538462,7.3846154 L18.4615384,7.3846154 C17.4419359,7.3846154 16.6153846,6.55806413 16.6153846,5.53846155 L16.61472,4.45632 L7.7571428,4.45714287 C5.9346032,4.45714287 4.45714287,5.9346032 4.45714287,7.7571428 C4.45714287,9.51893118 5.83774747,10.958262 7.57608106,11.05226 L7.7571428,11.0571428 L16.2428572,11.0571428 C19.106848,11.0571428 21.4285715,13.3788662 21.4285715,16.2428572 C21.4285715,19.0369946 19.2187217,21.3149941 16.4514239,21.4244538 L16.2428572,21.4285715 L7.38432,21.42816 L7.3846154,22.1538462 C7.3846154,23.1734487 6.55806413,24 5.53846155,24 L1.84615385,24 C0.826551245,24 0,23.1734487 0,22.1538462 L0,18.4615384 C0,17.4419359 0.826551245,16.6153846 1.84615385,16.6153846 L5.53846155,16.6153846 C6.55806413,16.6153846 7.3846154,17.4419359 7.3846154,18.4615384 L7.38432,19.54272 L16.2428572,19.5428572 C18.0653968,19.5428572 19.5428572,18.0653968 19.5428572,16.2428572 C19.5428572,14.4810688 18.1622526,13.041738 16.4239189,12.94774 L16.2428572,12.9428572 L7.7571428,12.9428572 C4.89315195,12.9428572 2.57142857,10.6211338 2.57142857,7.7571428 C2.57142857,4.96300539 4.78127831,2.68500597 7.54857609,2.57554621 L7.7571428,2.57142857 L16.61472,2.57088 L16.6153846,1.84615385 C16.6153846,0.826551245 17.4419359,0 18.4615384,0 L22.1538462,0 Z M5.53846155,18.4615384 L1.84615385,18.4615384 L1.84615385,22.1538462 L5.53846155,22.1538462 L5.53846155,18.4615384 Z M22.1538462,1.84615385 L18.4615384,1.84615385 L18.4615384,5.53846155 L22.1538462,5.53846155 L22.1538462,1.84615385 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
ProcessService.displayName = 'ProcessService';
export default ProcessService;
