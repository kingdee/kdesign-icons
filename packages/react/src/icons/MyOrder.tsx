import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const MyOrder = ({
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
          id="1327-我的订单"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(5.000000, 4.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M4.10258823,1.41176471 L4.10258823,2.82352942 L1.41176471,2.82352942 L1.41176471,22.5882353 L19.7647059,22.5882353 L19.7647059,2.82352942 L17.1444706,2.82352942 L17.1444706,1.41176471 L19.7647059,1.41176471 C20.544402,1.41176471 21.1764706,2.0438333 21.1764706,2.82352942 L21.1764706,22.5882353 C21.1764706,23.3679314 20.544402,24 19.7647059,24 L1.41176471,24 C0.63206859,24 0,23.3679314 0,22.5882353 L0,2.82352942 C0,2.0438333 0.63206859,1.41176471 1.41176471,1.41176471 L4.10258823,1.41176471 Z M4.23529413,9.88235294 L16.9411765,9.88235294 L16.9411765,11.2941176 L4.23529413,11.2941176 L4.23529413,9.88235294 Z M4.23529413,15.5294118 L16.9411765,15.5294118 L16.9411765,16.9411765 L4.23529413,16.9411765 L4.23529413,15.5294118 Z M7.05882352,1.41176471 L7.05882352,2.82352942 L14.1176471,2.82352942 L14.1176471,1.41176471 L7.05882352,1.41176471 Z M7.05882352,0 L14.1176471,0 C14.8973432,0 15.5294118,0.63206859 15.5294118,1.41176471 L15.5294118,2.82352942 C15.5294118,3.60322554 14.8973432,4.23529413 14.1176471,4.23529413 L7.05882352,4.23529413 C6.2791274,4.23529413 5.64705881,3.60322554 5.64705881,2.82352942 L5.64705881,1.41176471 C5.64705881,0.63206859 6.2791274,0 7.05882352,0 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
MyOrder.displayName = 'MyOrder';
export default MyOrder;
