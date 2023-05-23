import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const OrderOne = ({
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
          id="108.订单"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="订单"
            transform="translate(6.000000, 4.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M6.125,0.888888889 L6.125,1.77777778 C6.125,2.101984 6.21042825,2.40592068 6.35966458,2.66762445 L1.75,2.66666667 L1.75,22.2222222 L19.25,22.2222222 L19.25,2.66666667 L14.6403354,2.66762445 C14.764699,2.44953796 14.8447514,2.20212309 14.8679811,1.93809007 L14.875,1.77777778 L14.875,0.888888889 L20.125,0.888888889 C20.6082491,0.888888889 21,1.28685801 21,1.77777778 L21,23.1111111 C21,23.6020308 20.6082491,24 20.125,24 L0.875,24 C0.391750856,24 0,23.6020308 0,23.1111111 L0,1.77777778 C0,1.28685801 0.391750856,0.888888889 0.875,0.888888889 L6.125,0.888888889 Z M14.875,16.8888889 C15.3582491,16.8888889 15.75,17.286858 15.75,17.7777778 C15.75,18.2686975 15.3582491,18.6666667 14.875,18.6666667 L6.125,18.6666667 C5.64175088,18.6666667 5.25,18.2686975 5.25,17.7777778 C5.25,17.286858 5.64175088,16.8888889 6.125,16.8888889 L14.875,16.8888889 Z M14.875,11.5555556 C15.3582491,11.5555556 15.75,11.9535247 15.75,12.4444444 C15.75,12.9353642 15.3582491,13.3333333 14.875,13.3333333 L6.125,13.3333333 C5.64175088,13.3333333 5.25,12.9353642 5.25,12.4444444 C5.25,11.9535247 5.64175088,11.5555556 6.125,11.5555556 L14.875,11.5555556 Z M14.875,6.22222222 C15.3582491,6.22222222 15.75,6.62019135 15.75,7.11111111 C15.75,7.60203085 15.3582491,8 14.875,8 L6.125,8 C5.64175088,8 5.25,7.60203085 5.25,7.11111111 C5.25,6.62019135 5.64175088,6.22222222 6.125,6.22222222 L14.875,6.22222222 Z M13.125,0 C13.6082491,0 14,0.397969124 14,0.888888889 L14,1.77777778 C14,2.26869754 13.6082491,2.66666667 13.125,2.66666667 L7.875,2.66666667 C7.39175088,2.66666667 7,2.26869754 7,1.77777778 L7,0.888888889 C7,0.397969124 7.39175088,0 7.875,0 L13.125,0 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
OrderOne.displayName = 'OrderOne';
export default OrderOne;
