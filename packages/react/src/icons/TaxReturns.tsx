import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const TaxReturns = ({
  size = '1em',
  fill = 'currentColor',
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
          id="811.税务报表"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(2.000000, 1.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M12.7235294,13.1764706 L8.23529412,13.1764706 C8.35388235,13.1764706 8.23529412,13.4004706 8.23529412,13.4004706 L8.23529412,14.8235294 L13.1764706,14.8235294 L13.1764706,18.1176471 L8.23529412,18.1176471 L8.23529412,19.7647059 L13.1764706,19.7647059 L13.1764706,23.0588235 L14.8235294,23.0588235 L14.8235294,19.7647059 L19.7647059,19.7647059 L19.7647059,18.1176471 L14.8235294,18.1176471 L14.8235294,14.8235294 L19.7647059,14.8235294 L19.7647059,13.1764706 L15.1891765,13.1764706 L14.8235294,11.5294118 L13.1764706,11.5294118 L13.1764706,13.1764706 L12.7235294,13.1764706 Z M0,4.94117647 C0,4.032 0.749411765,3.29411765 1.64705882,3.29411765 L26.3529412,3.29411765 C27.2621176,3.29411765 28,4.02705882 28,4.94117647 L28,28 C28,28.9091765 27.3016471,29.3868235 26.4435294,29.0672941 L20.1254118,26.712 L14.9783529,29.6470588 L14.0263529,29.6470588 L8.87764706,26.7136471 L1.56635294,29.1298824 C0.701647059,29.4148235 0,28.9157647 0,27.9983529 L0,4.94282353 L0,4.94117647 Z M11.5294118,9.88235294 L11.5294118,11.5294118 L13.1764706,11.5294118 L13.1764706,9.88235294 L11.5294118,9.88235294 L11.5294118,9.88235294 Z M9.88235294,8.23529412 L9.88235294,9.88235294 L11.5294118,9.88235294 L11.5294118,8.23529412 L9.88235294,8.23529412 Z M14.8235294,9.88235294 L14.8235294,11.5294118 L16.4705882,11.5294118 L16.4705882,9.88235294 L14.8235294,9.88235294 Z M18.1176471,6.58823529 L18.1176471,8.23529412 L19.7647059,8.23529412 L19.7647059,6.58823529 L18.1176471,6.58823529 L18.1176471,6.58823529 Z M16.4705882,8.23529412 L16.4705882,9.88235294 L18.1176471,9.88235294 L18.1176471,8.23529412 L16.4705882,8.23529412 Z M8.23529412,6.58823529 L8.23529412,8.23529412 L9.88235294,8.23529412 L9.88235294,6.58823529 L8.23529412,6.58823529 Z M1.64705882,0.823529412 C1.64705882,0.368706677 2.0157655,0 2.47058824,0 L25.5294118,0 C25.9856471,0 26.3529412,0.382117647 26.3529412,0.823529412 L26.3529412,1.64705882 L1.64705882,1.64705882 L1.64705882,0.823529412 L1.64705882,0.823529412 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
TaxReturns.displayName = 'TaxReturns';
export default TaxReturns;
