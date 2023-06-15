import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const DataLabels = ({
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
          id="939.数据标签"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(5.000000, 2.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M20.9864093,8.34473534 L21.0004095,27.1429019 C20.9912157,27.624869 20.5933705,28.0083041 20.1113922,27.9998617 L0.889017334,27.9998617 C0.408643219,28.0083251 0.0114722209,27.6274163 0,27.147102 L0,8.34473534 C0,8.06892997 0.137202667,7.81132493 0.366807165,7.65032179 L9.97659456,0.162975771 C10.2918501,-0.0543252569 10.7085594,-0.0543252569 11.023815,0.162975771 L20.6210021,7.65312185 C20.848829,7.80932634 20.9858251,8.06710897 20.9878093,8.3433353 L20.9864093,8.34473534 Z M9.80019111,18.2009276 L9.80019111,23.8010368 L11.2002184,23.8010368 L11.2002184,18.2009276 L9.80019111,18.2009276 Z M4.20008191,15.400873 L4.20008191,23.8010368 L5.60010923,23.8010368 L5.60010923,15.400873 L4.20008191,15.400873 Z M15.4003003,12.6008183 L15.4003003,23.8010368 L16.8003276,23.8010368 L16.8003276,12.6008183 L15.4003003,12.6008183 Z M10.5002048,9.80076373 C11.6600254,9.80076373 12.6002457,8.86054337 12.6002457,7.70072278 C12.6002457,6.54090218 11.6600254,5.60068182 10.5002048,5.60068182 C9.34038418,5.60068182 8.40016381,6.54090218 8.40016381,7.70072278 C8.40016381,8.86054337 9.34038418,9.80076373 10.5002048,9.80076373 L10.5002048,9.80076373 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
DataLabels.displayName = 'DataLabels';
export default DataLabels;
