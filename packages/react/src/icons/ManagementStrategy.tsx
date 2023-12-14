import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const ManagementStrategy = ({
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
          id="747.管理策略"
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
              d="M14,28 C6.2680135,28 0,21.7319865 0,14 C0,6.26757895 6.26757895,0 14,0 C21.7319865,0 28,6.2680135 28,14 C28,21.7319865 21.7319865,28 14,28 Z M6.00084211,22.0006316 C6.244,21.7545263 18.2869474,17.5147368 18.2869474,17.5147368 C18.2869474,17.5147368 21.3669474,7.43178947 22.0006316,6.00084211 C22.1406316,5.68252632 10.2848421,9.74252632 10.2848421,9.74252632 C10.2848421,9.74252632 5.86673684,22.0006316 6.00084211,22.0006316 Z M11.8130526,11.8484211 C11.1631579,13.3147368 9.28126316,18.06 8.69768421,19.3789474 C8.932,19.2772632 15.0964211,16.3829474 16.2738947,15.876 L11.8130526,11.8484211 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
ManagementStrategy.displayName = 'ManagementStrategy';
export default ManagementStrategy;
