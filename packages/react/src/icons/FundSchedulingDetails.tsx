import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const FundSchedulingDetails = ({
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
          id="527.资金调度明细"
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
              d="M16.35132,2.5 C16.9857184,2.5 17.5,3.01428155 17.5,3.64868 L17.5,22.1846533 C17.5,22.8190518 16.9857184,23.3333333 16.35132,23.3333333 L1.14868,23.3333333 C0.514281547,23.3333333 0,22.8190518 0,22.1846533 L0,3.64868 C0,3.01428155 0.514281547,2.5 1.14868,2.5 L16.35132,2.5 Z M17.6666667,0 C18.9553311,0 20,1.16592515 20,2.60416667 L20,2.60416667 L20,20.8333333 L18.8333333,20.8333333 L18.8333333,2.60430701 C18.8333333,1.88518627 18.3109988,1.30222368 17.6666667,1.30222368 L17.6666667,1.30222368 L2.5,1.30222368 L2.5,0 L17.6666667,0 Z M13.75,15.8333333 L2.91666667,15.8333333 C2.68654803,15.8333333 2.5,16.0198813 2.5,16.25 C2.5,16.4545499 2.64739597,16.6246737 2.84177032,16.6599536 L2.91666667,16.6666667 L13.75,16.6666667 C13.9801187,16.6666667 14.1666667,16.4801187 14.1666667,16.25 C14.1666667,16.0198813 13.9801187,15.8333333 13.75,15.8333333 Z M13.75,11.6666667 L2.91666667,11.6666667 C2.68654803,11.6666667 2.5,11.8532147 2.5,12.0833333 C2.5,12.2878833 2.64739597,12.458007 2.84177032,12.4932869 L2.91666667,12.5 L13.75,12.5 C13.9801187,12.5 14.1666667,12.313452 14.1666667,12.0833333 C14.1666667,11.8532147 13.9801187,11.6666667 13.75,11.6666667 Z M8.75,6.66666667 L2.91666667,6.66666667 C2.68654803,6.66666667 2.5,6.85321467 2.5,7.08333333 C2.5,7.28788325 2.64739597,7.45800701 2.84177032,7.49328691 L2.91666667,7.5 L8.75,7.5 C8.98011867,7.5 9.16666667,7.313452 9.16666667,7.08333333 C9.16666667,6.85321467 8.98011867,6.66666667 8.75,6.66666667 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
FundSchedulingDetails.displayName = 'FundSchedulingDetails';
export default FundSchedulingDetails;