import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const DeliveryOne = ({
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
          id="852.配送"
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
              d="M25.2,19.6 C25.2,18.0994845 24.3994846,16.712951 23.1,15.9626932 C21.8005155,15.2124354 20.1994845,15.2124354 18.9,15.9626932 C17.6005154,16.712951 16.8,18.0994845 16.8,19.6 L11.2,19.6 C11.2,17.2804041 9.31959595,15.4 7,15.4 C4.68040405,15.4 2.8,17.2804041 2.8,19.6 L1.4,19.6 C0.62680135,19.6 0,18.9731986 0,18.2 L0,12.6308 L3.8136,4.9756 C4.05040298,4.5003837 4.53565162,4.2000175 5.0666,4.2 L8.4,4.2 L8.4,1.4 C8.4,0.62680135 9.02680135,0 9.8,0 L26.6,0 C26.9713031,0 27.3273986,0.147499577 27.5899495,0.410050506 C27.8525004,0.672601436 28,1.02869691 28,1.4 L28,18.2 C28,18.9731986 27.3731986,19.6 26.6,19.6 L25.2,19.6 Z M5.6,7 L2.8,12.6308 C2.79149482,12.6308 2.78460001,12.6239052 2.78460001,12.6154 C2.78460001,12.6068948 2.79149482,12.6 2.8,12.6 L8.4,12.6 L8.4,7 L5.6,7 Z M18.2979996,19.6028 C18.2979996,18.0572 19.551,16.8056 21.098,16.8056 C22.6436238,16.8063734 23.8959726,18.0599759 23.8951997,19.6055998 C23.894426,21.1512236 22.6408236,22.4035724 21.0951998,22.4027997 C19.549576,22.4020262 18.297227,21.1484238 18.2979996,19.6028 L18.2979996,19.6028 Z M4.19999964,19.6028 C4.19999964,18.0572 5.453,16.8056 7,16.8056 C8.54562382,16.8063734 9.79797256,18.0599759 9.79719966,19.6055998 C9.79642604,21.1512236 8.54282358,22.4035724 6.99719977,22.4027997 C5.45157595,22.4020262 4.19922699,21.1484238 4.19999964,19.6028 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
DeliveryOne.displayName = 'DeliveryOne';
export default DeliveryOne;
