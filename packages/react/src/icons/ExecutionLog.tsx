import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const ExecutionLog = ({
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
          id="848.执行日志"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(3.000000, 2.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M1.47368421,19.1578947 L1.47368421,8.84210526 L5.89473684,8.84210526 L5.89473684,4.42105263 L1.47368421,4.42105263 L1.47368421,1.46631579 C1.47368421,0.663157895 2.13389474,0 2.94736842,0 L23.5789474,0 C24.3968421,0 25.0526316,0.655789474 25.0526316,1.46631579 L25.0526316,26.5336842 C25.0526316,27.3353684 24.3924211,28 23.5789474,28 L2.94736842,28 C2.12947368,28 1.47368421,27.3442105 1.47368421,26.5336842 L1.47368421,23.5789474 L5.89473684,23.5789474 L5.89473684,19.1578947 L1.47368421,19.1578947 Z M0,5.89473684 L4.42105263,5.89473684 L4.42105263,7.36842105 L0,7.36842105 L0,5.89473684 Z M0,20.6315789 L4.42105263,20.6315789 L4.42105263,22.1052632 L0,22.1052632 L0,20.6315789 Z M19.1578947,10.5707368 L13.0627368,16.7764211 L12.8004211,17.0446316 L10.0593684,13.9395789 C9.81427965,13.6867861 9.43942116,13.609806 9.11454299,13.7455517 C8.78966483,13.8812974 8.58101003,14.2020902 8.58863158,14.5541053 C8.58863158,14.7898947 8.67705263,15.0109474 8.84210526,15.1789474 L12.1932632,18.9029474 C12.3530851,19.0673446 12.5726143,19.1600965 12.8018947,19.1600965 C13.0311752,19.1600965 13.2507044,19.0673446 13.4105263,18.9029474 L20.3781053,11.8130526 C20.7170463,11.4688759 20.7170463,10.9163872 20.3781053,10.5722105 C20.2177729,10.4076431 19.9977583,10.3148257 19.768,10.3148257 C19.5382417,10.3148257 19.3182271,10.4076431 19.1578947,10.5722105 L19.1578947,10.5707368 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
ExecutionLog.displayName = 'ExecutionLog';
export default ExecutionLog;
