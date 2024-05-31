import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const IntelligentScheduling = ({
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
          id="1936智能排班"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="hr_rzgzt_48_48"
            transform="translate(2.000000, 5.000000)"
            fill="#999999"
            fillRule="nonzero"
          >
            <g id="Group-18-Copy">
              <path
                d="M9.99324324,18 L1,18 C0.44771525,18 0,17.5522847 0,17 L0,1 C0,0.44771525 0.44771525,0 1,0 L26.9983108,0 C27.5505956,0 27.9983108,0.44771525 27.9983108,1 L27.9983108,17 C27.9983108,17.5522847 27.5505956,18 26.9983108,18 L18,18 L18,21 L19.881966,21 C20.2607381,21 20.6070012,21.2140024 20.7763932,21.5527864 L21.5,23 L6.5,23 L7.2236068,21.5527864 C7.39299881,21.2140024 7.73926193,21 8.11803399,21 L9.99324324,21 L9.99324324,18 Z M9.52419038,4.01268731 L9.40344764,4.03058271 C8.48542686,4.13564326 7.41293768,4.76974156 7.33029727,5.73101179 L7.33029727,6.92014678 C7.15298647,6.92014678 6.92316736,7.00953133 6.99858012,7.70854346 C7.07381108,8.40797388 7.55637395,8.60132339 7.91851072,8.94322553 C8.24772596,9.25404567 8.21207527,9.73290034 8.6277948,10.026908 L8.78585704,10.121508 C8.76344671,10.1460582 8.77761848,10.174058 8.83865273,10.2055073 L8.83865273,10.8788062 L6.89310882,11.5242873 C6.83568573,11.5430455 6.78152642,11.560674 6.7315206,11.5768719 C6.05644212,11.7955439 5.5,12.8784895 5.5,14.025369 L14.4030739,14.025369 C14.4030739,12.8784895 13.8466318,11.7955439 13.2011613,11.5768719 L12.8523322,11.4721238 C12.1671643,11.2574916 11.0644212,10.8787857 11.0644212,10.8787857 L11.0644212,10.2055073 C11.153253,10.1597347 11.1428155,10.1212693 11.064804,10.0901111 L11.0291541,10.1092121 C11.5947256,9.83035162 11.5308066,9.2853468 11.8775114,8.94322553 C12.2242464,8.60133334 12.7222312,8.40736636 12.797452,7.70835423 C12.8577984,7.1488099 12.5947943,6.98008373 12.4871788,6.93497503 L12.4430829,6.92014678 L12.4430829,5.5809022 C12.2841302,4.48312497 10.487659,3.9053783 9.52419038,4.01268731 L9.52419038,4.01268731 Z M23,10 L17,10 L17,12 L23,12 L23,10 Z M23,6 L17,6 L17,8 L23,8 L23,6 Z"
                id="形状"
                fill={fill}
              ></path>
            </g>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
IntelligentScheduling.displayName = 'IntelligentScheduling';
export default IntelligentScheduling;