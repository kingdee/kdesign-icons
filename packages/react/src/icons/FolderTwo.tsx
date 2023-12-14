import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const FolderTwo = ({
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
          id="1031.文件夹-2"
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
              d="M25.8680585,4.31835852 L11.840764,4.31835852 L9.94193102,1.09629858 C9.60629421,0.421068497 8.95140746,-0.00041135026 8.23875863,3.01264597e-07 L2.14991878,3.01264597e-07 C0.735586329,3.01264597e-07 0,0.824931537 0,2.15925394 L0,25.9260749 C0,27.0699267 0.866068982,28.0000003 1.93103449,28.0000003 L26.0689656,28.0000003 C27.133931,28.0000003 28,27.0699267 28,25.9260749 L28,6.45264995 C28,5.13084911 27.1701567,4.31835852 25.8680585,4.31835852 Z M2.14991878,2.15925394 L8.23875863,2.15925394 L10.7776442,6.45264995 L25.8680585,6.45264995 L25.8680585,8.62117035 C25.8596906,8.62117035 17.953644,8.62117035 2.14991878,8.62117035 C2.14155097,8.62117035 2.14155097,6.4671982 2.14991878,2.15925394 Z M2.14991878,25.9260749 L2.14991878,10.7671453 L25.8680585,10.7671453 L26.0689656,22.814964 L26.0708966,25.9260749 L2.14991878,25.9260749 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
FolderTwo.displayName = 'FolderTwo';
export default FolderTwo;
