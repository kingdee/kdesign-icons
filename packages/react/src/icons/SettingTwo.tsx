import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const SettingTwo = ({
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
          id="152.扫一扫"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="扫一扫"
            transform="translate(4.000000, 4.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M8,0 L8,2 L2,2 L2,8 L0,8 L0,1 C0,0.447715264 0.447715264,0 1,0 L8,0 Z M1,11 L23,11 C23.5522847,11 24,11.4477153 24,12 C24,12.5522847 23.5522847,13 23,13 L1,13 C0.447715264,13 0,12.5522847 0,12 C0,11.4477153 0.447715264,11 1,11 Z M16,0 L23,0 C23.5522847,0 24,0.447715264 24,1 L24,8 L22,8 L22,2 L16,2 L16,0 Z M8,22 L8,24 L1,24 C0.447715264,24 0,23.5522847 0,23 L0,16 L2,16 L2,22 L8,22 Z M16,22 L22,22 L22,16 L24,16 L24,23 C24,23.5522847 23.5522847,24 23,24 L16,24 L16,22 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
SettingTwo.displayName = 'SettingTwo';
export default SettingTwo;
