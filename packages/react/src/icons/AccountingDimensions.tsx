import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const AccountingDimensions = ({
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
          id="865.核算维度"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(3.000000, 2.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M6.55632765,3.40492735 L12.654243,0 L18.6091809,3.40492735 L12.654243,6.80690672 L6.55632765,3.40492735 Z M19.1928827,10.3268056 L14.0840177,7.37292061 L19.7087808,4.24068225 L25.0579069,7.03095389 L25.0579069,12.5407454 L19.1928827,15.8085913 L19.1928827,10.3268056 L19.1928827,10.3268056 Z M7.34049274,25.0181091 L7.34049274,18.2554222 L12.5289535,21.1916193 L17.6776163,18.2554222 L17.6776163,25.0181091 L12.5083175,28 L7.34049274,25.0181091 Z M19.1928827,17.5449568 L25.0579069,14.3169088 L25.0579069,20.9690461 L19.1928827,24.5582228 L19.1928827,17.5449568 L19.1928827,17.5449568 Z M7.34049274,11.2465782 L12.654243,8.30890714 L17.6776163,11.2465782 L17.6776163,16.7563698 L12.5289535,19.4493578 L7.34049274,16.7548958 L7.34049274,11.2465782 Z M0,20.9484102 L0,14.3169088 L6.12886924,17.5449568 L6.12886924,24.3651295 L0,20.9484102 Z M0.103179617,7.03095389 L5.1958307,4.24068225 L10.8854496,7.37292061 L5.85175826,10.3268056 L5.85175826,15.8100653 L0,12.5392714 L0.103179617,7.02947989 L0.103179617,7.03095389 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
AccountingDimensions.displayName = 'AccountingDimensions';
export default AccountingDimensions;
