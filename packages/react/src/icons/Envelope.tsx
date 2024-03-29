import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const Envelope = ({
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
          id="63.信封"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="信封"
            transform="translate(4.000000, 7.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M-3.89777845e-16,1.2937 L11.5122851,9.19886336 L11.6133903,9.25857172 C11.8563118,9.38047608 12.1440329,9.38047608 12.3869544,9.25857172 L12.4880597,9.19886336 L23.9996553,1.29455 L24,16.15 C24,16.619442 23.6162495,17 23.1428695,17 L0.857475263,17 C0.384095146,17 0.000344717334,16.619442 0.000344717334,16.15 L-3.89777845e-16,1.2937 Z M22.8751,0 L11.9993152,7.46555 L1.12455528,0 L22.8751,0 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
Envelope.displayName = 'Envelope';
export default Envelope;
