import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const DownloadTwo = ({
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
          id="161.下载"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="下载"
            transform="translate(4.000000, 5.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M1.71428571,16.9230769 L1.71428571,20.3076923 L22.2857143,20.3076923 L22.2857143,16.9230769 C22.2857143,16.4557591 22.6694703,16.0769231 23.1428571,16.0769231 C23.616244,16.0769231 24,16.4557591 24,16.9230769 L24,21.1538462 C24,21.621164 23.616244,22 23.1428571,22 L0.857142857,22 C0.383755941,22 0,21.621164 0,21.1538462 L0,16.9230769 C0,16.4557591 0.383755941,16.0769231 0.857142857,16.0769231 C1.33052977,16.0769231 1.71428571,16.4557591 1.71428571,16.9230769 Z M12.8571429,12.3418193 L18.2510513,7.01706349 C18.5857864,6.68661986 19.1284993,6.68661986 19.4632344,7.01706349 C19.7979695,7.34750712 19.7979695,7.88326211 19.4632344,8.21370577 L12.6060915,14.9829365 C12.2713564,15.3133802 11.7286436,15.3133802 11.3939085,14.9829365 L4.53676561,8.21370577 C4.20203051,7.88326211 4.20203051,7.34750712 4.53676561,7.01706349 C4.87150072,6.68661986 5.41421357,6.68661986 5.74894867,7.01706349 L11.1428571,12.3418193 L11.1428571,0.846153846 C11.1428571,0.378835993 11.5266131,0 12,0 C12.4733869,0 12.8571429,0.378835993 12.8571429,0.846153846 L12.8571429,12.3418193 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
DownloadTwo.displayName = 'DownloadTwo';
export default DownloadTwo;
