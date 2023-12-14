import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const DoubleView = ({
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
          id="1081.双视图"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(2.000000, 6.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M1.64705883,1.64705883 L1.64705883,18.117647 L11.5294118,18.117647 L11.5294118,1.64705883 L1.64705883,1.64705883 Z M1.64705883,0 L11.5294118,0 C12.4390572,0 13.1764706,0.737413355 13.1764706,1.64705883 L13.1764706,18.117647 C13.1764706,19.0272925 12.4390572,19.7647059 11.5294118,19.7647059 L1.64705883,19.7647059 C0.737413355,19.7647059 0,19.0272925 0,18.117647 L0,1.64705883 C0,0.737413355 0.737413355,0 1.64705883,0 Z M16.4705882,1.64705883 L16.4705882,18.117647 L26.3529412,18.117647 L26.3529412,1.64705883 L16.4705882,1.64705883 L16.4705882,1.64705883 Z M16.4705882,0 L26.3529412,0 C27.2625866,0 28,0.737413355 28,1.64705883 L28,18.117647 C28,19.0272925 27.2625866,19.7647059 26.3529412,19.7647059 L16.4705882,19.7647059 C15.5609428,19.7647059 14.8235294,19.0272925 14.8235294,18.117647 L14.8235294,1.64705883 C14.8235294,0.737413355 15.5609428,0 16.4705882,0 L16.4705882,0 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
DoubleView.displayName = 'DoubleView';
export default DoubleView;
