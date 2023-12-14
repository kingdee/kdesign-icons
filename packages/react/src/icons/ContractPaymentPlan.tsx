import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const ContractPaymentPlan = ({
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
          id="274.合同付款计划"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="合同付款计划"
            transform="translate(4.000000, 4.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M17.7777778,11.5555556 C21.2142162,11.5555556 24,14.3413394 24,17.7777778 C24,21.2142162 21.2142162,24 17.7777778,24 C14.3413394,24 11.5555556,21.2142162 11.5555556,17.7777778 C11.5555556,14.3413394 14.3413394,11.5555556 17.7777778,11.5555556 Z M21.3333333,0 C21.8242531,0 22.2222222,0.397969124 22.2222222,0.888888889 L22.2232978,11.1256525 C20.9518862,10.2742992 19.4228165,9.77777778 17.7777778,9.77777778 C13.3594998,9.77777778 9.77777778,13.3594998 9.77777778,17.7777778 C9.77777778,19.4228165 10.2742992,20.9518862 11.1256525,22.2232978 L0.888888889,22.2222222 C0.397969124,22.2222222 0,21.8242531 0,21.3333333 L0,0.888888889 C0,0.397969124 0.397969124,0 0.888888889,0 L21.3333333,0 Z M17.7777778,13.3333333 C17.3219237,13.3333333 16.9462158,13.6764802 16.8948691,14.118559 L16.8888889,14.2222222 L16.8888889,17.7777778 L16.8965977,17.8946169 C16.9170275,18.0487155 16.9775535,18.1948383 17.0720717,18.3182484 L17.1492384,18.4063171 L18.9270162,20.1840949 L19.0107561,20.2580403 C19.3304007,20.5065791 19.7807104,20.5065791 20.100355,20.2580403 L20.1840949,20.1840949 L20.2580403,20.100355 C20.5065791,19.7807104 20.5065791,19.3304007 20.2580403,19.0107561 L20.1840949,18.9270162 L18.6666667,17.4088889 L18.6666667,14.2222222 L18.6606865,14.118559 C18.6093397,13.6764802 18.2336318,13.3333333 17.7777778,13.3333333 Z M7.11111111,13.3333333 L3.55555556,13.3333333 C3.06463579,13.3333333 2.66666667,13.7313025 2.66666667,14.2222222 C2.66666667,14.6780763 3.0098135,15.0537842 3.45189234,15.1051309 L3.55555556,15.1111111 L7.11111111,15.1111111 C7.60203085,15.1111111 8,14.713142 8,14.2222222 C8,13.7313025 7.60203085,13.3333333 7.11111111,13.3333333 Z M7.11111111,9.77777778 L3.55555556,9.77777778 C3.06463579,9.77777778 2.66666667,10.1757469 2.66666667,10.6666667 C2.66666667,11.1225207 3.0098135,11.4982286 3.45189234,11.5495754 L3.55555556,11.5555556 L7.11111111,11.5555556 C7.60203085,11.5555556 8,11.1575864 8,10.6666667 C8,10.1757469 7.60203085,9.77777778 7.11111111,9.77777778 Z M17.7777778,6.22222222 L9.77777778,6.22222222 C9.28685804,6.22222222 8.88888889,6.62019137 8.88888889,7.11111111 C8.88888889,7.56696516 9.23203573,7.94267307 9.67411459,7.99401981 L9.77777778,8 L17.7777778,8 C18.2686975,8 18.6666667,7.60203085 18.6666667,7.11111111 C18.6666667,6.62019137 18.2686975,6.22222222 17.7777778,6.22222222 Z M4.44444444,1.77777778 C3.37777778,1.77777778 2.66666667,2.61183024 2.66666667,3.57263144 C2.66666667,4.14911215 2.84444444,4.53343263 3.2,4.91775312 L3.2,6.83935548 C3.2,7.03151573 3.37777778,7.22367599 3.55555556,7.03151573 L4.44444444,5.87855431 L5.33333333,7.03151573 C5.51111111,7.22367599 5.68888889,7.03151573 5.68888889,6.83935548 L5.68888889,4.91775312 C5.86666667,4.72559286 6.22222222,4.14911215 6.22222222,3.57263144 C6.22222222,2.41966999 5.33333333,1.77777778 4.44444444,1.77777778 Z M17.7777778,2.66666667 L9.77777778,2.66666667 C9.28685804,2.66666667 8.88888889,3.06463579 8.88888889,3.55555556 C8.88888889,4.01140964 9.23203573,4.38711748 9.67411459,4.43846423 L9.77777778,4.44444444 L17.7777778,4.44444444 C18.2686975,4.44444444 18.6666667,4.04647532 18.6666667,3.55555556 C18.6666667,3.06463579 18.2686975,2.66666667 17.7777778,2.66666667 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
ContractPaymentPlan.displayName = 'ContractPaymentPlan';
export default ContractPaymentPlan;
