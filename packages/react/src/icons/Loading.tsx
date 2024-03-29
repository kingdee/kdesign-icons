import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const Loading = ({
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
          id="195.loading前景"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="loading前景"
            transform="translate(18.000000, 4.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M0.6,0 C5.2391919,0 9,3.95236888 9,8.82786298 C9,10.1652702 8.7163887,11.4615827 8.17748945,12.6420486 C8.03415156,12.9560321 7.67575584,13.0884491 7.37699023,12.9378101 C7.0782246,12.7871711 6.95222556,12.4105201 7.09556346,12.0965366 C7.55714911,11.0854272 7.8,9.97541997 7.8,8.82786298 C7.8,4.64886804 4.5764502,1.26112328 0.6,1.26112328 C0.268629178,1.26112328 0,0.978811211 0,0.630561642 C0,0.282312072 0.268629178,0 0.6,0 Z"
              id="路径"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
Loading.displayName = 'Loading';
export default Loading;
