import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const AuthorityManagement = ({
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
          id="793.权限管理"
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
              d="M12.6028,2.8 L7.1148,2.8 C6.33475535,4.9721182 4.80458187,6.79422614 2.8,7.938 L2.8,14.0238 L12.6028,14.0238 L12.6028,2.8 L12.6028,2.8 Z M22.2768,14.0616 L12.6224,14.0616 L12.6224,25.1398 C15.7724,24.1864 18.0964,22.5778 19.7722,20.4834 C20.6813481,19.3510011 21.3961989,18.0755293 21.8876,16.709 C22.0472,16.2764 22.1774,15.834 22.2768,15.3846 L22.2768,14.0616 Z M20.4344,0 C20.4344,2.8378 22.3748,5.3158 25.1496,6.0256 L25.1496,15.5554 C25.1496,15.5554 23.8308,25.158 12.5748,28 C1.6814,25.1566 0,15.5554 0,15.5554 L0,6.0256 C2.7104,5.3354 4.7152,2.8994 4.7152,0 L20.4344,0 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
AuthorityManagement.displayName = 'AuthorityManagement';
export default AuthorityManagement;