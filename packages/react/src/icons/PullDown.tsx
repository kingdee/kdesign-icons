import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const PullDown = ({
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
          id="1009.下拉"
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
              d="M14.1019211,11.7779401 L2.89550958,0.571528565 C2.22976048,-0.0804616427 1.16488524,-0.0804616427 0.499136145,0.571528565 C0.180123401,0.888483047 0.000506349461,1.31945718 0,1.76915599 C-0.000504211616,2.2188548 0.178143905,2.65023148 0.496443585,2.96790204 L12.7394886,15.2136395 C13.1513574,15.6249115 13.7450922,15.7967226 14.3129445,15.6689558 C14.8807968,15.541189 15.3437232,15.1316292 15.5397451,14.5835818 L27.5700783,2.54786354 C28.1443526,1.95990588 28.1431561,1.02070093 27.5673858,0.434208305 C26.9807105,-0.142635992 26.0406412,-0.145028031 25.451038,0.428823186 L14.1019211,11.7779401 L14.1019211,11.7779401 Z"
              id="路径"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
PullDown.displayName = 'PullDown';
export default PullDown;
