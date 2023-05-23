import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const EyesClosed = ({
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
          id="1150-闭眼"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(4.000000, 10.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M2.44774345,0.250041887 C2.49406175,0.289234303 2.60451305,0.403248511 2.76484559,0.599210495 C6.16745839,4.77141961 9.8515439,5.64790409 12.3420428,5.64790409 C16.6425178,5.64790409 21.5380048,1.20847421 22.0190024,0.503011007 C22.3432304,0.0327022069 22.9916865,-0.120504417 23.476247,0.189471807 C23.9572447,0.495885087 24.1211401,1.10871171 23.8325416,1.60039821 C23.6320453,1.93740259 22.6336449,2.98718621 21.1580462,4.1271359 L23.6900238,6.66334361 C24.1033254,7.07664521 24.1033254,7.74647891 23.6900238,8.15978061 C23.4833729,8.3699944 23.2125891,8.46975689 22.9418052,8.46975689 C22.6710214,8.46975689 22.4002375,8.36643139 22.1935867,8.15978061 L19.3979066,5.3617095 C18.4155281,5.98327949 17.3225261,6.5640527 16.1730799,6.99884611 L18.2102138,10.3973103 C18.5095012,10.8996856 18.3491686,11.5481417 17.8467933,11.850992 C17.675772,11.9543174 17.4869359,12.0006357 17.3016627,12.0006357 C16.9418052,12.0006357 16.5890736,11.8153626 16.3931116,11.4875716 L14.2767221,7.9566927 C14.2063768,7.83861309 14.1614232,7.7124632 14.1403346,7.58462749 C13.54594,7.70006761 12.9437763,7.76429369 12.3420428,7.76429369 C11.5961794,7.76429369 10.7612678,7.69961411 9.8665583,7.52517021 C9.85197161,7.6726847 9.8045862,7.82021101 9.72327788,7.9566927 L7.60688841,11.4875716 C7.40736338,11.8189255 7.05819481,12.0006357 6.6983373,12.0006357 C6.51306409,12.0006357 6.32422799,11.9543174 6.15320668,11.850992 C5.65083135,11.5517046 5.49049881,10.8996856 5.7897862,10.3973103 L7.85091161,6.96047149 C6.82331599,6.58167421 5.75186774,6.0418119 4.67181177,5.28656019 L4.62826601,5.33436489 L4.62826601,5.33436489 L1.8064133,8.15978061 C1.59976246,8.3699944 1.32897862,8.46975689 1.05819478,8.46975689 C0.787410936,8.46975689 0.516627064,8.36643139 0.309976248,8.15978061 C-0.103325416,7.74647891 -0.103325416,7.07664521 0.309976248,6.66334361 L3.01515113,3.95379549 C2.3785366,3.3704008 1.74518697,2.70247401 1.12232777,1.93887801 C1.0760095,1.88187091 1.04038006,1.83911549 1.01543942,1.810612 C0.62707836,1.42581389 0.595011864,0.798735487 0.954869368,0.374744991 C1.33254156,-0.0706232011 2.00237529,-0.127630305 2.44774345,0.250041887 Z"
              id="路径"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
EyesClosed.displayName = 'EyesClosed';
export default EyesClosed;
