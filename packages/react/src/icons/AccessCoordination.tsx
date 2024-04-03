import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const AccessCoordination = ({
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
          id="1718.准入协同"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <path
            d="M16.138054,28.3861994 L18.740489,31.0370074 L16.6754432,31.5010294 C16.1365946,31.6221103 15.601616,31.2834426 15.480535,30.744594 C15.4397832,30.5632351 15.4503862,30.3741072 15.511154,30.1984398 L16.138054,28.3861994 Z M25.6962542,18.6526298 L28.3685074,21.3944692 L19.5834428,30.3359642 L16.9111896,27.5941248 L25.6962542,18.6526298 Z M9.772,2.92857143 L9.77272727,3.71428571 C9.77272727,4.76864751 10.5886051,5.63245084 11.6234649,5.70879998 L11.7727273,5.71428571 L19.2272727,5.71428571 C20.3318422,5.71428571 21.2272727,4.81885521 21.2272727,3.71428571 L21.227,2.92857143 L25,2.92857143 C25.5522847,2.92857143 26,3.37628668 26,3.92857143 L26,17.3123605 L15.131675,28 L6,28 C5.44771525,28 5,27.5522847 5,27 L5,3.92857143 C5,3.37628668 5.44771525,2.92857143 6,2.92857143 L9.772,2.92857143 Z M14.5714286,19.6428571 L10.7012987,19.6428571 C10.1884629,19.6428571 9.77272727,20.0585927 9.77272727,20.5714286 C9.77272727,21.0842644 10.1884629,21.5 10.7012987,21.5 L14.5714286,21.5 C15.0842644,21.5 15.5,21.0842644 15.5,20.5714286 C15.5,20.0585927 15.0842644,19.6428571 14.5714286,19.6428571 Z M28.9665718,17.0633495 L29.9378065,18.0526371 C30.4000219,18.5234439 30.3974701,19.2893719 29.9337206,19.7617413 L29.112202,20.59853 L26.4671374,17.9043 L27.288656,17.0675114 C27.7531279,16.594406 28.5086301,16.5968958 28.9665718,17.0633495 Z M20.2987013,15 L10.7012987,15 C10.1884629,15 9.77272727,15.4157356 9.77272727,15.9285714 C9.77272727,16.4414073 10.1884629,16.8571429 10.7012987,16.8571429 L20.2987013,16.8571429 C20.8115371,16.8571429 21.2272727,16.4414073 21.2272727,15.9285714 C21.2272727,15.4157356 20.8115371,15 20.2987013,15 Z M20.2987013,10.3571429 L10.7012987,10.3571429 C10.1884629,10.3571429 9.77272727,10.7728784 9.77272727,11.2857143 C9.77272727,11.7985501 10.1884629,12.2142857 10.7012987,12.2142857 L20.2987013,12.2142857 C20.8115371,12.2142857 21.2272727,11.7985501 21.2272727,11.2857143 C21.2272727,10.7728784 20.8115371,10.3571429 20.2987013,10.3571429 Z M20.2727273,2 L20.2727273,3.78571429 C20.2727273,4.33799904 19.825012,4.78571429 19.2727273,4.78571429 L11.7272727,4.78571429 C11.174988,4.78571429 10.7272727,4.33799904 10.7272727,3.78571429 L10.7272727,2 L20.2727273,2 Z"
            id="形状结合"
            fill={fill}
          ></path>
        </g>
      </svg>
    </IconWrapper>
  );
};
AccessCoordination.displayName = 'AccessCoordination';
export default AccessCoordination;
