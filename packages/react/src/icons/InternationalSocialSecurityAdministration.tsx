import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const InternationalSocialSecurityAdministration = ({
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
          id="947.国际社保管理"
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
              d="M12.593,0 L25.186,3.3096 L25.186,16.5452 C25.186,24.4132 12.593,28 12.593,28 C12.593,28 3.88578059e-16,24.311 3.88578059e-16,16.5452 L3.88578059e-16,3.3096 L12.593,0 Z M13.6528,21.35 C16.093,21.35 18.0894,19.46 18.2,17.15 C18.2,15.89 17.535,14.735 16.6474,14 C15.8718,13.37 14.8736,12.95 14.0966,12.95 L13.6528,12.95 L13.6528,8.75 C14.8736,8.75 15.8718,9.695 15.8718,10.85 L18.0894,10.85 C18.0894,8.54 16.093,6.65 13.6528,6.65 L13.6528,5.6 L11.4352,5.6 L11.4352,6.65 C8.9964,6.65 7,8.54 7,10.85 C7,13.16 8.9964,15.05 11.4352,15.05 L11.4352,19.25 C10.2158,19.25 9.2176,18.305 9.2176,17.15 L7,17.15 C7,19.46 8.9964,21.35 11.4352,21.35 L11.4352,22.4 L13.6528,22.4 L13.6528,21.35 Z M15.8718,17.15 C15.8718,18.305 14.8736,19.25 13.6528,19.25 L13.6528,15.05 C14.8736,15.05 15.8718,15.995 15.8718,17.15 L15.8718,17.15 Z M11.4352,8.75 L11.4352,12.95 C10.2158,12.95 9.2176,12.005 9.2176,10.85 C9.2176,9.695 10.2158,8.75 11.4352,8.75 L11.4352,8.75 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
InternationalSocialSecurityAdministration.displayName =
  'InternationalSocialSecurityAdministration';
export default InternationalSocialSecurityAdministration;
