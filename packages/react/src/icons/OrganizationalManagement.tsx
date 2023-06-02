import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const OrganizationalManagement = ({
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
          id="803.组织管理"
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
              d="M15.4,14 L15.4,11.2 L12.6,11.2 L12.6,14 L2.8,14 L2.8,19.6 L4.2,19.6 L4.2,15.4 L23.8,15.4 L23.8,19.6 L25.2,19.6 L25.2,14 L15.4,14 Z M9.8,0 L18.2,0 C18.5713031,0 18.9273986,0.147499577 19.1899495,0.410050506 C19.4525004,0.672601436 19.6,1.02869691 19.6,1.4 L19.6,9.8 C19.6,10.5731986 18.9731986,11.2 18.2,11.2 L9.8,11.2 C9.02680135,11.2 8.4,10.5731986 8.4,9.8 L8.4,1.4 C8.4,0.62680135 9.02680135,0 9.8,0 L9.8,0 Z M1.4,19.6 L7,19.6 C7.77319865,19.6 8.4,20.2268014 8.4,21 L8.4,26.6 C8.4,27.3731986 7.77319865,28 7,28 L1.4,28 C0.62680135,28 0,27.3731986 0,26.6 L0,21 C0,20.2268014 0.62680135,19.6 1.4,19.6 L1.4,19.6 Z M11.2,19.6 L16.8,19.6 C17.5731986,19.6 18.2,20.2268014 18.2,21 L18.2,26.6 C18.2,27.3731986 17.5731986,28 16.8,28 L11.2,28 C10.4268014,28 9.8,27.3731986 9.8,26.6 L9.8,21 C9.8,20.2268014 10.4268014,19.6 11.2,19.6 L11.2,19.6 Z M21,19.6 L26.6,19.6 C27.3731986,19.6 28,20.2268014 28,21 L28,26.6 C28,27.3731986 27.3731986,28 26.6,28 L21,28 C20.2268014,28 19.6,27.3731986 19.6,26.6 L19.6,21 C19.6,20.2268014 20.2268014,19.6 21,19.6 L21,19.6 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
OrganizationalManagement.displayName = 'OrganizationalManagement';
export default OrganizationalManagement;