import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const ProjectRole = ({
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
          id="1743.项目角色"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <path
            d="M29,6 C29.5522847,6 30,6.44771525 30,7 L30,29 C30,29.5522847 29.5522847,30 29,30 L7,30 C6.44771525,30 6,29.5522847 6,29 L6,7 C6,6.44771525 6.44771525,6 7,6 L29,6 Z M25,2 C25.5522847,2 26,2.44771525 26,3 L26,3.98871533 L5.0904807,3.98871533 C4.53819595,3.98871533 4.0904807,4.43643058 4.0904807,4.98871533 L4.0904807,26 L3,26 C2.44771525,26 2,25.5522847 2,25 L2,3 C2,2.44771525 2.44771525,2 3,2 L25,2 Z M17.2704509,10.8453559 C15.9081985,11.0011666 14.3167303,11.9415699 14.1941001,13.3671876 L14.1941001,15.1307415 C13.9309883,15.1307415 13.5899594,15.2633039 13.7018645,16.2999781 C13.8134998,17.3372726 14.5295756,17.6240208 15.0669508,18.1310809 C15.2588706,18.3121738 15.3672285,18.5317281 15.4654634,18.7580123 L15.5831862,19.030753 C15.7258274,19.3479806 15.9062032,19.6535215 16.3258294,19.8603043 C16.3258294,19.8603043 16.3662638,19.8864938 16.4383074,19.9273343 L16.44,20.7081428 C16.44,20.7081428 15.6737005,20.969387 14.8648256,21.2426822 L14.5407205,21.3520523 C14.4330722,21.3883294 14.3263825,21.4242302 14.2223669,21.4591638 L13.9039402,21.5658594 C13.8021225,21.599884 13.7053019,21.6321362 13.6154959,21.6619215 L13.4863001,21.7046624 C12.5460214,22.0148399 12.0352235,23.0285349 12.345401,23.9688135 C12.5877855,24.7035832 13.2742099,25.1999551 14.0479261,25.2 L21.9691923,25.2 C22.9615277,25.1999783 23.7659744,24.3955315 23.7659744,23.4031962 C23.7659744,22.6878242 23.3424299,22.0459621 22.6968637,21.7603168 L22.5552033,21.7046624 C21.8528231,21.505567 19.9361038,20.8392658 19.6080723,20.7248928 L19.56,20.7081136 L19.5620826,19.9313695 C19.6392804,19.8882269 19.682839,19.8603043 19.682839,19.8603043 C20.5220914,19.4467386 20.4272419,18.6384659 20.9417176,18.1310809 C21.4562383,17.6240356 22.1951986,17.3363717 22.3068189,16.2996974 C22.418754,15.2624029 21.78097,15.1307415 21.78097,15.1307415 L21.78097,13.1445667 C21.5348447,11.445716 18.6429127,10.5866216 17.2704509,10.8453559 Z"
            id="形状结合"
            fill={fill}
          ></path>
        </g>
      </svg>
    </IconWrapper>
  );
};
ProjectRole.displayName = 'ProjectRole';
export default ProjectRole;