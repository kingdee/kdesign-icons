import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const TextCentering = ({
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
          id="1096.文本居中"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(2.000000, 6.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M0,0 L28,0 L28,1.55555556 L0,1.55555556 L0,0 Z M0,12.4444444 L28,12.4444444 L28,14 L0,14 L0,12.4444444 Z M4.66666668,6.22222221 L23.3333333,6.22222221 L23.3333333,7.77777777 L4.66666668,7.77777777 L4.66666668,6.22222221 Z M4.66666668,18.6666666 L23.3333333,18.6666666 L23.3333333,20.2222222 L4.66666668,20.2222222 L4.66666668,18.6666666 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
TextCentering.displayName = 'TextCentering';
export default TextCentering;
