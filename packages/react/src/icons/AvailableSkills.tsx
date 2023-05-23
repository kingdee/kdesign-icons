import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const AvailableSkills = ({
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
          id="636.可用技能"
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
              d="M1.875,0 L8.625,0 C9.66053391,0 10.5,0.839466094 10.5,1.875 L10.5,8.625 C10.5,9.66053391 9.66053391,10.5 8.625,10.5 L1.875,10.5 C0.839466094,10.5 0,9.66053391 0,8.625 L0,1.875 C0,0.839466094 0.839466094,0 1.875,0 Z M1.875,13.5 L8.625,13.5 C9.66053391,13.5 10.5,14.3394661 10.5,15.375 L10.5,22.125 C10.5,23.1605339 9.66053391,24 8.625,24 L1.875,24 C0.839466094,24 0,23.1605339 0,22.125 L0,15.375 C0,14.3394661 0.839466094,13.5 1.875,13.5 Z M15.375,0 L22.125,0 C23.1605339,0 24,0.839466094 24,1.875 L24,8.625 C24,9.66053391 23.1605339,10.5 22.125,10.5 L15.375,10.5 C14.3394661,10.5 13.5,9.66053391 13.5,8.625 L13.5,1.875 C13.5,0.839466094 14.3394661,0 15.375,0 Z M15.375,13.5 L22.125,13.5 C23.1605339,13.5 24,14.3394661 24,15.375 L24,22.125 C24,23.1605339 23.1605339,24 22.125,24 L15.375,24 C14.3394661,24 13.5,23.1605339 13.5,22.125 L13.5,15.375 C13.5,14.3394661 14.3394661,13.5 15.375,13.5 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
AvailableSkills.displayName = 'AvailableSkills';
export default AvailableSkills;
