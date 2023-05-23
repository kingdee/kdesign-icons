import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const PerformanceManagement = ({
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
          id="756.绩效管理"
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
              d="M12.6,25.2 L12.6,20.902 C7.77806196,20.2047955 4.19995482,16.0720817 4.2,11.2 L4.2,9.8 C1.88040405,9.8 0,7.91959595 0,5.6 L0,2.8 C0,2.02680135 0.62680135,1.4 1.4,1.4 L4.2,1.4 C4.2,0.62680135 4.82680135,0 5.6,0 L22.4,0 C23.1731986,0 23.8,0.62680135 23.8,1.4 L26.6,1.4 C27.3731986,1.4 28,2.02680135 28,2.8 L28,5.6 C28,7.91959595 26.1195959,9.8 23.8,9.8 L23.8,11.2 C23.8000452,16.0720817 20.221938,20.2047955 15.4,20.902 L15.4,25.2 L18.2,25.2 C19.7463973,25.2 21,26.4536027 21,28 L7,28 C7,26.4536027 8.2536027,25.2 9.8,25.2 L12.6,25.2 Z M23.8,2.8 L23.8,8.4 C24.5426062,8.4 25.2547971,8.10500085 25.779899,7.57989899 C26.3050008,7.05479713 26.6,6.34260617 26.6,5.6 L26.6,2.8 L23.8,2.8 Z M4.2,2.8 L1.4,2.8 L1.4,5.6 C1.4,6.34260617 1.69499915,7.05479713 2.22010101,7.57989899 C2.74520287,8.10500085 3.45739383,8.4 4.2,8.4 L4.2,2.8 L4.2,2.8 Z M12.6,5.6 L12.6,14 L14,14 L14,5.6 L12.6,5.6 L12.6,5.6 Z M16.8,8.4 L16.8,14 L18.2,14 L18.2,8.4 L16.8,8.4 L16.8,8.4 Z M8.4,9.8 L8.4,14 L9.8,14 L9.8,9.8 L8.4,9.8 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
PerformanceManagement.displayName = 'PerformanceManagement';
export default PerformanceManagement;
