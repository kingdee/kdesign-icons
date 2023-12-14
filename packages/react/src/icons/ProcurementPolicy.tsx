import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const ProcurementPolicy = ({
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
          id="816.采购政策"
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
              d="M1.47367079,0 L23.5787324,0 C24.3926182,0 25.0524031,0.659784878 25.0524031,1.47367077 L25.0524031,26.5260739 C25.0519965,27.0153083 24.8088198,27.4724471 24.4033492,27.7462062 C23.9978785,28.0199653 23.4829803,28.0746514 23.0290532,27.8921667 L12.5262016,23.6642052 L2.02334999,27.8936403 C1.56918089,28.0762221 1.05399346,28.021375 0.64844377,27.7472671 C0.242894084,27.4731592 0,27.0155692 0,26.5260739 L0,1.47367077 C0,0.659784878 0.659784899,0 1.47367079,0 Z M12.5262016,17.345105 L16.4240608,19.3979284 L15.679857,15.0505996 L18.8335125,11.9706277 L14.475868,11.3369492 L12.5262016,7.38161689 L10.5765351,11.3369492 L6.21889067,11.9706277 L9.37254612,15.0505996 L8.62834238,19.3979284 L12.5262016,17.345105 L12.5262016,17.345105 Z M2.10327276e-08,2.95176255 L2.10327276e-08,4.42838067 L25.0524031,4.42838067 L25.0524031,2.95176255 L2.10327276e-08,2.95176255 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
ProcurementPolicy.displayName = 'ProcurementPolicy';
export default ProcurementPolicy;
