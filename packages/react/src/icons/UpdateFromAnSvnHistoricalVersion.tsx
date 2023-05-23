import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const UpdateFromAnSvnHistoricalVersion = ({
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
          id="1489-从某一SVN历史版本更新"
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
              d="M1.7955,17.94 L1.65449999,18.021 C1.56749998,17.871 1.4835,17.721 1.404,17.568 C0.485486447,15.8556017 0.0032604625,13.9431841 0,12 C0,5.3835 5.3835,0 12,0 C18.6165,0 24,5.3835 24,12 C24,18.6165 18.6165,24 12,24 C9.17193728,24.00057 6.43645612,22.9921173 4.28549999,21.156 C4.17,20.7915 4.209,20.499 4.4025,20.2785 C4.6185,20.031 4.90500001,19.9545 5.262,20.049 C7.14927823,21.6339976 9.53544473,22.5019843 12,22.5 C17.79,22.5 22.5,17.79 22.5,12 C22.5,6.21 17.79,1.5 12,1.5 C6.21,1.5 1.5,6.21 1.5,12 C1.5,13.395 1.77300001,14.727 2.2695,15.945 L4.94699999,14.4 L5.697,15.699 L2.93400001,17.2935 L2.93549999,17.2965 L2.6595,17.4525 L1.80000001,17.949 L1.7955,17.9415 L1.7955,17.94 Z M12,12.75 L15.003,12.75 L15.003,14.25 L10.5,14.25 L10.5,7.49999999 L12,7.49999999 L12,12.75 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
UpdateFromAnSvnHistoricalVersion.displayName =
  'UpdateFromAnSvnHistoricalVersion';
export default UpdateFromAnSvnHistoricalVersion;
