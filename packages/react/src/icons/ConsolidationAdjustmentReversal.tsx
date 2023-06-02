import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const ConsolidationAdjustmentReversal = ({
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
          id="882.合并调整冲销"
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
              d="M3.29411765,23.0588235 L3.29411765,3.29411765 L23.0588235,3.29411765 L23.0588235,1.64705882 L1.64705882,1.64705882 L1.64705882,23.0588235 L3.29411765,23.0588235 Z M24.7058824,4.94117647 L24.7058824,24.7058824 L4.94117647,24.7058824 L4.94117647,26.3529412 L26.3529412,26.3529412 L26.3529412,4.94117647 L24.7058824,4.94117647 Z M24.7058824,3.29411765 L26.3529412,3.29411765 C27.2625866,3.29411765 28,4.031531 28,4.94117647 L28,26.3529412 C28,27.2625866 27.2625866,28 26.3529412,28 L4.94117647,28 C4.031531,28 3.29411765,27.2625866 3.29411765,26.3529412 L3.29411765,24.7058824 L1.64705882,24.7058824 C1.21023166,24.7058824 0.791295807,24.5323534 0.48241236,24.22347 C0.173528914,23.9145865 4.57150657e-16,23.4956507 4.57150657e-16,23.0588235 L4.57150657e-16,1.64705882 C4.57150657e-16,0.737413353 0.737413353,9.14301314e-16 1.64705882,9.14301314e-16 L23.0588235,9.14301314e-16 C23.4956507,9.14301314e-16 23.9145865,0.173528914 24.22347,0.48241236 C24.5323534,0.791295807 24.7058824,1.21023166 24.7058824,1.64705882 L24.7058824,3.29411765 Z M11.8538824,10.2397647 L11.8538824,8.23529412 L6.58823529,10.9298824 L11.8538824,13.6228235 L11.8538824,11.6183529 L16.0934118,11.6183529 C18.1390588,11.6183529 19.7432941,13.0150588 19.7432941,14.7757647 C19.7432941,16.6204706 18.2312941,18.1670588 16.0835294,18.1670588 L8.40164706,18.1670588 L8.40164706,19.5835294 L16.1642353,19.5835294 C19.04,19.5835294 21.3921363,17.4291765 21.3921363,14.7757647 C21.4134118,11.9807059 18.9098824,10.2397647 15.9122353,10.2397647 L11.8538824,10.2397647 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
ConsolidationAdjustmentReversal.displayName = 'ConsolidationAdjustmentReversal';
export default ConsolidationAdjustmentReversal;