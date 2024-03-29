import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const NodeBlock = ({
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
          id="1273-节点块-"
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
              d="M20.8,22.4 L20.8,23.2 C20.8,23.6418278 20.4418278,24 20,24 L0.8,24 C0.358172211,24 0,23.6418278 0,23.2 L0,4 C0,3.55817221 0.358172211,3.2 0.8,3.2 L1.6,3.2 L1.6,22.4 L20.8,22.4 Z M4,20.8 C3.55817221,20.8 3.2,20.4418278 3.2,20 L3.2,0.8 C3.2,0.358172211 3.55817221,0 4,0 L23.2,0 C23.6418278,0 24,0.358172211 24,0.8 L24,20 C24,20.4418278 23.6418278,20.8 23.2,20.8 L4,20.8 Z M13.6,4.8 C13.1897314,4.8 12.8515942,5.10883215 12.8053822,5.5067031 L12.8,5.6 L12.8,9.6 L8.8,9.6 C8.35817224,9.6 8,9.95817224 8,10.4 C8,10.8102686 8.30883215,11.1484058 8.70670313,11.1946178 L8.8,11.2 L12.8,11.2 L12.8,15.2 C12.8,15.6418278 13.1581722,16 13.6,16 C14.0102686,16 14.3484058,15.6911678 14.3946178,15.2932969 L14.4,15.2 L14.4,11.2 L18.4,11.2 C18.8418278,11.2 19.2,10.8418278 19.2,10.4 C19.2,9.98973135 18.8911678,9.65159424 18.4932969,9.60538217 L18.4,9.6 L14.4,9.6 L14.4,5.6 C14.4,5.15817221 14.0418278,4.8 13.6,4.8 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
NodeBlock.displayName = 'NodeBlock';
export default NodeBlock;
