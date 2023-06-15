import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const TranslationPlatform = ({
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
          id="758.翻译平台"
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
              d="M1.64705882,0 L26.3529412,0 C26.7897683,0 27.2087042,0.173528914 27.5175876,0.48241236 C27.8264711,0.791295807 28,1.21023166 28,1.64705882 L28,26.3529412 C28,27.2625866 27.2625866,28 26.3529412,28 L1.64705882,28 C0.737413353,28 0,27.2625866 0,26.3529412 L0,1.64705882 C0,0.737413353 0.737413353,0 1.64705882,0 Z M12.6362353,4.94117647 L6.58823529,21.4117647 L9.13952941,21.4117647 L10.6136471,17.1672941 L17.3649412,17.1672941 L18.8390588,21.4117647 L21.4117647,21.4117647 L15.3637647,4.94117647 L12.6362353,4.94117647 Z M11.5294118,14.8235294 L13.9687059,8.23529412 L14.0510588,8.23529412 L16.4705882,14.8235294 L11.5294118,14.8235294 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
TranslationPlatform.displayName = 'TranslationPlatform';
export default TranslationPlatform;
