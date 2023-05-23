import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const AlarmClock = ({
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
          id="1283-闹钟"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(6.000000, 4.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M15.9972951,0 C18.399265,0 20.3464463,1.94718134 20.3464463,4.34915123 C20.3464463,5.30765888 20.0339332,6.21650389 19.4783247,6.95703653 C20.3670394,8.49186765 20.8759259,10.2753171 20.8759259,12.1776235 C20.8759259,15.4922421 19.3309307,18.4460076 16.9218014,20.358059 L19.0781618,22.5151069 C19.4178517,22.8547967 19.4178517,23.4055428 19.0781618,23.7452326 C18.764602,24.0587924 18.2712073,24.0829125 17.9299805,23.8175926 L17.8480361,23.7452326 L15.442013,21.3401331 C13.9562671,22.1532877 12.2511029,22.6155864 10.437963,22.6155864 C8.76801381,22.6155864 7.18965923,22.2234235 5.78996904,21.5261674 L3.57045665,23.7452326 C3.23076681,24.0849225 2.68002078,24.0849225 2.34033094,23.7452326 C2.00064108,23.4055428 2.00064108,22.8547967 2.34033094,22.5151069 L4.26202906,20.5932905 C1.67742744,18.6933545 0,15.6313811 0,12.1776235 C0,10.4303977 0.429297245,8.78343962 1.18816649,7.33647458 C0.43388491,6.53900603 0,5.47855375 0,4.34915123 C0,1.94718134 1.94718134,0 4.34915123,0 C5.86028828,0 7.23511283,0.777932528 8.0234713,2.02129366 C8.79708543,1.83695742 9.60616178,1.73966049 10.437963,1.73966049 C11.1043471,1.73966049 11.7561461,1.80210718 12.3878272,1.9214679 C13.1857304,0.736459968 14.5269899,0 15.9972951,0 Z M10.437963,3.47932099 C5.63402317,3.47932099 1.73966049,7.37368366 1.73966049,12.1776235 C1.73966049,16.9815632 5.63402317,20.8759259 10.437963,20.8759259 C15.2419028,20.8759259 19.1362654,16.9815632 19.1362654,12.1776235 C19.1362654,7.37368366 15.2419028,3.47932099 10.437963,3.47932099 Z M10.437963,5.21898148 C10.9183569,5.21898148 11.3077932,5.60841776 11.3077932,6.08881173 L11.3077932,11.3069234 L15.6569444,11.3077932 C16.1373384,11.3077932 16.5267747,11.6972295 16.5267747,12.1776235 C16.5267747,12.6580174 16.1373384,13.0474537 15.6569444,13.0474537 L9.56813272,13.0474537 L9.56813272,6.08881173 C9.56813272,5.60841776 9.95756902,5.21898148 10.437963,5.21898148 Z M4.34915123,1.73966049 C2.9079693,1.73966049 1.73966049,2.9079693 1.73966049,4.34915123 C1.73966049,4.87545651 1.89583725,5.37549993 2.17737661,5.79684417 C3.24779311,4.41244863 4.65829667,3.30501942 6.28356708,2.59913403 C5.79912363,2.06144327 5.10270541,1.73966049 4.34915123,1.73966049 Z M15.9972951,1.73966049 C15.3195281,1.73966049 14.6879822,1.99997277 14.2144186,2.44309759 C15.8404478,3.07498486 17.2693423,4.10222502 18.382433,5.40704875 C18.528712,5.08026137 18.6067858,4.72127054 18.6067858,4.34915123 C18.6067858,2.9079693 17.438477,1.73966049 15.9972951,1.73966049 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
AlarmClock.displayName = 'AlarmClock';
export default AlarmClock;
