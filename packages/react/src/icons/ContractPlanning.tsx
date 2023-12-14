import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const ContractPlanning = ({
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
          id="585.合约规划"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(6.000000, 4.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M20,3.47826087 L20,23.48748 C20,24.0163091 19.5712993,24.4450098 19.0424701,24.4450098 C18.9258265,24.4450098 18.8101644,24.4236975 18.7011816,24.3821227 L10,21.062793 L1.29881848,24.3821227 C0.804720946,24.5706111 0.251375666,24.3228661 0.0628871791,23.8287686 C0.0213123617,23.7197857 0,23.6041236 0,23.48748 L0,3.47826087 L20,3.47826087 Z M10,8.74405139 L8.44409784,11.7366757 L4.96499492,12.2165654 L7.48249747,14.5459986 L6.88819573,17.835211 L10,16.2822556 L13.1118043,17.835211 L12.5175025,14.5459986 L15.0350051,12.2165654 L11.5559022,11.7366757 L10,8.74405139 Z M19.0424701,0 C19.5712993,0 20,0.428700744 20,0.957529878 L20,2.60869565 L0,2.60869565 L0,0.957529878 C0,0.428700744 0.428700744,0 0.957529878,0 L19.0424701,0 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
ContractPlanning.displayName = 'ContractPlanning';
export default ContractPlanning;
