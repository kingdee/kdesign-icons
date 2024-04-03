import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const RecruitmentBasicData = ({
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
          id="1902招聘基础数据"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <path
            d="M28,6.99989086 C28.5522847,6.99989086 29,7.44760611 29,7.99989086 L29,29 C29,29.5522847 28.5522847,30 28,30 L7,30 C6.44771525,30 6,29.5522847 6,29 L6,27.999 L27,28 L27,6.999 L28,6.99989086 Z M25,2 C25.5522847,2 26,2.44771525 26,3 L26,26 C26,26.5522847 25.5522847,27 25,27 L4,27 C3.44771525,27 3,26.5522847 3,26 L3,10 L9,2 L25,2 Z M9,21 C8.44771525,21 8,21.4477153 8,22 C8,22.5522847 8.44771525,23 9,23 L19,23 C19.5522847,23 20,22.5522847 20,22 C20,21.4477153 19.5522847,21 19,21 L9,21 Z M19,16 L9,16 C8.44771525,16 8,16.4477153 8,17 C8,17.5522847 8.44771525,18 9,18 L19,18 C19.5522847,18 20,17.5522847 20,17 C20,16.4477153 19.5522847,16 19,16 Z M19,11 L9,11 C8.44771525,11 8,11.4477153 8,12 C8,12.5522847 8.44771525,13 9,13 L19,13 C19.5522847,13 20,12.5522847 20,12 C20,11.4477153 19.5522847,11 19,11 Z"
            id="形状"
            fill={fill}
          ></path>
        </g>
      </svg>
    </IconWrapper>
  );
};
RecruitmentBasicData.displayName = 'RecruitmentBasicData';
export default RecruitmentBasicData;
