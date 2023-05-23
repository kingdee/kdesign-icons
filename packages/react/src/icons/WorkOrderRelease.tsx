import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const WorkOrderRelease = ({
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
          id="535.工单发布"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(5.000000, 4.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M18.5776655,2.63260475 C19.0383258,2.63260475 19.4117647,2.99813533 19.4117647,3.48425334 L19.4117647,22.8406591 C19.4117647,23.3110117 19.0413226,23.6923077 18.5776655,23.6923077 L0.834099254,23.6923077 C0.373438966,23.6923077 0,23.3267772 0,22.8406591 L0,3.48425334 C0,3.01390082 0.370442092,2.63260475 0.834099254,2.63260475 L18.5776655,2.63260475 Z M20.3076923,0 C21.242328,0 22,0.757671958 22,1.69230769 L22,21.0598449 L20.7053846,21.0590769 L20.7058823,2.16252716 C20.7058823,1.74713351 20.4065552,1.40165146 20.0118256,1.33000598 L19.8597285,1.31637332 L2.58753846,1.31492308 L2.58823529,0 L20.3076923,0 Z M9.13922584,7.89753049 L4.13512644,12.2281344 C3.79742152,12.5205403 3.79863483,12.9951936 4.13553089,13.2867895 L9.13922584,17.6173934 L9.13922584,14.7824334 C11.970285,14.7824334 14.5991258,15.3899248 16.8235294,18.4273819 C15.8124368,12.7574619 11.565848,10.7324905 9.13922584,10.7324905 L9.13922584,7.89753049 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
WorkOrderRelease.displayName = 'WorkOrderRelease';
export default WorkOrderRelease;
