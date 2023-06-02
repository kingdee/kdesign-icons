import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const WarningThree = ({
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
          id="259.预警"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="预警"
            transform="translate(5.000000, 4.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M20.4727369,16.6180028 C20.5566123,16.6679536 20.6512772,16.695973 20.7483159,16.6995698 C21.4581053,16.6995698 22,17.2114334 22,17.849785 C22,18.4916829 21.4534737,19 20.778421,19 L1.22157897,19 C0.541894711,19 0,18.4869543 0,17.849785 C0,17.2114334 0.546526322,16.6995698 1.22157897,16.6995698 C2.442,16.6995698 2.74536839,12.804443 2.74536839,12.804443 L2.74536839,8.36671737 C2.74536839,4.34155594 5.00326322,1.19117254 8.56031574,0.0894249405 C8.53368426,-0.0323346194 13.4037894,-0.0287882594 13.3806316,0.0941535405 C16.7558947,1.1994475 19.239579,4.3498309 19.239579,8.37026373 L19.239579,12.8032609 C19.239579,12.8032609 19.36,14.2998408 19.7409474,15.4358702 L8.68421058,15.4358702 C8.47737257,15.4358702 8.28624647,15.5485268 8.1828274,15.7314033 C8.07940833,15.9142798 8.07940833,16.139593 8.1828274,16.3224697 C8.28624647,16.5053462 8.47737257,16.6180028 8.68421058,16.6180028 L20.4727369,16.6180028 Z M10.4761905,24 C12.2085333,24 13.6152762,22.2164106 13.6190476,20 L7.33333333,20 C7.33333333,22.2085648 8.72750474,24 10.4761905,24 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
WarningThree.displayName = 'WarningThree';
export default WarningThree;