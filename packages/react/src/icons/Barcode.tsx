import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const Barcode = ({
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
          id="8.条形码"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="条形码"
            transform="translate(4.000000, 6.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M2.40000003,18.6666666 L21.6,18.6666666 L21.6,2.33333332 L2.40000003,2.33333332 L2.40000003,18.6666666 L2.40000003,18.6666666 Z M22.8,0 C23.4627416,0 24,0.522334456 24,1.16666668 L24,19.8333334 C24,20.4776656 23.4627416,21 22.8,21 L1.20000003,21 C0.537258296,21 0,20.4776656 0,19.8333334 L0,1.16666668 C0,0.522334456 0.537258296,0 1.20000003,0 L22.8,0 Z M8.4,4.66666668 L8.4,16.3333334 L4.8,16.3333334 L4.8,4.66666668 L8.4,4.66666668 Z M12,4.66666668 L12,16.3333334 L9.60000003,16.3333334 L9.60000003,4.66666668 L12,4.66666668 Z M14.4,4.66666668 L14.4,16.3333334 L13.2,16.3333334 L13.2,4.66666668 L14.4,4.66666668 Z M19.2,4.66666668 L19.2,16.3333334 L15.6,16.3333334 L15.6,4.66666668 L19.2,4.66666668 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
Barcode.displayName = 'Barcode';
export default Barcode;
