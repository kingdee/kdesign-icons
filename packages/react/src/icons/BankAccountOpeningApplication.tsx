import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const BankAccountOpeningApplication = ({
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
          id="512.银行账户开户申请"
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
              d="M3.47380276,1.13235215 L3.47380276,3.39705644 L6.94747913,3.39705644 L6.94747913,1.13235215 L15.0527241,1.13235215 L15.0527241,3.39705644 L18.5264005,3.39705644 L18.5264005,1.13235215 L20.8479742,1.13235215 C21.4848149,1.13235215 22.0000076,1.63624886 22.0000076,2.26470432 L22.0000076,24.5342966 C22.0000076,25.159355 21.4790254,25.6666488 20.8479742,25.6666488 L1.15222903,25.6666488 C0.845761856,25.6663503 0.552019351,25.5467722 0.335858032,25.3343165 C0.119696684,25.1218608 -0.00110458633,24.8340017 7.61234078e-06,24.5342966 L7.61234078e-06,2.26470432 C7.61234078e-06,1.63964592 0.521177836,1.13235215 1.15222903,1.13235215 L3.47380276,1.13235215 Z M18.7916689,18.3333206 L4.12501246,18.3333206 C3.87188213,18.3333206 3.66667944,18.5385232 3.66667944,18.7916536 C3.66667944,19.0447839 3.87188213,19.2499866 4.12501246,19.2499866 L4.12501246,19.2499866 L18.7916689,19.2499866 C19.0447993,19.2499866 19.2500019,19.0447839 19.2500019,18.7916536 C19.2500019,18.5385232 19.0447993,18.3333206 18.7916689,18.3333206 L18.7916689,18.3333206 Z M18.7916689,14.6666564 L4.12501246,14.6666564 C3.87188213,14.6666564 3.66667944,14.8718591 3.66667944,15.1249895 C3.66667944,15.3781198 3.87188213,15.5833225 4.12501246,15.5833225 L4.12501246,15.5833225 L18.7916689,15.5833225 C19.0447993,15.5833225 19.2500019,15.3781198 19.2500019,15.1249895 C19.2500019,14.8718591 19.0447993,14.6666564 18.7916689,14.6666564 L18.7916689,14.6666564 Z M5.93504753,5.20077655 C5.3679372,5.27468124 4.7054937,5.7191406 4.65416043,6.39356382 L4.65416043,7.22748366 C4.54477169,7.22748366 4.40268858,7.29004484 4.44943849,7.78022198 C4.49588286,8.27074282 4.79410468,8.40652121 5.01777104,8.64645369 C5.24143738,8.88604232 5.19224301,9.26862801 5.54179809,9.46387385 C5.54179809,9.46387385 5.54577026,9.46731125 5.55371475,9.4724674 C5.53965914,9.48965452 5.54821475,9.50959164 5.58610357,9.53159116 L5.58610357,10.0038936 C5.58610357,10.0038936 5.26765402,10.1249186 4.9228045,10.2548533 L4.69219864,10.3415662 C4.54012726,10.3986142 4.39566078,10.4525008 4.28443872,10.4933833 C3.86735597,10.6466926 3.52360647,11.249961 3.52360647,12.054319 L9.02360647,12.054319 C9.02360647,11.249961 8.67984921,10.6466926 8.28109978,10.4933833 C8.16804433,10.457634 7.98369279,10.3913299 7.7881375,10.3188129 L7.55193933,10.2303682 C7.24009386,10.1126203 6.96110161,10.0038936 6.96110161,10.0038936 L6.96110161,9.53124743 C7.01579595,9.49927934 7.00968491,9.4724674 6.96171274,9.45046788 C7.28712892,9.25109713 7.25382341,8.88054241 7.46343424,8.64610993 C7.67732285,8.40617745 7.98532246,8.2700553 8.0317668,7.77987822 C8.07821114,7.28935735 7.8126838,7.22713993 7.8126838,7.22713993 L7.8126838,6.2880348 C7.71032282,5.48470803 6.50643564,5.07840415 5.93504753,5.20077655 Z M18.7916689,10.9999923 L14.2083388,10.9999923 C13.9552084,10.9999923 13.7500057,11.205195 13.7500057,11.4583253 C13.7500057,11.7114557 13.9552084,11.9166584 14.2083388,11.9166584 L14.2083388,11.9166584 L18.7916689,11.9166584 C19.0447993,11.9166584 19.2500057,11.7114557 19.2500057,11.4583253 C19.2500057,11.205195 19.0447993,10.9999923 18.7916689,10.9999923 L18.7916689,10.9999923 Z M5.78958703,0 L5.78958703,2.26470432 L4.63169489,2.26470432 L4.63169489,0 L5.78958703,0 Z M17.3685083,0 L17.3685083,2.26470432 L16.2106162,2.26470432 L16.2106162,0 L17.3685083,0 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
BankAccountOpeningApplication.displayName = 'BankAccountOpeningApplication';
export default BankAccountOpeningApplication;
