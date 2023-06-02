import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const Coin = ({
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
          id="764.画板"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(2.000000, 6.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M10.1818182,0 C15.8050811,0 20.3636364,4.55855529 20.3636364,10.1818182 C20.3636364,15.8050811 15.8050811,20.3636364 10.1818182,20.3636364 C4.55855526,20.3636364 0,15.8050811 0,10.1818182 C0,4.55855529 4.55855526,0 10.1818182,0 Z M16.1515698,0 C22.6952771,0 28,4.55855529 28,10.1818182 C28,15.8050811 22.6952771,20.3636364 16.1515698,20.3636364 C15.2669743,20.3636364 14.4050204,20.2803318 13.5757521,20.1223537 C18.8810581,19.1117047 22.8485086,15.0449137 22.8485086,10.1818182 C22.8485086,5.31872266 18.8810581,1.25193169 13.5757521,0.241282669 C14.4050204,0.0833045717 15.2669743,0 16.1515698,0 Z M13.7233201,8.85375493 L6.6403162,8.85375493 C6.3958265,8.85375493 6.19762847,9.05195302 6.19762847,9.29644266 C6.19762847,9.51376685 6.3542294,9.69451494 6.56074251,9.73199818 L6.6403162,9.73913045 L9.73913045,9.73913045 L9.73913045,11.5098814 L6.6403162,11.5098814 C6.3958265,11.5098814 6.19762847,11.7080795 6.19762847,11.9525692 C6.19762847,12.1698934 6.3542294,12.3506414 6.56074251,12.3881246 L6.6403162,12.395257 L9.73913045,12.395257 L9.73913045,15.4940712 C9.73913045,15.7385608 9.93732845,15.9367589 10.1818182,15.9367589 C10.3991424,15.9367589 10.5798905,15.780158 10.6173736,15.5736448 L10.6245059,15.4940712 L10.6245059,12.395257 L13.7233201,12.395257 C13.9678099,12.395257 14.1660079,12.1970589 14.1660079,11.9525692 C14.1660079,11.735245 14.009407,11.554497 13.8028938,11.5170137 L13.7233201,11.5098814 L10.6245059,11.5098814 L10.6245059,9.73913045 L13.7233201,9.73913045 C13.9678099,9.73913045 14.1660079,9.54093239 14.1660079,9.29644266 C14.1660079,9.05195302 13.9678099,8.85375493 13.7233201,8.85375493 Z M13.1699604,5.31225298 L10.1818182,7.52569172 L7.19367588,5.31225298 L6.26415012,6.0974238 L10.1818182,8.63241102 L14.134009,6.0974238 L13.1699604,5.31225298 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
Coin.displayName = 'Coin';
export default Coin;