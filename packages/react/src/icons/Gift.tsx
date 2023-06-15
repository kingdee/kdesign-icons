import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const Gift = ({
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
          id="31.礼物"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="礼物"
            transform="translate(4.000000, 4.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M11.1428571,12.0013313 L11.1428571,24 L4.28571429,24 C2.39216656,24 0.857142857,22.4651466 0.857142857,20.5718089 L0.857142857,12.0013313 L11.1428571,12.0013313 Z M23.1428571,12.0013313 L23.1428571,20.5718089 C23.1428571,22.4651466 21.6078334,24 19.7142857,24 L12.8571429,24 L12.8571429,12.0013313 L23.1428571,12.0013313 Z M11.1428571,5.14494919 L11.1428571,10.2872358 L0,10.2872358 L0,6.00199696 C0,5.52866256 0.383755941,5.14494919 0.857142857,5.14494919 L11.1428571,5.14494919 Z M23.1428571,5.14494919 C23.616244,5.14494919 24,5.52866256 24,6.00199696 L24,10.2872358 L12.8571429,10.2872358 L12.8571429,5.14494919 L23.1428571,5.14494919 Z M6.60000005,0 C6.70304215,0 6.80434782,0.0265341713 6.89415678,0.0770461257 L11.4311806,2.62883884 C11.6374767,2.74486761 11.7106426,3.00614508 11.5946009,3.21241843 C11.5186931,3.34735075 11.3759,3.43085366 11.2210686,3.43085366 L6.85714286,3.43085366 C6.38375594,3.43085366 6,3.0471403 6,2.5738059 L6,0.599933462 C6,0.268599373 6.26862917,0 6.60000005,0 Z M17.4,0 C17.7037566,0 17.9547927,0.225698057 17.9945227,0.518526047 L18,0.599933462 L18,2.5738059 C18,3.01333071 17.6691084,3.37558023 17.2428181,3.42508767 L17.1428571,3.43085366 L12.7789314,3.43085366 C12.6241,3.43085366 12.4813069,3.34735075 12.4053991,3.21241843 C12.302251,3.02906435 12.3486001,2.80225021 12.5050617,2.67262 L12.5688194,2.62883884 L17.1058432,0.0770461257 C17.1956522,0.0265341713 17.2969578,0 17.4,0 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
Gift.displayName = 'Gift';
export default Gift;
