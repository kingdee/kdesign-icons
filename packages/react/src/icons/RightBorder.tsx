import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const RightBorder = ({
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
          id="1054.右边框"
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
              d="M1.64705884,26.3529412 L1.64705884,28 L0,28 L0,26.3529412 L1.64705884,26.3529412 Z M4.94117648,26.3529412 L4.94117648,28 L3.29411765,28 L3.29411765,26.3529412 L4.94117648,26.3529412 Z M8.23529413,26.3529412 L8.23529413,28 L6.58823529,28 L6.58823529,26.3529412 L8.23529413,26.3529412 Z M11.5294118,26.3529412 L11.5294118,28 L9.88235294,28 L9.88235294,26.3529412 L11.5294118,26.3529412 Z M14.8235294,26.3529412 L14.8235294,28 L13.1764706,28 L13.1764706,26.3529412 L14.8235294,26.3529412 Z M18.1176471,26.3529412 L18.1176471,28 L16.4705883,28 L16.4705883,26.3529412 L18.1176471,26.3529412 Z M21.4117647,26.3529412 L21.4117647,28 L19.7647059,28 L19.7647059,26.3529412 L21.4117647,26.3529412 Z M24.7058824,26.3529412 L24.7058824,28 L23.0588235,28 L23.0588235,26.3529412 L24.7058824,26.3529412 Z M28,26.3529412 L28,28 L26.3529412,28 L26.3529412,26.3529412 L28,26.3529412 Z M14.8235294,23.0588235 L14.8235294,24.7058824 L13.1764706,24.7058824 L13.1764706,23.0588235 L14.8235294,23.0588235 Z M28,23.0588235 L28,24.7058824 L26.3529412,24.7058824 L26.3529412,23.0588235 L28,23.0588235 Z M1.64705884,23.0588235 L1.64705884,24.7058824 L0,24.7058824 L0,23.0588235 L1.64705884,23.0588235 Z M14.8235294,19.7647059 L14.8235294,21.4117647 L13.1764706,21.4117647 L13.1764706,19.7647059 L14.8235294,19.7647059 Z M28,19.7647059 L28,21.4117647 L26.3529412,21.4117647 L26.3529412,19.7647059 L28,19.7647059 Z M1.64705884,19.7647059 L1.64705884,21.4117647 L0,21.4117647 L0,19.7647059 L1.64705884,19.7647059 Z M14.8235294,16.4705882 L14.8235294,18.1176471 L13.1764706,18.1176471 L13.1764706,16.4705882 L14.8235294,16.4705882 Z M28,16.4705882 L28,18.1176471 L26.3529412,18.1176471 L26.3529412,16.4705882 L28,16.4705882 Z M1.64705884,16.4705882 L1.64705884,18.1176471 L0,18.1176471 L0,16.4705882 L1.64705884,16.4705882 Z M28,13.1764706 L28,14.8235294 L26.3529412,14.8235294 L26.3529412,13.1764706 L28,13.1764706 Z M1.64705884,13.1764706 L1.64705884,14.8235294 L0,14.8235294 L0,13.1764706 L1.64705884,13.1764706 Z M4.94117648,13.1764706 L4.94117648,14.8235294 L3.29411765,14.8235294 L3.29411765,13.1764706 L4.94117648,13.1764706 Z M8.23529413,13.1764706 L8.23529413,14.8235294 L6.58823529,14.8235294 L6.58823529,13.1764706 L8.23529413,13.1764706 Z M11.5294118,13.1764706 L11.5294118,14.8235294 L9.88235294,14.8235294 L9.88235294,13.1764706 L11.5294118,13.1764706 Z M14.8235294,13.1764706 L14.8235294,14.8235294 L13.1764706,14.8235294 L13.1764706,13.1764706 L14.8235294,13.1764706 Z M18.1176471,13.1764706 L18.1176471,14.8235294 L16.4705883,14.8235294 L16.4705883,13.1764706 L18.1176471,13.1764706 Z M21.4117647,13.1764706 L21.4117647,14.8235294 L19.7647059,14.8235294 L19.7647059,13.1764706 L21.4117647,13.1764706 Z M24.7058824,13.1764706 L24.7058824,14.8235294 L23.0588235,14.8235294 L23.0588235,13.1764706 L24.7058824,13.1764706 Z M1.64705884,9.88235294 L1.64705884,11.5294117 L0,11.5294117 L0,9.88235294 L1.64705884,9.88235294 Z M14.8235294,9.88235294 L14.8235294,11.5294117 L13.1764706,11.5294117 L13.1764706,9.88235294 L14.8235294,9.88235294 Z M28,9.88235294 L28,11.5294117 L26.3529412,11.5294117 L26.3529412,9.88235294 L28,9.88235294 Z M14.8235294,6.58823529 L14.8235294,8.2352941 L13.1764706,8.2352941 L13.1764706,6.58823529 L14.8235294,6.58823529 Z M28,6.58823529 L28,8.2352941 L26.3529412,8.2352941 L26.3529412,6.58823529 L28,6.58823529 Z M1.64705884,6.58823529 L1.64705884,8.2352941 L0,8.2352941 L0,6.58823529 L1.64705884,6.58823529 Z M1.64705884,3.29411765 L1.64705884,4.94117645 L0,4.94117645 L0,3.29411765 L1.64705884,3.29411765 Z M14.8235294,3.29411765 L14.8235294,4.94117645 L13.1764706,4.94117645 L13.1764706,3.29411765 L14.8235294,3.29411765 Z M28,3.29411765 L28,4.94117645 L26.3529412,4.94117645 L26.3529412,3.29411765 L28,3.29411765 Z M1.64705884,0 L1.64705884,1.64705881 L0,1.64705881 L0,0 L1.64705884,0 Z M4.94117648,0 L4.94117648,1.64705881 L3.29411765,1.64705881 L3.29411765,0 L4.94117648,0 Z M8.23529413,0 L8.23529413,1.64705881 L6.58823529,1.64705881 L6.58823529,0 L8.23529413,0 Z M11.5294118,0 L11.5294118,1.64705881 L9.88235294,1.64705881 L9.88235294,0 L11.5294118,0 Z M14.8235294,0 L14.8235294,1.64705881 L13.1764706,1.64705881 L13.1764706,0 L14.8235294,0 Z M18.1176471,0 L18.1176471,1.64705881 L16.4705883,1.64705881 L16.4705883,0 L18.1176471,0 Z M21.4117647,0 L21.4117647,1.64705881 L19.7647059,1.64705881 L19.7647059,0 L21.4117647,0 Z M24.7058824,0 L24.7058824,1.64705881 L23.0588235,1.64705881 L23.0588235,0 L24.7058824,0 Z M28,0 L28,1.64705881 L26.3529412,1.64705881 L26.3529412,0 L28,0 Z M26.3529412,0 L28,0 L28,28 L26.3529412,28 L26.3529412,0 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
RightBorder.displayName = 'RightBorder';
export default RightBorder;
