import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const WarningFace = ({
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
          id="1363-警告-面"
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
              d="M12,0 C18.627417,0 24,5.372583 24,12 C24,18.627417 18.627417,24 12,24 C5.372583,24 0,18.627417 0,12 C0,5.372583 5.372583,0 12,0 Z M12,17.1428571 C11.2899196,17.1428571 10.7142857,17.7184911 10.7142857,18.4285714 C10.7142857,19.1386518 11.2899196,19.7142857 12,19.7142857 C12.7100804,19.7142857 13.2857143,19.1386518 13.2857143,18.4285714 C13.2857143,17.7184911 12.7100804,17.1428571 12,17.1428571 Z M12,4.28571429 C11.5266131,4.28571429 11.1428571,4.66947023 11.1428571,5.14285714 L11.1428571,5.14285714 L11.1428571,14.5714286 C11.1428571,15.0448155 11.5266131,15.4285714 12,15.4285714 C12.4733869,15.4285714 12.8571429,15.0448155 12.8571429,14.5714286 L12.8571429,14.5714286 L12.8571429,5.14285714 C12.8571429,4.66947023 12.4733869,4.28571429 12,4.28571429 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
WarningFace.displayName = 'WarningFace';
export default WarningFace;
