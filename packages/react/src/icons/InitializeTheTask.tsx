import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const InitializeTheTask = ({
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
          id="1918初始化任务"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="zzfzy_cshrw_48_48"
            transform="translate(3.866667, 2.000000)"
            fill="#999999"
          >
            <path
              d="M22.1333333,0 C23.2379028,0 24.1333333,0.8954305 24.1333333,2 L24.1333333,21 L17.1333333,28 L2.13333333,28 C1.02876383,28 0.133333333,27.1045695 0.133333333,26 L0.133333333,2 C0.133333333,0.8954305 1.02876383,0 2.13333333,0 L22.1333333,0 Z M14.1333333,18 L5.13333333,18 C4.58104858,18 4.13333333,18.4477153 4.13333333,19 C4.13333333,19.5522847 4.58104858,20 5.13333333,20 L14.1333333,20 C14.6856181,20 15.1333333,19.5522847 15.1333333,19 C15.1333333,18.4477153 14.6856181,18 14.1333333,18 Z M19.1333333,12 L5.13333333,12 C4.58104858,12 4.13333333,12.4477153 4.13333333,13 C4.13333333,13.5522847 4.58104858,14 5.13333333,14 L19.1333333,14 C19.6856181,14 20.1333333,13.5522847 20.1333333,13 C20.1333333,12.4477153 19.6856181,12 19.1333333,12 Z M19.1333333,6 L5.13333333,6 C4.58104858,6 4.13333333,6.44771525 4.13333333,7 C4.13333333,7.55228475 4.58104858,8 5.13333333,8 L19.1333333,8 C19.6856181,8 20.1333333,7.55228475 20.1333333,7 C20.1333333,6.44771525 19.6856181,6 19.1333333,6 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
InitializeTheTask.displayName = 'InitializeTheTask';
export default InitializeTheTask;
