import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const TheRecruitmentPositionIManage = ({
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
          id="1934我管理的招聘职位"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g id="Group-9-Copy" transform="translate(2.000000, 2.000000)">
            <path
              d="M1,16 L6.03602629,16 L6.03602629,16 L7.5032276,18.8794011 C7.8446707,19.5494874 8.53315906,19.9713841 9.28522232,19.9713841 L18.816861,19.9713841 C19.5712005,19.9713841 20.2613685,19.5469558 20.601718,18.8737617 L22.0546178,16 L22.0546178,16 L27,16 C27.5522847,16 28,16.4477153 28,17 L28,25 C28,26.1045695 27.1045695,27 26,27 L2,27 C0.8954305,27 6.76353751e-17,26.1045695 0,25 L0,17 C-6.76353751e-17,16.4477153 0.44771525,16 1,16 Z"
              id="Rectangle-127-Copy"
              fill={fill}
            ></path>
            <path
              d="M6.03602629,16 L7.5032276,18.8794011 C7.8446707,19.5494874 8.53315906,19.9713841 9.28522232,19.9713841 L18.816861,19.9713841 C19.5173191,19.9713841 20.1624456,19.605423 20.5235357,19.014146 L20.601718,18.8737617 L22.0546178,16 L27,16 C27.5522847,16 28,16.4477153 28,17 L28,25 C28,26.1045695 27.1045695,27 26,27 L2,27 C0.8954305,27 0,26.1045695 0,25 L0,17 C0,16.4477153 0.44771525,16 1,16 L6.03602629,16 Z M23,0 C23.5522847,0 24,0.44771525 24,1 L24,15 L21.439654,15 L19.7092895,18.4225729 C19.5391147,18.7591699 19.1940307,18.9713841 18.816861,18.9713841 L9.28522232,18.9713841 C8.90919069,18.9713841 8.56494651,18.7604358 8.39422496,18.4253926 L6.6488132,15 L4,15 L4,1 C4,0.44771525 4.44771525,0 5,0 L23,0 Z M16.2224644,4.96535417 C16.0794115,3.94973692 14.465424,3.41432057 13.5955031,3.51120273 L13.4816976,3.52834742 C12.6539401,3.6257291 11.6869021,4.21348121 11.6123872,5.10449227 L11.6123872,6.20671347 C11.4525103,6.20671347 11.2452878,6.28956491 11.3132857,6.9374863 C11.3811197,7.5857954 11.8162351,7.76501301 12.1427653,8.08192555 C12.4613722,8.3911483 12.4009843,8.87979713 12.8715997,9.1434446 L12.875,9.72561382 L10.7449279,10.3743896 C10.0625,10.5776213 9.5,11.5841008 9.5,12.65 L18.5,12.65 C18.5,11.5841008 17.9375,10.5776213 17.2850023,10.3743896 L16.9323756,10.2770376 C16.2397485,10.0775605 15.125,9.72559479 15.125,9.72559479 L15.125,9.09985609 C15.197338,9.06558721 15.2045569,9.03572534 15.1634184,9.01124736 C15.4486294,8.73753799 15.453147,8.34501408 15.712502,8.08192555 C15.7646091,8.02910833 15.8205045,7.98009982 15.8777921,7.93209795 L16.0514348,7.78831021 C16.282137,7.59314766 16.4967741,7.36925849 16.5419907,6.9373109 C16.5954319,6.42792517 16.3676355,6.26797064 16.2675545,6.22280886 L16.2224644,6.20671347 L16.2224644,4.96535417 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
TheRecruitmentPositionIManage.displayName = 'TheRecruitmentPositionIManage';
export default TheRecruitmentPositionIManage;
