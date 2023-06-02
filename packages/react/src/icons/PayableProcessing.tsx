import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const PayableProcessing = ({
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
          id="858.应付处理"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(2.000000, 3.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M26.5263158,5.89473684 L19.8947368,5.89473684 C16.2322169,5.89473684 13.2631579,8.86379587 13.2631579,12.5263158 C13.2631579,16.1888357 16.2322169,19.1578947 19.8947368,19.1578947 L26.5263158,19.1578947 L26.5263158,23.5789474 C26.5263158,24.3928407 25.8665249,25.0526316 25.0526316,25.0526316 L1.47368421,25.0526316 C0.659790895,25.0526316 1.09074543e-15,24.3928407 1.09074543e-15,23.5789474 L1.09074543e-15,1.47368421 C1.09074543e-15,0.659790895 0.659790895,-1.09074543e-15 1.47368421,-1.09074543e-15 L25.0526316,-1.09074543e-15 C25.4434769,-1.09074543e-15 25.8183143,0.155262712 26.0946837,0.431632112 C26.3710531,0.708001512 26.5263158,1.08283886 26.5263158,1.47368421 L26.5263158,5.89473684 Z M19.8947368,7.36842105 L26.5263158,7.36842105 C27.3402091,7.36842105 28,8.02821195 28,8.84210526 L28,16.2105263 C28,16.6013717 27.8447373,16.976209 27.5683679,17.2525784 C27.2919985,17.5289478 26.9171611,17.6842105 26.5263158,17.6842105 L19.8947368,17.6842105 C17.0461102,17.6842105 14.7368421,15.3749424 14.7368421,12.5263158 C14.7368421,9.67768919 17.0461102,7.36842105 19.8947368,7.36842105 L19.8947368,7.36842105 Z M19.8947368,14.7368421 C21.1155768,14.7368421 22.1052632,13.7471558 22.1052632,12.5263158 C22.1052632,11.3054758 21.1155768,10.3157895 19.8947368,10.3157895 C18.6738969,10.3157895 17.6842105,11.3054758 17.6842105,12.5263158 C17.6842105,13.7471558 18.6738969,14.7368421 19.8947368,14.7368421 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
PayableProcessing.displayName = 'PayableProcessing';
export default PayableProcessing;