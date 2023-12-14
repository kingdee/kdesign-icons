import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const CellFormatting = ({
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
          id="1091.单元格格式"
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
              d="M6.58823531,21.4117647 L6.58823531,18.1176471 L26.3529412,18.1176471 L26.3529412,21.4117647 L6.58823531,21.4117647 Z M4.94117648,21.4117647 L1.64705883,21.4117647 L1.64705883,1.64705883 L4.94117648,1.64705883 L4.94117648,16.4705882 L1.64705883,16.4705882 L1.64705883,18.1176471 L4.94117648,18.1176471 L4.94117648,21.4117647 L4.94117648,21.4117647 Z M6.58823531,1.64705883 L26.3776471,1.64705883 L26.3529412,9.9202353 L26.3529412,16.4705882 L6.58823531,16.4705882 L6.58823531,1.64705883 Z M1.74917647,-1.09716158e-15 C0.785647059,-1.09716158e-15 0,0.737882347 0,1.64705883 L0,21.4117647 C0,22.3209412 0.783999997,23.0588235 1.75082353,23.0588235 L26.2491765,23.0588235 C27.216,23.0588235 28,22.3209412 28,21.4117647 L28,8.32752941 L27.9901177,1.64541176 C27.9892087,0.736409577 27.2520615,-1.09716158e-15 26.3430588,-1.09716158e-15 L1.75082353,-1.09716158e-15 L1.74917647,-1.09716158e-15 Z M18.1621177,1.64705883 L26.3529412,9.83458822 L26.3529412,1.64705883 L18.1621177,1.64705883 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
CellFormatting.displayName = 'CellFormatting';
export default CellFormatting;
