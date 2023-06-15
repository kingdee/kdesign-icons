import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const EntrustedTransactions = ({
  size = '1em',
  fill = 'currentColor',
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
          id="784.委托交易"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(2.000000, 4.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M11.8222988,18.6665783 L9.74875305,18.6665783 C8.24400099,17.5206462 6.7408215,16.3726505 5.23921884,15.2225946 C3.90144739,14.2581547 2.64767555,13.8661566 1.55568072,13.9548228 L1.55568072,1.55554819 C1.55568072,0.696442648 2.25212337,0 3.11122891,0 L24.8889036,0 C25.3014606,0 25.6971204,0.163887643 25.9888423,0.455609517 C26.2805642,0.747331392 26.4444518,1.14299116 26.4444518,1.55554819 L26.4444518,14.0590446 C26.1888571,13.814868 25.9358076,13.568041 25.6853443,13.3186036 L25.6184557,13.2517151 C25.0009031,12.6559401 24.3149063,12.4381634 23.7175758,12.4443855 L13.3980691,12.4443855 C12.8691827,12.4848298 12.3714073,12.5999404 11.8471876,12.8768279 C10.829859,13.410381 10.1578622,14.3717098 10.1858621,15.6690369 C10.213862,16.9134755 10.8267479,18.0179147 11.8222988,18.6665783 L11.8222988,18.6665783 Z M7.77787349,4.66664458 L7.77787349,6.22219277 L20.222259,6.22219277 L20.222259,4.66664458 L7.77787349,4.66664458 Z M7.77787349,9.33328916 L7.77787349,10.8888374 L20.222259,10.8888374 L20.222259,9.33328916 L7.77787349,9.33328916 Z M28,17.655472 L28,23.2974453 C28,24.1565508 27.3035574,24.8529935 26.4444518,24.8529935 L8.98031224,24.8529935 C8.98031224,24.8529935 8.4623147,25.0178816 8.02053901,24.6367723 C5.39814424,22.3207989 2.7837706,19.9957589 0.177465019,17.6616942 C-0.206755384,17.221474 0.152576248,16.4561443 0.152576248,16.4561443 C0.152576248,16.4561443 1.30368191,14.3063767 4.29033444,16.4561443 C5.94984919,17.7286799 7.61221588,18.9974919 9.27742195,20.2625708 L17.1267181,20.2625708 L19.5938176,19.9405723 C19.5938176,19.9405723 19.1520419,18.1765806 18.5982667,18.1392475 C17.058274,18.0288036 14.2722872,17.8141379 13.377847,17.6539164 C12.3651851,17.4314731 11.7616324,16.591477 11.7414103,15.6363704 C11.7102993,14.1492664 13.3980691,13.9999168 13.3980691,13.9999168 L23.7517979,13.9999168 C23.7517979,13.9999168 24.1717959,13.9906004 24.5762384,14.4105985 C24.9884587,14.8274854 27.5442244,17.2728071 28,17.6539164 L28,17.655472 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
EntrustedTransactions.displayName = 'EntrustedTransactions';
export default EntrustedTransactions;
