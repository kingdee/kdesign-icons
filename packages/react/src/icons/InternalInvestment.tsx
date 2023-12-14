import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const InternalInvestment = ({
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
          id="866.内部投资"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(2.000000, 2.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M1.29328593,19.8728054 L7.35562371,13.8119412 L12.8609455,19.3187366 L19.0161193,13.1620892 L22.0369731,16.182943 L22.0369731,8.84153151 L14.6955616,8.84153151 L17.7164154,11.8623853 L12.8624191,16.7193287 L7.35857088,11.2140069 L0.535862104,17.8318871 C-1.11150091,12.0448969 1.12327031,5.85253654 6.08659227,2.45128742 C11.0499142,-0.949961686 17.6314647,-0.799221542 22.4338633,2.82569616 C27.2362619,6.45061386 29.1851857,12.7387952 27.2746051,18.4442963 C25.3640245,24.1497973 20.0213468,27.9962663 14.0044492,27.9981654 C8.54534344,27.9990669 3.58357065,24.8267765 1.29328593,19.8713318 L1.29328593,19.8728054 Z"
              id="路径"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
InternalInvestment.displayName = 'InternalInvestment';
export default InternalInvestment;
