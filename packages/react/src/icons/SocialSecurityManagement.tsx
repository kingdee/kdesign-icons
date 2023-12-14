import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const SocialSecurityManagement = ({
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
          id="929.社保管理"
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
              d="M12.593,0 L25.186,3.3096 L25.186,16.5452 C25.186,24.4132 12.593,28 12.593,28 C12.593,28 3.88578059e-16,24.311 3.88578059e-16,16.5452 L3.88578059e-16,3.3096 L12.593,0 Z M8.7318,6.5338 L6.7858,8.3524 L9.856,11.221 L7.112,11.221 L7.112,13.783 L11.228,13.783 L11.228,15.0626 L7.112,15.0626 L7.112,17.6246 L11.228,17.6246 L11.228,21.4662 L13.972,21.4662 L13.972,17.626 L18.0866,17.626 L18.0866,15.064 L13.9706,15.064 L13.9706,13.783 L18.0866,13.783 L18.0866,11.221 L15.3426,11.221 L18.4156,8.3538 L16.4682,6.5338 L12.6,10.1724 L8.7318,6.5338 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
SocialSecurityManagement.displayName = 'SocialSecurityManagement';
export default SocialSecurityManagement;
