import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const CheckboxNotChecked = ({
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
          id="1224-复选框未选中"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(4.000000, 4.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M1.5,3.41436024 L1.5,20.5856397 C1.5,21.6463545 2.35456615,22.5 3.41436024,22.5 L20.5856397,22.5 C21.6463545,22.5 22.5,21.6454338 22.5,20.5856397 L22.5,3.41436024 C22.5,2.35364551 21.6454338,1.5 20.5856397,1.5 L3.41436024,1.5 C2.35364551,1.5 1.5,2.35456615 1.5,3.41436024 Z M0,3.6974033 C0,1.65538385 1.6496172,0 3.6974033,0 L20.3025967,0 C22.3446162,0 24,1.6496172 24,3.6974033 L24,20.3025967 C24,22.3446162 22.3503828,24 20.3025967,24 L3.6974033,24 C1.65538385,24 0,22.3503828 0,20.3025967 L0,3.6974033 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
CheckboxNotChecked.displayName = 'CheckboxNotChecked';
export default CheckboxNotChecked;
