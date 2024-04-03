import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const MosaicDiagram = ({
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
          id="马赛克图"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g id="视觉修正模版" transform="translate(-2.000000, -0.500000)"></g>
          <path
            d="M27.9866071,5 C29.6439732,5 31,6.16076081 31,7.57946847 L31,24.4205315 C31,25.8392392 29.6439732,27 27.9866071,27 L4.01339286,27 C2.35602679,27 1,25.8392392 1,24.4205315 L1,7.57946847 C1,6.16076081 2.35602679,5 4.01339286,5 Z M29,7 L3,7 L3,25 L29,25 L29,7 Z M27,8 L27,17 L17,17 L17,24 L5,24 L5,15 L15,15 L15,8 L27,8 Z M15,17 L7,17 L7,22 L15,22 L15,17 Z M25,10 L17,10 L17,15 L25,15 L25,10 Z"
            id="形状结合"
            fill={fill}
            fillRule="nonzero"
          ></path>
        </g>
      </svg>
    </IconWrapper>
  );
};
MosaicDiagram.displayName = 'MosaicDiagram';
export default MosaicDiagram;
