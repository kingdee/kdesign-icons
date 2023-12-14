import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const IpControl = ({
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
          id="434.IP管控"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(4.000000, 4.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M17.25,4.09272615e-16 C21.3,4.09272615e-16 24,2.7 24,6.74999999 L24,20.25 C24,20.9955843 23.3955844,21.6 22.65,21.6 L21.6,21.6 L21.6,22.8 C21.6,23.4627416 21.0627416,24 20.4,24 L6,24 C2.68629151,24 4.09272615e-16,21.3137084 4.09272615e-16,18 L4.09272615e-16,3.6 C4.09272615e-16,2.93725831 0.537258297,2.40000002 1.20000001,2.40000002 L2.40000002,2.40000002 L2.40000002,1.35 C2.40000002,0.604415606 3.00441559,4.09272615e-16 3.75000002,4.09272615e-16 L17.25,4.09272615e-16 Z M17.25,1.35 L3.75000002,1.35 L3.74880001,2.40000002 L15.6,2.40000002 C18.9137084,2.40000002 21.6,5.0862915 21.6,8.4 L21.6,20.25 L22.65,20.25 L22.65,6.74999999 C22.65,5.16726466 22.1731371,3.85269442 21.3007796,2.91695866 L21.3,2.7 L21.0842538,2.70007877 C20.1600414,1.83565302 18.8557627,1.35 17.25,1.35 Z M7.19999999,7.80000001 L6.00000001,7.80000001 L6.00000001,17.4 L7.19999999,17.4 L7.19999999,7.80000001 Z M13.8,7.80000001 L9.60000001,7.80000001 L9.60000001,17.4 L10.8,17.4 L10.8,13.8 L13.8,13.8 C15.4568543,13.8 16.8,12.4568543 16.8,10.8 C16.8,9.14314576 15.4568543,7.80000001 13.8,7.80000001 Z M13.8,8.99999999 L13.973352,9.0082399 C14.8861343,9.0954616 15.6,9.86436469 15.6,10.8 C15.6,11.7356353 14.8861343,12.5045384 13.973352,12.5917601 L13.8,12.6 L10.8,12.6 L10.8,8.99999999 L13.8,8.99999999 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
IpControl.displayName = 'IpControl';
export default IpControl;
