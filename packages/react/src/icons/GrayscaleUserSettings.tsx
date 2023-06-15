import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const GrayscaleUserSettings = ({
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
          id="432.灰度用户设置"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(4.000000, 6.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M22.6666667,0 C23.0202887,0 23.3594272,0.136485007 23.6094757,0.379429868 C23.8595242,0.622374703 24,0.951878645 24,1.29545456 L24,15.5454546 C24,16.2609143 23.4030464,16.8409091 22.6666667,16.8409091 L13.3333333,16.8409091 L13.3333333,19.4318182 L18,19.4318182 C18.3681898,19.4318182 18.6666667,19.7218156 18.6666667,20.0795455 C18.6666667,20.4372754 18.3681898,20.7272728 18,20.7272728 L6,20.7272728 C5.63181016,20.7272728 5.33333332,20.4372754 5.33333332,20.0795455 C5.33333332,19.7218156 5.63181016,19.4318182 6,19.4318182 L10.6666667,19.4318182 L10.6666667,16.8409091 L1.33333334,16.8409091 C0.59695365,16.8409091 -5.58099022e-16,16.2609143 -5.58099022e-16,15.5454546 L-5.58099022e-16,1.29545456 C-5.58099022e-16,0.579994744 0.59695365,0 1.33333334,0 L22.6666667,0 Z M14.1637019,4.37405213 C13.902815,4.22342902 13.5692203,4.31281548 13.4185971,4.57370235 L13.4185971,4.57370235 L9.60041531,11.1869872 C9.4497922,11.4478741 9.53917863,11.7814689 9.80006553,11.932092 C10.0609524,12.0827151 10.3945472,11.9933287 10.5451703,11.7324418 L10.5451703,11.7324418 L14.3633521,5.11915691 C14.5139753,4.85827001 14.4245888,4.52467527 14.1637019,4.37405213 Z M8.09020926,5.69743627 C7.92310792,5.44678424 7.58445191,5.37905303 7.33379988,5.54615437 L7.33379988,5.54615437 L4.06107261,7.72797263 L3.98077813,7.7929104 C3.73989469,8.02825146 3.76665953,8.43938837 4.06107261,8.63566375 L4.06107261,8.63566375 L7.33379988,10.8174819 L7.42025392,10.8645562 C7.65759085,10.9672737 7.94167473,10.8890019 8.09020926,10.6662001 L8.09020926,10.6662001 L8.13728341,10.5797461 C8.24000094,10.3424091 8.16172917,10.0583253 7.93892737,9.9097908 L7.93892737,9.9097908 L5.34763637,8.18181819 L7.93892737,6.45384563 L8.01563198,6.39214733 C8.20173161,6.21257386 8.23874377,5.92023805 8.09020926,5.69743627 Z M15.9098487,5.69743627 C15.7613141,5.92023805 15.7983264,6.21257386 15.984426,6.39214733 L16.0611305,6.45384563 L18.6524216,8.18181819 L16.0611305,9.9097908 C15.8383289,10.0583253 15.760057,10.3424091 15.8627746,10.5797461 L15.9098487,10.6662001 C16.0583832,10.8890019 16.3424672,10.9672737 16.579804,10.8645562 L16.666258,10.8174819 L19.9389853,8.63566375 C20.2333984,8.43938837 20.2601632,8.02825146 20.0192798,7.7929104 L19.9389853,7.72797263 L16.666258,5.54615437 C16.4156061,5.37905303 16.07695,5.44678424 15.9098487,5.69743627 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
GrayscaleUserSettings.displayName = 'GrayscaleUserSettings';
export default GrayscaleUserSettings;
