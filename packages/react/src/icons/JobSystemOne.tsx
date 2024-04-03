import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const JobSystemOne = ({
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
          id="1736.职位体系"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <path
            d="M20,4 C21.6568542,4 23,5.34314575 23,7 L23,8 L29,8 C29.5522847,8 30,8.44771525 30,9 L30,15.9904676 C29.9980426,16.4975992 29.6167866,16.9229773 29.1129016,16.9803022 L29,16.993 L29,28 C29,28.5522847 28.5522847,29 28,29 L4,29 C3.44771525,29 3,28.5522847 3,28 L3.00102419,16.9931231 C2.96311364,16.988863 2.92513702,16.9845893 2.88709432,16.9803022 C2.38321109,16.9229749 2.00195743,16.4975976 2,15.9904676 L2,9 C2,8.44771525 2.44771525,8 3,8 L9,8 L9,7 C9,5.34314575 10.3431458,4 12,4 L20,4 Z M9,16 C8.44771525,16 8,16.4477153 8,17 L8,19 C8,19.5522847 8.44771525,20 9,20 C9.55228475,20 10,19.5522847 10,19 L10,17 C10,16.4477153 9.55228475,16 9,16 Z M23,16 C22.4477153,16 22,16.4477153 22,17 L22,19 C22,19.5522847 22.4477153,20 23,20 C23.5522847,20 24,19.5522847 24,19 L24,17 C24,16.4477153 23.5522847,16 23,16 Z M20,6 L12,6 C11.4477153,6 11,6.44771525 11,7 L11,8 L21,8 L21,7 C21,6.44771525 20.5522847,6 20,6 Z"
            id="形状结合"
            fill={fill}
          ></path>
        </g>
      </svg>
    </IconWrapper>
  );
};
JobSystemOne.displayName = 'JobSystemOne';
export default JobSystemOne;
