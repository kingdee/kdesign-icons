import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const ApplicationsLine = ({
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
          id="1160-全部应用-线性"
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
              d="M10.5,13.5 L10.5,21 C10.5,22.6568542 9.15685421,24 7.5,24 L3,24 C1.34314576,24 0,22.6568542 0,21 L0,16.5 C0,14.8431458 1.34314576,13.5 3,13.5 L10.5,13.5 Z M21,13.5 C22.6568542,13.5 24,14.8431458 24,16.5 L24,21 C24,22.6568542 22.6568542,24 21,24 L16.5,24 C14.8431458,24 13.5,22.6568542 13.5,21 L13.5,13.5 L21,13.5 Z M8.5,15.5 L3,15.5 C2.48716416,15.5 2.06449283,15.8860402 2.00672774,16.3833789 L2,16.5 L2,21 C2,21.5128358 2.38604019,21.9355072 2.88337888,21.9932723 L3,22 L7.5,22 C8.01283581,22 8.4355072,21.6139598 8.49327229,21.1166211 L8.5,21 L8.5,15.5 Z M21,15.5 L15.5,15.5 L15.5,21 C15.5,21.5128358 15.8860402,21.9355072 16.3833789,21.9932723 L16.5,22 L21,22 C21.5128358,22 21.9355072,21.6139598 21.9932723,21.1166211 L22,21 L22,16.5 C22,15.9871642 21.6139598,15.5644928 21.1166211,15.5067277 L21,15.5 Z M7.5,0 C9.15685421,0 10.5,1.34314576 10.5,3 L10.5,10.5 L3,10.5 C1.34314576,10.5 0,9.15685421 0,7.5 L0,3 C0,1.34314576 1.34314576,0 3,0 L7.5,0 Z M21,0 C22.6568542,0 24,1.34314576 24,3 L24,7.5 C24,9.15685421 22.6568542,10.5 21,10.5 L13.5,10.5 L13.5,3 C13.5,1.34314576 14.8431458,0 16.5,0 L21,0 Z M7.5,2 L3,2 C2.48716416,2 2.06449283,2.38604019 2.00672774,2.88337888 L2,3 L2,7.5 C2,8.01283581 2.38604019,8.4355072 2.88337888,8.49327229 L3,8.5 L8.5,8.5 L8.5,3 C8.5,2.48716416 8.11395981,2.06449283 7.61662109,2.00672774 L7.5,2 Z M21,2 L16.5,2 C15.9871642,2 15.5644928,2.38604019 15.5067277,2.88337888 L15.5,3 L15.5,8.5 L21,8.5 C21.5128358,8.5 21.9355072,8.11395981 21.9932723,7.61662109 L22,7.5 L22,3 C22,2.44771526 21.5522847,2 21,2 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
ApplicationsLine.displayName = 'ApplicationsLine';
export default ApplicationsLine;
