import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const ReportControlDropDown = ({
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
          id="1022.报表控件下拉"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(2.000000, 6.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M0.603540521,0.840712269 C-0.196511978,1.84477816 -0.212513028,3.56089077 0.623541834,4.6129598 L12.284307,19.2019171 C13.1323627,20.2619867 14.4724506,20.2619867 15.3005049,19.229919 C15.442148,19.0502559 15.5591881,18.8524985 15.6485278,18.6418804 L27.4333011,3.89291256 C28.1798942,2.92547902 28.1897112,1.57891257 27.4573027,0.600696519 C26.7572567,-0.275360968 1.43159486,-0.191355456 0.603540521,0.840712269 L0.603540521,0.840712269 Z"
              id="路径"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
ReportControlDropDown.displayName = 'ReportControlDropDown';
export default ReportControlDropDown;
