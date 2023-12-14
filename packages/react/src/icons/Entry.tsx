import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const Entry = ({
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
          id="213.进入"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="进入"
            transform="translate(9.000000, 4.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M0.407958386,21.5417662 C-0.135986129,22.1041213 -0.135986129,23.0158788 0.407958386,23.5782338 C0.95190299,24.1405887 1.83381128,24.1405887 2.37775589,23.5782338 L12.5920416,13.0182338 C13.1359861,12.4558788 13.1359861,11.5441213 12.5920416,10.9817662 L2.37775589,0.421766254 C1.83381128,-0.140588751 0.95190299,-0.140588751 0.407958386,0.421766254 C-0.135986129,0.984121229 -0.135986129,1.89587879 0.407958386,2.45823376 L9.63734545,12 L0.407958386,21.5417662 Z"
              id="路径"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
Entry.displayName = 'Entry';
export default Entry;
