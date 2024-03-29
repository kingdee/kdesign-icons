import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const Task = ({
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
          id="782.人物"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(2.000000, 1.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M7,1.75 L7,5.25 L21,5.25 L21,1.75 L26.25,1.75 C27.216,1.75 28,2.52875 28,3.5 L28,28 C28,28.966 27.22125,29.75 26.25,29.75 L1.75,29.75 C0.784,29.75 0,28.97125 0,28 L0,3.5 C0,2.534 0.77875,1.75 1.75,1.75 L7,1.75 Z M19.25,12.55275 L12.012,19.922 L11.7005,20.2405 L8.7465,17.2305 C8.45523916,16.9300495 8.00964626,16.8387282 7.62367956,17.0003856 C7.23771286,17.162043 6.99020473,17.5436611 7,17.962 C7,18.242 7.105,18.5045 7.301,18.704 L10.9795,22.449 C11.1692886,22.6442217 11.4299795,22.7543646 11.70225,22.7543646 C11.9745205,22.7543646 12.2352114,22.6442217 12.425,22.449 L20.699,14.028 C21.1014925,13.6192902 21.1014925,12.9632098 20.699,12.5545 C20.5086053,12.3590762 20.247338,12.2488555 19.9745,12.2488555 C19.701662,12.2488555 19.4403947,12.3590762 19.25,12.5545 L19.25,12.55275 Z M8.75,0 L19.25,0 L19.25,3.5 L8.75,3.5 L8.75,0 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
Task.displayName = 'Task';
export default Task;
