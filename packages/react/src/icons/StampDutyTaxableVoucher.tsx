import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const StampDutyTaxableVoucher = ({
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
          id="546.印花税应税凭证"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(5.000000, 4.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M14.5395239,14.7440342 C15.0546118,15.7454143 15.3577001,16.9743244 15.3577001,18.3023407 C15.3577001,21.6717085 13.4066913,24.4031209 11,24.4031209 C9.13167203,24.4031209 7.53796129,22.7570342 6.91844258,20.4442653 C7.39477415,20.2691317 7.86817874,20.0479248 8.33118945,19.7806054 C9.7934112,18.9363913 10.9091806,17.7724517 11.5794632,16.5206322 C12.7964449,16.3594532 13.8549988,15.6953211 14.5395239,14.7440342 Z M14.9728916,10.4085094 C16.096882,10.4622378 17.3124255,10.8142023 18.4622807,11.4780715 C21.3802389,13.1627555 22.7702069,16.2180848 21.5668613,18.3023407 C20.6327654,19.9202422 18.410613,20.4774296 16.0981188,19.8577809 C16.1841098,19.3575488 16.2292402,18.8369719 16.2292402,18.3023407 C16.2292402,16.614158 15.7792547,15.0661084 15.0304844,13.859793 C15.241599,13.3486355 15.3577001,12.7886564 15.3577001,12.2015605 C15.3577001,11.5624007 15.2200942,10.9553807 14.9728916,10.4085094 Z M1.82059827,12.7884116 C2.21080019,13.113223 2.6390114,13.4125479 3.10194923,13.6798252 C4.56421089,14.5240624 6.13014246,14.9083752 7.54942186,14.8629225 C8.26320121,15.7876835 9.34127888,16.4176378 10.5688593,16.5382015 C9.95929202,17.4838719 9.046179,18.3614382 7.89541943,19.0258296 C4.97746124,20.7105135 1.63648434,20.3865965 0.433138667,18.3023407 C-0.50098282,16.6843948 0.127615024,14.4812843 1.82059827,12.7884116 Z M11,9.58694035 C12.4440147,9.58694035 13.6146201,10.7575457 13.6146201,12.2015605 C13.6146201,13.6455752 12.4440147,14.8161805 11,14.8161805 C9.55598521,14.8161805 8.38537988,13.6455752 8.38537988,12.2015605 C8.38537988,10.7575457 9.55598521,9.58694035 11,9.58694035 Z M5.90188116,4.54534005 C5.81583784,5.04617462 5.77075979,5.56645839 5.77075979,6.10078023 C5.77075979,7.78912852 6.22083368,9.33731631 6.96973601,10.543683 C6.75840097,11.0544854 6.64229982,11.6144645 6.64229982,12.2015605 C6.64229982,12.8410625 6.78005326,13.4483905 7.02750562,13.9954902 C5.90382574,13.941088 4.6879092,13.5891119 3.53771924,12.9250494 C0.619761074,11.2403654 -0.770207002,8.18503606 0.433138667,6.10078023 C1.36723455,4.48287866 3.58938698,3.92569135 5.90188116,4.54534005 Z M21.5668613,6.10078023 C22.5009828,7.71872613 21.8723849,9.9218366 20.1794017,11.6147093 C19.7891998,11.289898 19.3609886,10.990573 18.8980507,10.7232957 C17.4357338,9.87902663 15.8697392,9.49471669 14.4504172,9.5402035 C13.7369683,8.61565685 12.6592326,7.98578204 11.4320143,7.86500525 C12.0410028,6.91896572 12.9540067,6.04157544 14.1045805,5.37729131 C17.0225388,3.69260735 20.3635156,4.01652439 21.5668613,6.10078023 Z M11,0 C12.8683279,0 14.4620387,1.64608675 15.0815574,3.95885552 C14.6052259,4.13398931 14.1318212,4.35519618 13.6688105,4.62251549 C12.2065873,5.46673047 11.0908171,6.63067154 10.4205347,7.88249244 C9.2040637,8.04334866 8.14516557,8.70757127 7.46047605,9.65908669 C6.94538814,8.65770663 6.64229982,7.4287965 6.64229982,6.10078023 C6.64229982,2.73141235 8.59330867,0 11,0 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
StampDutyTaxableVoucher.displayName = 'StampDutyTaxableVoucher';
export default StampDutyTaxableVoucher;
