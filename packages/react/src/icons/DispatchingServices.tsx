import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const DispatchingServices = ({
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
          id="804.调度服务"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(2.000000, 4.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M1.47368421,8.18059071e-16 L26.5263158,8.18059071e-16 C26.9171611,8.18059071e-16 27.2919985,0.155262712 27.5683679,0.431632112 C27.8447373,0.708001512 28,1.08283886 28,1.47368421 L28,22.1052632 C28,22.9191565 27.3402091,23.5789474 26.5263158,23.5789474 L1.47368421,23.5789474 C0.659790895,23.5789474 0,22.9191565 0,22.1052632 L0,1.47368421 C0,0.659790895 0.659790895,8.18059071e-16 1.47368421,8.18059071e-16 Z M16.5096842,16.2090526 L19.8962105,20.6153684 L23.6084211,16.2090526 L20.6227368,16.2090526 L20.6227368,9.32547368 C20.6227368,7.45094737 18.8366316,5.89178947 16.8869474,5.89178947 C14.9372632,5.89178947 13.2941053,7.37284211 13.2941053,9.32547368 L13.3029474,15.5061053 C13.3029474,16.744 12.5661053,17.696 11.2987368,17.696 C10.0313684,17.696 8.82442105,16.744 8.82442105,15.5061053 L8.82442105,8.84947368 L11.7364211,8.84947368 L8.12294737,4.37389474 L4.51389474,8.84947368 L7.30357895,8.84947368 L7.30357895,15.5061053 C7.30357895,17.3393684 8.64463158,19.1490526 11.2972632,19.1490526 C13.9528421,19.1490526 14.7191579,17.696 14.7191579,15.5061053 L14.7103158,9.32547368 C14.7103158,8.32926316 15.7684211,7.37284211 16.8869474,7.37284211 C18.004,7.37284211 19.1608421,8.21284211 19.1608421,9.32547368 L19.1608421,16.2075789 L16.5082105,16.2075789 L16.5096842,16.2090526 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
DispatchingServices.displayName = 'DispatchingServices';
export default DispatchingServices;
