import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const CurrencyConversion = ({
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
          id="975.币种转换"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(2.000000, 5.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M19.4042364,0.289470023 C19.215908,0.102891922 18.9652066,0 18.6982468,0 C18.4297015,0 18.1767965,0.103955953 17.9860226,0.292422714 C17.6238237,0.650682415 17.5886197,1.21246494 17.9009417,1.60658256 L24.6626505,8.32294142 L0.999983937,8.32294142 C0.448623529,8.32294142 0,8.76954246 0,9.31837038 C0,9.86722491 0.448650384,10.3137195 0.999983905,10.3137195 L24.6626236,10.3137195 L17.7372023,17.188167 C17.5287459,17.5986175 17.59343,18.0725641 17.9048652,18.3812666 C18.09056,18.565291 18.3422825,18.6666667 18.6136226,18.6666667 C18.9120242,18.6666667 19.1966129,18.5477079 19.4152007,18.3317359 L19.9701083,17.7831473 L21.4923487,16.2708115 L21.7794366,15.9915295 L27.7173969,10.0925337 C27.9134111,9.89752323 28.0132993,9.62946685 27.9985727,9.33792197 L27.9976053,9.31845016 L27.9985727,9.29895178 C28.0132993,9.00647585 27.9136798,8.73865891 27.7175582,8.54452621 L19.4042364,0.289470023 Z"
              id="路径"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
CurrencyConversion.displayName = 'CurrencyConversion';
export default CurrencyConversion;
