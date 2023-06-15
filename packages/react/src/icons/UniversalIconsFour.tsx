import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const UniversalIconsFour = ({
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
          id="1395-通用图标4"
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
              d="M12,0 C18.6274169,0 24,5.37258301 24,12 C24,18.6274169 18.6274169,24 12,24 C5.37258301,24 0,18.6274169 0,12 C0,5.37258301 5.37258301,0 12,0 Z M12,2.4 C6.6980664,2.4 2.4,6.6980664 2.4,12 C2.4,17.3019336 6.6980664,21.6 12,21.6 C17.3019336,21.6 21.6,17.3019336 21.6,12 C21.6,6.6980664 17.3019336,2.4 12,2.4 Z M12,4 C16.418278,4 20,7.581722 20,12 C20,16.418278 16.418278,20 12,20 C7.581722,20 4,16.418278 4,12 C4,7.581722 7.581722,4 12,4 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
UniversalIconsFour.displayName = 'UniversalIconsFour';
export default UniversalIconsFour;
