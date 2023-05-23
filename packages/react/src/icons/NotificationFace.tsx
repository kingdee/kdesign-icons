import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const NotificationFace = ({
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
          id="1366-通知-面性"
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
              d="M12,0 C18.627417,0 24,5.372583 24,12 C24,18.627417 18.627417,24 12,24 C5.372583,24 0,18.627417 0,12 C0,5.372583 5.372583,0 12,0 Z M12.8571429,17.1428571 L10.2857143,17.1428571 C10.2857143,18.0897143 10.8612857,18.8571429 11.5714286,18.8571429 C12.2815714,18.8571429 12.8571429,18.0897143 12.8571429,17.1428571 L12.8571429,17.1428571 Z M12,6 C11.5628571,6 11.2087912,6.34095239 11.2087912,6.76190477 L11.2087912,6.76190477 L11.2087912,7.21904761 C9.40325272,7.57219046 8.04395605,9.10933339 8.04395605,10.952381 L8.04395605,10.952381 L8.04395605,14.7619047 L7.64716482,14.7619047 C7.21120877,14.7619047 6.85714286,15.1028571 6.85714286,15.5238095 C6.85714286,15.9474286 7.21081319,16.2857143 7.64716482,16.2857143 L7.64716482,16.2857143 L16.3528352,16.2857143 C16.7887912,16.2857143 17.1428571,15.9447619 17.1428571,15.5238095 C17.1428571,15.1001905 16.7891868,14.7619047 16.3528352,14.7619047 L16.3528352,14.7619047 L15.9560439,14.7619047 L15.9560439,10.952381 C15.9560439,9.10933339 14.5967473,7.57219046 12.7912088,7.21904761 L12.7912088,7.21904761 L12.7912088,6.76190477 C12.7912088,6.34095239 12.4371429,6 12,6 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
NotificationFace.displayName = 'NotificationFace';
export default NotificationFace;
