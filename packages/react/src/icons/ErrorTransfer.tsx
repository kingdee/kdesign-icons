import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const ErrorTransfer = ({
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
          id="1274-错误转移"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(4.000000, 5.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M7.29505455,1.03645585 C10.7295671,1.03645585 13.5137896,3.82067837 13.5137896,7.25519087 C13.5137896,10.5045966 11.021597,13.1719195 7.84437416,13.4499973 L7.84427027,18.564773 L6.27541621,18.564773 L6.27534475,13.390729 C3.32594519,12.9042124 1.07631953,10.3424157 1.07631953,7.25519087 C1.07631953,3.82067837 3.86054202,1.03645585 7.29505455,1.03645585 Z M7.29505455,3.04458904 C4.96960338,3.04458904 3.08445272,4.92973968 3.08445272,7.25519087 C3.08445272,9.58064206 4.96960338,11.4657927 7.29505455,11.4657927 C9.62050577,11.4657927 11.5056564,9.58064206 11.5056564,7.25519087 C11.5056564,4.92973968 9.62050577,3.04458904 7.29505455,3.04458904 Z M1.56885405,6.5368919 C1.56885405,9.1362544 3.67605371,11.2434541 6.27541621,11.2434541 C8.87477872,11.2434541 10.9819784,9.1362544 10.9819784,6.5368919 C10.9819784,3.93752939 8.87477872,1.83032974 6.27541621,1.83032974 C3.67605371,1.83032974 1.56885405,3.93752939 1.56885405,6.5368919 M6.21873505,0 C9.65324755,0 12.4374701,2.78422252 12.4374701,6.21873502 C12.4374701,9.38461638 10.0717519,11.9979547 7.01167279,12.3873927 L6.96858825,18.3218621 L18.2491718,18.3362432 L18.2494171,16.2863967 C18.2494171,15.9975786 18.4835504,15.7634453 18.7723685,15.7634453 C18.8708875,15.7634453 18.9674027,15.7912747 19.0507972,15.843728 L23.7553816,18.8028074 C23.9999728,18.9565794 24.0733935,19.2794257 23.9196215,19.5239049 C23.8782772,19.5896375 23.8228128,19.6453375 23.757256,19.6869602 L19.0526716,22.6739528 C18.8088467,22.82876 18.4856915,22.7565968 18.3308843,22.5127718 C18.2776738,22.4289639 18.2494171,22.3317416 18.2494171,22.2324687 L18.2491718,20.3446379 L5.95596522,20.3288129 C5.41649897,20.3281176 4.97740691,19.902242 4.95416011,19.3693619 L4.95321915,19.3174695 L5.0038789,12.3188658 C2.15096764,11.7538903 0,9.23750537 0,6.21873502 C0,2.78422252 2.78422252,0 6.21873505,0 Z M9.944103,4.25457287 L4.25457287,9.944103 C4.8409823,10.2539218 5.5093735,10.4293369 6.21873505,10.4293369 C8.54418621,10.4293369 10.4293369,8.54418621 10.4293369,6.21873502 C10.4293369,5.5093735 10.2539218,4.8409823 9.944103,4.25457287 Z M6.21873505,2.00813319 C3.89328386,2.00813319 2.00813319,3.89328386 2.00813319,6.21873502 C2.00813319,7.10587957 2.28249293,7.92894393 2.75099208,8.60770788 L8.60770788,2.75099206 C7.92894396,2.2824929 7.10587957,2.00813319 6.21873505,2.00813319 Z M3.10936752,1.9508786 L10.2697029,9.111214 L8.84973834,10.5311786 L1.68940294,3.37084318 L3.10936752,1.9508786 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
ErrorTransfer.displayName = 'ErrorTransfer';
export default ErrorTransfer;
