import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const SystemStatus = ({
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
          id="869.系统状态"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(2.000000, 4.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M15.5555556,20.2222222 L15.5555556,23.3333333 L21,23.3333333 C21.4295548,23.3333333 21.7777778,23.6815563 21.7777778,24.1111111 C21.7777778,24.5406659 21.4295548,24.8888889 21,24.8888889 L7,24.8888889 C6.57044519,24.8888889 6.22222222,24.5406659 6.22222222,24.1111111 C6.22222222,23.6815563 6.57044519,23.3333333 7,23.3333333 L12.4444444,23.3333333 L12.4444444,20.2222222 L1.55555556,20.2222222 C0.696445945,20.2222222 5.75671198e-16,19.5257763 5.75671198e-16,18.6666667 L5.75671198e-16,1.55555556 C5.75671198e-16,0.696445945 0.696445945,1.1513424e-15 1.55555556,1.1513424e-15 L26.4444444,1.1513424e-15 C26.8570034,1.1513424e-15 27.2526651,0.163888418 27.5443883,0.455611674 C27.8361116,0.747334929 28,1.14299657 28,1.55555556 L28,18.6666667 C28,19.5257763 27.3035541,20.2222222 26.4444444,20.2222222 L15.5555556,20.2222222 Z M15.5555556,3.11111111 L15.5555556,17.1111111 L17.1111111,17.1111111 L17.1111111,3.11111111 L15.5555556,3.11111111 Z M10.8888889,7.77777778 L10.8888889,12.4444444 L12.4444444,12.4444444 L12.4444444,7.77777778 L10.8888889,7.77777778 Z M20.2222222,6.22222222 L20.2222222,14 L21.7777778,14 L21.7777778,6.22222222 L20.2222222,6.22222222 Z M6.22222222,6.22222222 L6.22222222,14 L7.77777778,14 L7.77777778,6.22222222 L6.22222222,6.22222222 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
SystemStatus.displayName = 'SystemStatus';
export default SystemStatus;