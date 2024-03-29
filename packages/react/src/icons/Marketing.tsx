import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const Marketing = ({
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
          id="838.营销"
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
              d="M14,28 C8.99828183,28 4.37650352,25.331615 1.87564437,21 C-0.625214789,16.6683848 -0.625214789,11.331615 1.87564437,7 C4.37650352,2.66838481 8.99828183,0 14,0 C21.7319865,0 28,6.26801346 28,14 C28,21.7319863 21.7319865,28 14,28 L14,28 Z M14.0000001,25.0526314 C20.1041999,25.0526314 25.0526316,20.1041997 25.0526316,13.9999999 C25.0526316,7.89580007 20.1041999,2.9473684 14.0000001,2.9473684 C7.89580037,2.9473684 2.94736884,7.89580017 2.94736884,13.9999999 C2.94736884,20.1041996 7.89580037,25.0526314 14.0000001,25.0526314 L14.0000001,25.0526314 Z M13.9602106,19.0842104 L8.21431594,22.105263 L9.31221067,15.7065262 L4.6642107,11.176421 L11.0880001,10.2421052 L13.9616843,4.4210526 L16.8338948,10.2421052 L23.2591579,11.176421 L18.6096843,15.7065262 L19.707579,22.105263 L13.9602106,19.0842104 L13.9602106,19.0842104 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
Marketing.displayName = 'Marketing';
export default Marketing;
