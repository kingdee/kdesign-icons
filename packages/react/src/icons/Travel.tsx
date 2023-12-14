import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const Travel = ({
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
          id="181.差旅"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="差旅"
            transform="translate(6.000000, 4.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M13.125,0 C14.5747474,0 15.75,1.15126779 15.75,2.57142857 L15.75,3.42857143 L17.5,3.42857143 C19.4329966,3.42857143 21,4.96359514 21,6.85714286 L21,18.8571429 C21,20.7506906 19.4329966,22.2857143 17.5,22.2857143 L15.75,22.2857143 L15.75,23.1428571 C15.75,23.616244 15.3582491,24 14.875,24 C14.3917509,24 14,23.616244 14,23.1428571 L14,22.2857143 L7,22.2857143 L7,23.1428571 C7,23.616244 6.60824912,24 6.125,24 C5.64175088,24 5.25,23.616244 5.25,23.1428571 L5.25,22.2857143 L3.5,22.2857143 C1.56700337,22.2857143 0,20.7506906 0,18.8571429 L0,6.85714286 C0,4.96359514 1.56700337,3.42857143 3.5,3.42857143 L5.25,3.42857143 L5.25,2.57142857 C5.25,1.15126779 6.42525257,0 7.875,0 L13.125,0 Z M17.5,5.14285714 L3.5,5.14285714 C2.57743343,5.14285714 1.82160552,5.84218096 1.75480001,6.72920371 L1.75,6.85714286 L1.75,18.8571429 C1.75,19.7608815 2.46389307,20.5012844 3.36939546,20.5667265 L3.5,20.5714286 L17.5,20.5714286 C18.4225666,20.5714286 19.1783945,19.8721047 19.2452,18.985082 L19.25,18.8571429 L19.25,6.85714286 C19.25,5.95340418 18.5361069,5.21300133 17.6306045,5.1475592 L17.5,5.14285714 Z M7.875,8.57142857 L7.875,17.1428571 C7.875,17.616244 7.48324912,18 7,18 C6.51675088,18 6.125,17.616244 6.125,17.1428571 L6.125,8.57142857 C6.125,8.09804168 6.51675088,7.71428571 7,7.71428571 C7.48324912,7.71428571 7.875,8.09804168 7.875,8.57142857 Z M14.875,8.57142857 L14.875,17.1428571 C14.875,17.616244 14.4832491,18 14,18 C13.5167509,18 13.125,17.616244 13.125,17.1428571 L13.125,8.57142857 C13.125,8.09804168 13.5167509,7.71428571 14,7.71428571 C14.4832491,7.71428571 14.875,8.09804168 14.875,8.57142857 Z M13.125,1.71428571 L7.875,1.71428571 C7.42626867,1.71428571 7.0564312,2.04517731 7.00588675,2.47146761 L7,2.57142857 L7,3.42857143 L14,3.42857143 L14,2.57142857 C14,2.13185499 13.6622148,1.76956528 13.2270435,1.72005235 L13.125,1.71428571 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
Travel.displayName = 'Travel';
export default Travel;
