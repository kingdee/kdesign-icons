import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const TrackingNumber = ({
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
          id="876.跟踪号"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(2.000000, 2.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M12.6,26.523 C6.75000401,25.8672821 2.13271793,21.249996 1.477,15.4 L0,15.4 L0,12.6 L1.477,12.6 C2.13271793,6.75000401 6.75000401,2.13271793 12.6,1.477 L12.6,0 L15.4,0 L15.4,1.477 C21.249996,2.13271793 25.8672821,6.75000401 26.523,12.6 L28,12.6 L28,15.4 L26.523,15.4 C25.8672821,21.249996 21.249996,25.8672821 15.4,26.523 L15.4,28 L12.6,28 L12.6,26.523 Z M12.6,25.1132 L12.6,22.4 L15.4,22.4 L15.4,25.1132 C20.4753233,24.4721996 24.4721996,20.4753233 25.1132,15.4 L22.4,15.4 L22.4,12.6 L25.1132,12.6 C24.4721996,7.52467667 20.4753233,3.52780036 15.4,2.8868 L15.4,5.6 L12.6,5.6 L12.6,2.8868 C7.52467667,3.52780036 3.52780036,7.52467667 2.8868,12.6 L5.6,12.6 L5.6,15.4 L2.8868,15.4 C3.52780036,20.4753233 7.52467667,24.4721996 12.6,25.1132 Z M14,22.4 C9.3608081,22.4 5.6,18.6391919 5.6,14 C5.6,9.3608081 9.3608081,5.6 14,5.6 C18.6391919,5.6 22.4,9.3608081 22.4,14 C22.4,18.6391919 18.6391919,22.4 14,22.4 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
TrackingNumber.displayName = 'TrackingNumber';
export default TrackingNumber;
