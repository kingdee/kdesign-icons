import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const ExceptionType = ({
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
          id="1944异常类型"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="devops_psqx_48_48"
            transform="translate(4.000000, 2.000000)"
            fill="#999999"
            fillRule="nonzero"
          >
            <path
              d="M5,1 L5,2 C5,3.0543618 5.81587779,3.91816512 6.85073766,3.99451426 L7,4 L17,4 C18.1045695,4 19,3.1045695 19,2 L19,1 L23,1 C23.5522847,1 24,1.44771525 24,2 L24,27 C24,27.5522847 23.5522847,28 23,28 L1,28 C0.44771525,28 0,27.5522847 0,27 L0,2 C0,1.44771525 0.44771525,1 1,1 L5,1 Z M11.4726371,8.04658741 C11.3418365,8.12777403 11.2315465,8.23806405 11.1503598,8.36886471 L3.94801833,19.9726371 C3.65676386,20.4418804 3.80105233,21.0583857 4.27029563,21.3496402 C4.42863813,21.4479217 4.61129431,21.5 4.79765849,21.5 L19.2023415,21.5 C19.7546263,21.5 20.2023415,21.0522847 20.2023415,20.5 C20.2023415,20.3136358 20.1502632,20.1309796 20.0519817,19.9726371 L12.8496402,8.36886471 C12.5583857,7.89962141 11.9418804,7.75533294 11.4726371,8.04658741 Z M12,17.5 C12.5522847,17.5 13,17.9477153 13,18.5 C13,19.0522847 12.5522847,19.5 12,19.5 C11.4477153,19.5 11,19.0522847 11,18.5 C11,17.9477153 11.4477153,17.5 12,17.5 Z M13,10.5 L12.5,16.5 L11.5,16.5 L11,10.5 L13,10.5 Z M18,0 L18,2 C18,2.55228475 17.5522847,3 17,3 L7,3 C6.44771525,3 6,2.55228475 6,2 L6,0 L18,0 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
ExceptionType.displayName = 'ExceptionType';
export default ExceptionType;
