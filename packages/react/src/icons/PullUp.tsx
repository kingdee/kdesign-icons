import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const PullUp = ({
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
          id="1010.上拉"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(2.000000, 8.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M14.1014696,3.93236069 L2.89541685,15.1384134 C2.22968907,15.7903828 1.16484793,15.7903828 0.499120141,15.1384134 C0.180117625,14.8214691 0.000506333248,14.3905088 0,13.9408244 C-0.00050419547,13.49114 0.178138192,13.0597771 0.496427668,12.7421167 L12.7390807,0.496771252 C13.1509363,0.0855124309 13.7446521,-0.0862931234 14.3124863,0.0414695545 C14.8803204,0.169232232 15.3432319,0.578778945 15.5392476,1.12680882 L27.5691956,13.1621417 C28.1373065,13.7275601 28.1507688,14.6914637 27.5665032,15.2757293 C26.9798467,15.8525551 26.0398075,15.8549471 25.4502231,15.2811143 L14.1014696,3.92966822 L14.1014696,3.93236069 Z"
              id="路径"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
PullUp.displayName = 'PullUp';
export default PullUp;
