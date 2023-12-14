import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const IntelligentAccounting = ({
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
          id="783.智能记账"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(2.000000, 5.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M9.8,4.2 L9.8,0 L11.2,0 L11.2,22.4 L9.8,22.4 L9.8,18.2 L2.8,18.2 L2.8,4.2 L9.8,4.2 Z M0,7.77156117e-16 L5.6,7.77156117e-16 L5.6,1.4 L0,1.4 L0,7.77156117e-16 Z M0,21 L5.6,21 L5.6,22.4 L0,22.4 L0,21 Z M22.4,21 L28,21 L28,22.4 L22.4,22.4 L22.4,21 Z M22.4,0 L28,0 L28,1.4 L22.4,1.4 L22.4,0 L22.4,0 Z M0,1.4 L1.4,1.4 L1.4,5.6 L0,5.6 L0,1.4 Z M0,16.8 L1.4,16.8 L1.4,21 L0,21 L0,16.8 Z M26.6,1.4 L28,1.4 L28,5.6 L26.6,5.6 L26.6,1.4 Z M26.6,16.8 L28,16.8 L28,21 L26.6,21 L26.6,16.8 Z M12.6,4.2 L25.2,4.2 L25.2,18.2 L12.6,18.2 L12.6,4.2 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
IntelligentAccounting.displayName = 'IntelligentAccounting';
export default IntelligentAccounting;
