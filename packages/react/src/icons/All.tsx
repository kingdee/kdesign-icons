import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const All = ({
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
          id="全部"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g id="视觉修正模版" transform="translate(-2.000000, -0.500000)"></g>
          <path
            d="M12,17 C13.5976809,17 14.9036609,18.24892 14.9949073,19.8237272 L15,20 L15,27 C15,28.5976809 13.75108,29.9036609 12.1762728,29.9949073 L12,30 L5,30 C3.40231912,30 2.09633912,28.75108 2.00509269,27.1762728 L2,27 L2,20 C2,18.4023191 3.24891996,17.0963391 4.82372721,17.0050927 L5,17 L12,17 Z M27,17 C28.5976809,17 29.9036609,18.24892 29.9949073,19.8237272 L30,20 L30,27 C30,28.5976809 28.75108,29.9036609 27.1762728,29.9949073 L27,30 L20,30 C18.4023191,30 17.0963391,28.75108 17.0050927,27.1762728 L17,27 L17,20 C17,18.4023191 18.24892,17.0963391 19.8237272,17.0050927 L20,17 L27,17 Z M12,19 L5,19 C4.48716416,19 4.06449284,19.3860402 4.00672773,19.8833789 L4,20 L4,27 C4,27.5128358 4.38604019,27.9355072 4.88337887,27.9932723 L5,28 L12,28 C12.5128358,28 12.9355072,27.6139598 12.9932723,27.1166211 L13,27 L13,20 C13,19.4871642 12.6139598,19.0644928 12.1166211,19.0067277 L12,19 Z M27,19 L20,19 C19.4871642,19 19.0644928,19.3860402 19.0067277,19.8833789 L19,20 L19,27 C19,27.5128358 19.3860402,27.9355072 19.8833789,27.9932723 L20,28 L27,28 C27.5128358,28 27.9355072,27.6139598 27.9932723,27.1166211 L28,27 L28,20 C28,19.4871642 27.6139598,19.0644928 27.1166211,19.0067277 L27,19 Z M12,2 C13.5976809,2 14.9036609,3.24891996 14.9949073,4.82372721 L15,5 L15,12 C15,13.5976809 13.75108,14.9036609 12.1762728,14.9949073 L12,15 L5,15 C3.40231912,15 2.09633912,13.75108 2.00509269,12.1762728 L2,12 L2,5 C2,3.40231912 3.24891996,2.09633912 4.82372721,2.00509269 L5,2 L12,2 Z M27,2 C28.5976809,2 29.9036609,3.24891996 29.9949073,4.82372721 L30,5 L30,12 C30,13.5976809 28.75108,14.9036609 27.1762728,14.9949073 L27,15 L20,15 C18.4023191,15 17.0963391,13.75108 17.0050927,12.1762728 L17,12 L17,5 C17,3.40231912 18.24892,2.09633912 19.8237272,2.00509269 L20,2 L27,2 Z M12,4 L5,4 C4.48716416,4 4.06449284,4.38604019 4.00672773,4.88337887 L4,5 L4,12 C4,12.5128358 4.38604019,12.9355072 4.88337887,12.9932723 L5,13 L12,13 C12.5128358,13 12.9355072,12.6139598 12.9932723,12.1166211 L13,12 L13,5 C13,4.48716416 12.6139598,4.06449284 12.1166211,4.00672773 L12,4 Z M27,4 L20,4 C19.4871642,4 19.0644928,4.38604019 19.0067277,4.88337887 L19,5 L19,12 C19,12.5128358 19.3860402,12.9355072 19.8833789,12.9932723 L20,13 L27,13 C27.5128358,13 27.9355072,12.6139598 27.9932723,12.1166211 L28,12 L28,5 C28,4.48716416 27.6139598,4.06449284 27.1166211,4.00672773 L27,4 Z"
            id="形状结合"
            fill={fill}
            fillRule="nonzero"
          ></path>
        </g>
      </svg>
    </IconWrapper>
  );
};
All.displayName = 'All';
export default All;