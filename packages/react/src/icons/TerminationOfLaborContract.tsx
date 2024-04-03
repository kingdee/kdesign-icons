import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const TerminationOfLaborContract = ({
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
          id="1989.劳动合同解除"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <path
            d="M23,18 C26.3137085,18 29,20.6862915 29,24 C29,27.3137085 26.3137085,30 23,30 C19.6862915,30 17,27.3137085 17,24 C17,20.6862915 19.6862915,18 23,18 Z M19.5816837,3 L25.9976711,9.27586207 L25.9980478,17.6727041 C25.0892888,17.2413452 24.072829,17 23,17 C19.1340068,17 16,20.1340068 16,24 C16,25.3574603 16.3863955,26.6246731 17.0552004,27.6976524 L15.0477047,29 L12.2316471,27.1828023 L9.50529995,29 C7.88965935,27.7885349 6.9641263,27.1828023 6.7287008,27.1828023 C6.49327529,27.1828023 5.58370836,27.7885349 4,29 L4,4 C4,3.44771525 4.44771525,3 5,3 L19.5816837,3 Z M27,23 L19,23 L19,25 L27,25 L27,23 Z M14.9988355,16.4482759 L8.58284814,16.4482759 L8.58284814,18.2413793 L14.9988355,18.2413793 L14.9988355,16.4482759 Z M21.4148229,11.9655172 L8.58284814,11.9655172 L8.58284814,13.7586207 L21.4148229,13.7586207 L21.4148229,11.9655172 Z"
            id="形状结合"
            fill={fill}
          ></path>
        </g>
      </svg>
    </IconWrapper>
  );
};
TerminationOfLaborContract.displayName = 'TerminationOfLaborContract';
export default TerminationOfLaborContract;
