import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const SaveSolid = ({
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
          id="72.保存、存储"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="保存、存储"
            transform="translate(4.000000, 4.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M18,0 C18.2652165,0 18.5195704,0.105356832 18.7071068,0.292893216 L23.7071068,5.29289322 C23.8946432,5.4804296 24,5.73478352 24,6 L24,23 C24,23.5522847 23.5522847,24 23,24 L1,24 C0.447715264,24 0,23.5522847 0,23 L0,1 C0,0.447715264 0.447715264,0 1,0 L18,0 Z M17,18 L7,18 C6.4477153,18 6,18.4477153 6,19 C6,19.5128358 6.38604019,19.9355072 6.88337891,19.9932723 L7,20 L17,20 C17.5522847,20 18,19.5522847 18,19 C18,18.4477153 17.5522847,18 17,18 Z M17,14 L7,14 C6.4477153,14 6,14.4477153 6,15 C6,15.5128358 6.38604019,15.9355072 6.88337891,15.9932723 L7,16 L17,16 C17.5522847,16 18,15.5522847 18,15 C18,14.4477153 17.5522847,14 17,14 Z M18,2 L6,2 L6,9 C6,9.5917337 6.38604019,10.0794313 6.88337891,10.1460834 L7,10.1538462 L17,10.1538462 C17.5128358,10.1538462 17.9355072,9.7084152 17.9932723,9.13456282 L18,9 L18,2 Z M16,4 L16,8 L14,8 L14,4 L16,4 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
SaveSolid.displayName = 'SaveSolid';
export default SaveSolid;
