import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const BankAccountCancellationApplication = ({
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
          id="520.银行账户销户申请"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(5.000000, 3.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M3.47380276,1.13235215 L3.47380276,3.39705644 L6.94747913,3.39705644 L6.94747913,1.13235215 L15.0527241,1.13235215 L15.0527241,3.39705644 L18.5264005,3.39705644 L18.5264005,1.13235215 L20.8479742,1.13235215 C21.4848149,1.13235215 22.0000076,1.63624886 22.0000076,2.26470432 L22.0000076,24.5342966 C22.0000076,25.159355 21.4790254,25.6666488 20.8479742,25.6666488 L1.15222903,25.6666488 C0.845761856,25.6663503 0.552019351,25.5467722 0.335858032,25.3343165 C0.119696684,25.1218608 -0.00110458633,24.8340017 7.61234078e-06,24.5342966 L7.61234078e-06,2.26470432 C7.61234078e-06,1.63964592 0.521177836,1.13235215 1.15222903,1.13235215 L3.47380276,1.13235215 Z M18.7916689,19.2499866 L3.20834643,19.2499866 C2.9552161,19.2499866 2.75001341,19.4551892 2.75001341,19.7083196 C2.75001341,19.9333244 2.91214887,20.1204603 3.1259605,20.1592682 L3.20834643,20.1666526 L18.7916689,20.1666526 C19.0447993,20.1666526 19.2500019,19.96145 19.2500019,19.7083196 C19.2500019,19.4551892 19.0447993,19.2499866 18.7916689,19.2499866 Z M18.7916689,14.6666564 L3.20834643,14.6666564 C2.9552161,14.6666564 2.75001341,14.8718591 2.75001341,15.1249895 C2.75001341,15.3499942 2.91214887,15.5371302 3.1259605,15.5759381 L3.20834643,15.5833225 L18.7916689,15.5833225 C19.0447993,15.5833225 19.2500019,15.3781198 19.2500019,15.1249895 C19.2500019,14.8718591 19.0447993,14.6666564 18.7916689,14.6666564 Z M18.7916689,10.9999923 L14.2083388,10.9999923 C13.9552084,10.9999923 13.7500057,11.205195 13.7500057,11.4583253 C13.7500057,11.6833301 13.9121412,11.8704661 14.1259529,11.909274 L14.2083388,11.9166584 L18.7916689,11.9166584 C19.0447993,11.9166584 19.2500057,11.7114557 19.2500057,11.4583253 C19.2500057,11.205195 19.0447993,10.9999923 18.7916689,10.9999923 Z M3.68971184,5.79151383 C3.51072167,5.61252365 3.22052125,5.61252365 3.04153107,5.79151383 C2.8625409,5.970504 2.8625409,6.26070442 3.04153107,6.4396946 L3.04153107,6.4396946 L5.30987012,8.70793575 L3.04153107,10.9769599 L2.98849694,11.0404371 C2.86475064,11.2190662 2.88242868,11.4660384 3.04153107,11.6251407 L3.04153107,11.6251407 L3.10500825,11.6781749 C3.28363727,11.8019211 3.53060945,11.7842431 3.68971184,11.6251407 L3.68971184,11.6251407 L5.957953,9.35601864 L8.22697715,11.6251407 C8.40596738,11.8041309 8.6961678,11.8041309 8.87515795,11.6251407 C9.05414815,11.4461506 9.05414815,11.1559501 8.87515795,10.9769599 L8.87515795,10.9769599 L6.60603588,8.70793575 L8.87515795,6.4396946 L8.92819211,6.37621739 C9.05193836,6.1975884 9.03426037,5.95061622 8.87515795,5.79151383 L8.87515795,5.79151383 L8.81168075,5.7384797 C8.63305178,5.61473339 8.38607957,5.63241144 8.22697715,5.79151383 L8.22697715,5.79151383 L5.957953,8.05985287 L3.68971184,5.79151383 Z M5.78958703,0 L5.78958703,2.26470432 L4.63169489,2.26470432 L4.63169489,0 L5.78958703,0 Z M17.3685083,0 L17.3685083,2.26470432 L16.2106162,2.26470432 L16.2106162,0 L17.3685083,0 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
BankAccountCancellationApplication.displayName =
  'BankAccountCancellationApplication';
export default BankAccountCancellationApplication;