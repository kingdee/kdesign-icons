import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const ToGoods = ({
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
          id="835.要货"
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
              d="M14,19.7042222 L18.6666667,15.0375556 L17.6291111,14 L14,17.6291111 L14,9.33333333 L12.4444444,9.33333333 L12.4444444,17.6291111 L8.81533333,14 L7.77777778,15.0375556 L12.4444444,19.7042222 L12.4444444,20.2222222 L14,20.2222222 L14,19.7042222 L14,19.7042222 Z M27.9502222,7.38422222 C27.9813333,7.50866667 28,7.64088889 28,7.77777778 L28,23.3333333 C28,23.7458923 27.8361116,24.141554 27.5443883,24.4332772 C27.2526651,24.7250005 26.8570034,24.8888889 26.4444444,24.8888889 L1.55555556,24.8888889 C0.696445945,24.8888889 5.75671198e-16,24.1924429 5.75671198e-16,23.3333333 L5.75671198e-16,7.77777778 C5.75671198e-16,7.64088889 0.0171111111,7.50866667 0.0497777778,7.38266667 C0.0189611287,7.34839548 0.00131979801,7.30429215 5.75671198e-16,7.25822222 L3.5,0.518 C3.5,0.233333333 4.284,1.1513424e-15 5.25,1.1513424e-15 L22.75,1.1513424e-15 C23.716,1.1513424e-15 24.5,0.233333333 24.5,0.518 L28,7.25977778 C27.9986802,7.30584771 27.9810389,7.34995103 27.9502222,7.38422222 Z M22.75,1.55551624 L5.25,1.55551624 C5.0642348,1.55472026 4.8786485,1.56719665 4.69466667,1.59288889 L2.29133333,6.22222222 L25.7086667,6.22222222 L23.3053333,1.59288889 C23.1213515,1.56719665 22.9357652,1.55472026 22.75,1.55551624 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
ToGoods.displayName = 'ToGoods';
export default ToGoods;
