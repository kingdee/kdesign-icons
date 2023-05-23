import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const Tag = ({
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
          id="16.标签"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="标签"
            transform="translate(4.000000, 4.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M12.0152482,0 C12.2428655,0 12.4611601,0.090420606 12.6221099,0.251370334 L23.1202038,10.7494644 C24.2932654,11.9225259 24.2932654,13.8244345 23.1202038,14.997496 L14.997496,23.1202038 C13.8244345,24.2932654 11.9225259,24.2932654 10.7494644,23.1202038 L0.251370334,12.6221099 C0.090420606,12.4611601 0,12.2428655 0,12.0152482 L0,0.858232013 C0,0.384243572 0.384243572,0 0.858232013,0 L12.0152482,0 Z M6.8658561,4.29116006 C5.44389075,4.29116006 4.29116006,5.44389075 4.29116006,6.8658561 C4.29116006,8.28782143 5.44389075,9.44055214 6.8658561,9.44055214 C8.28782143,9.44055214 9.44055214,8.28782143 9.44055214,6.8658561 C9.44055214,5.44389075 8.28782143,4.29116006 6.8658561,4.29116006 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
Tag.displayName = 'Tag';
export default Tag;
