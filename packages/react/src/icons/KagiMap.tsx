import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const KagiMap = ({
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
          id="kagi图"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g id="视觉修正模版" transform="translate(-2.000000, -0.500000)"></g>
          <path
            d="M25.059322,4 C26.6570029,4 27.9629829,5.24891996 28.0542293,6.82372721 L28.059322,7 L28.059322,24 C28.059322,24.5128358 28.4453622,24.9355072 28.9427009,24.9932723 L29.059322,25 L30.5,25 C31.0522847,25 31.5,25.4477153 31.5,26 C31.5,26.5128358 31.1139598,26.9355072 30.6166211,26.9932723 L30.5,27 L29.059322,27 C27.4616412,27 26.1556612,25.75108 26.0644147,24.1762728 L26.059322,24 L26.059322,7 C26.059322,6.48716416 25.6732818,6.06449284 25.1759432,6.00672773 L25.059322,6 L24.1440678,6 C23.631232,6 23.2085606,6.38604019 23.1507955,6.88337887 L23.1440678,7 L23.1440678,19.0338983 C23.1440678,20.672031 21.8160988,22 20.1779661,22 C18.5983381,22 17.3071149,20.7651921 17.2168996,19.2081793 L17.2118644,19.0338983 L17.2118644,11.5 C17.2118644,10.9871642 16.8258242,10.5644928 16.3284855,10.5067277 L16.2118644,10.5 L15.2966102,10.5 C14.7837743,10.5 14.361103,10.8860402 14.3033379,11.3833789 L14.2966102,11.5 L14.2966102,24.0338983 C14.2966102,25.672031 12.9686412,27 11.3305085,27 C9.75088048,27 8.45965732,25.7651921 8.36944193,24.2081793 L8.36440678,24.0338983 L8.36440678,21 C8.36440678,20.4871642 7.97836659,20.0644928 7.48102791,20.0067277 L7.36440678,20 L6.44915254,20 C5.9363167,20 5.51364538,20.3860402 5.45588027,20.8833789 L5.44915254,21 L5.44915254,24 C5.44915254,25.5976809 4.20023258,26.9036609 2.62542533,26.9949073 L2.44915254,27 L1.5,27 C0.94771525,27 0.5,26.5522847 0.5,26 C0.5,25.4871642 0.88604019,25.0644928 1.38337887,25.0067277 L1.5,25 L2.44915254,25 C2.96198838,25 3.3846597,24.6139598 3.44242481,24.1166211 L3.44915254,24 L3.44915254,21 C3.44915254,19.4023191 4.69807251,18.0963391 6.27287975,18.0050927 L6.44915254,18 L7.36440678,18 C8.96208766,18 10.2680677,19.24892 10.3593141,20.8237272 L10.3644068,21 L10.3644068,24.0338983 C10.3644068,24.5674615 10.7969452,25 11.3305085,25 C11.82596,25 12.2343035,24.6270459 12.2901105,24.1465662 L12.2966102,24.0338983 L12.2966102,11.5 C12.2966102,9.90231912 13.5455301,8.59633912 15.1203374,8.50509269 L15.2966102,8.5 L16.2118644,8.5 C17.8095453,8.5 19.1155253,9.74891996 19.2067717,11.3237272 L19.2118644,11.5 L19.2118644,19.0338983 C19.2118644,19.5674615 19.6444029,20 20.1779661,20 C20.6734177,20 21.0817612,19.6270459 21.1375681,19.1465662 L21.1440678,19.0338983 L21.1440678,7 C21.1440678,5.40231912 22.3929878,4.09633912 23.967795,4.00509269 L24.1440678,4 L25.059322,4 Z"
            id="路径-5"
            fill={fill}
            fillRule="nonzero"
          ></path>
        </g>
      </svg>
    </IconWrapper>
  );
};
KagiMap.displayName = 'KagiMap';
export default KagiMap;