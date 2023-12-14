import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const DesignChanges = ({
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
          id="609.设计变更"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(5.000000, 3.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M20.5903341,0 C21.3688711,0 22,0.621169597 22,1.42304332 L22,23.7059506 C22,24.4918756 21.3653088,25.1289939 20.5903341,25.1289939 L1.40966593,25.1289939 C0.631128919,25.1289939 0,24.5078244 0,23.7059506 L0,1.42304332 C0,0.637118188 0.634691243,0 1.40966593,0 L20.5903341,0 Z M5.76363451,17.6940691 L4.64681432,17.6940691 L4.64681432,18.894235 L17.6885921,18.894235 L17.6885921,17.6940691 L16.4670438,17.6940691 L16.4670438,18.2525349 L15.7253895,18.2525349 L15.7253895,17.6940691 L14.7103869,17.6940691 L14.7103869,18.2525349 L14.1519222,18.2525349 L14.1519222,17.6940691 L13.1003853,17.6940691 L13.1003853,18.2525349 L12.4646864,18.2525349 L12.4646864,17.6940691 L11.3478663,17.6940691 L11.3478663,18.2525349 L10.7894889,18.2525349 L10.7894889,17.6940691 L9.67258147,17.6940691 L9.67258147,18.2525349 L9.11420411,18.2525349 L9.11420411,17.6940691 L7.99738392,17.6940691 L7.99738392,18.2525349 L7.43891929,18.2525349 L7.43891929,17.6940691 L6.32209913,17.6940691 L6.32209913,18.2525349 L5.76363451,18.2525349 L5.76363451,17.6940691 Z M5.23113077,5.58498692 L5.21198201,5.58422086 C4.98854816,5.58422086 4.65351739,5.91925229 4.65351739,6.14268657 L4.65351739,6.14268657 L4.65351739,16.3804248 L17.1248796,16.3804248 C17.3483135,16.3804248 17.6833661,16.3245173 17.6833661,15.8219591 C17.6833661,15.3194011 17.5716382,15.2634934 17.1249014,15.2634934 L17.1249014,15.2634934 L5.77035937,15.2634934 L5.77035937,6.14268657 C5.77035937,5.58422086 5.21198201,5.58422086 5.21198201,5.58422086 L5.23113077,5.58498692 Z M15.8963317,5.64001943 C15.6729851,5.64001943 15.5054806,5.75172567 15.3379542,5.9192305 L15.3379542,5.9192305 L10.8705645,10.609976 L10.6472397,12.5644969 C10.6472397,12.6762032 10.7030382,12.7320017 10.7588585,12.7878222 C10.814766,12.8437298 10.8705645,12.8437298 10.9263847,12.8437298 L10.9263847,12.8437298 L10.9822923,12.8437298 L12.9367222,12.5644969 L17.3482699,7.8737296 C17.5157743,7.70620297 17.5715947,7.53869817 17.5715947,7.31526389 C17.5715947,7.0919387 17.5157962,6.86852622 17.3482699,6.75690725 L17.3482699,6.75690725 L16.3430685,5.80752426 C16.2314496,5.69590528 16.0639452,5.64001943 15.8963317,5.64001943 Z M11.5965772,10.9451165 L12.5458711,11.8944123 L11.4290509,12.0619389 L11.5965772,10.9451165 Z M15.8963753,6.36601179 L16.8457565,7.31530751 L16.6782301,7.53874178 L15.7288489,6.589337 L15.8963753,6.36601179 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
DesignChanges.displayName = 'DesignChanges';
export default DesignChanges;
