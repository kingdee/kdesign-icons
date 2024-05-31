import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const ExceptionalPushRules = ({
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
          id="1943异常推送规则"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组-7"
            transform="translate(2.000000, 2.000000)"
            fill="#999999"
            fillRule="nonzero"
          >
            <path
              d="M22,16 C25.3137085,16 28,18.6862915 28,22 C28,25.3137085 25.3137085,28 22,28 C18.6862915,28 16,25.3137085 16,22 C16,18.6862915 18.6862915,16 22,16 Z M25,0 C25.5522847,0 26,0.44771525 26,1 L26.0013298,16.255617 C24.8672447,15.4641776 23.4878296,15 22,15 C18.1340068,15 15,18.1340068 15,22 C15,23.9595103 15.8051427,25.7309694 17.1026501,27.0015996 L1,27 C0.44771525,27 0,26.5522847 0,26 L0,1 C0,0.44771525 0.44771525,0 1,0 L25,0 Z M22,25 C21.4477153,25 21,25.4477153 21,26 C21,26.5522847 21.4477153,27 22,27 C22.5522847,27 23,26.5522847 23,26 C23,25.4477153 22.5522847,25 22,25 Z M23,18 L21,18 L21.5,24 L22.5,24 L23,18 Z M11.2928932,5.29289322 L11.2097046,5.38710056 C10.9046797,5.77939176 10.9324093,6.34662282 11.2928932,6.70710678 L13.585,9 L6,9 L5.88337887,9.00672773 C5.38604019,9.06449284 5,9.48716416 5,10 C5,10.5522847 5.44771525,11 6,11 L13.585,11 L11.2928932,13.2928932 L11.2097046,13.3871006 C10.9046797,13.7793918 10.9324093,14.3466228 11.2928932,14.7071068 C11.6834175,15.0976311 12.3165825,15.0976311 12.7071068,14.7071068 L16.7071068,10.7071068 L16.7902954,10.6128994 C17.0953203,10.2206082 17.0675907,9.65337718 16.7071068,9.29289322 L12.7071068,5.29289322 L12.6128994,5.20970461 L12.5114029,5.14038077 C12.1275055,4.91161211 11.6233369,4.96244959 11.2928932,5.29289322 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
ExceptionalPushRules.displayName = 'ExceptionalPushRules';
export default ExceptionalPushRules;