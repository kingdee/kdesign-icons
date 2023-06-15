import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const OnOrderQuery = ({
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
          id="506.上划单查询"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(4.000000, 3.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M16.9057249,14.04 C19.9032306,14.04 22.333189,16.555007 22.333189,19.6574253 C22.333189,21.0062012 21.8739088,22.243952 21.1083845,23.2122853 L24,26.2055761 L23.2324407,27 L20.3399242,24.0075573 C19.4044027,24.7996473 18.208682,25.2748506 16.9057249,25.2748506 C13.9082193,25.2748506 11.4782609,22.7598436 11.4782609,19.6574253 C11.4782609,16.555007 13.9082193,14.04 16.9057249,14.04 Z M19.5237881,0 C20.2230944,0 20.7977828,0.533552736 20.8629735,1.2157784 L20.8691321,1.345344 L20.8694255,14.1643451 C19.7794058,13.3037882 18.4244527,12.7938462 16.9561698,12.7938462 C13.3543875,12.7938462 10.434566,15.8624176 10.434566,19.6476923 C10.434566,20.9284492 10.7688341,22.1271562 11.3506858,23.1527128 L10.4809281,23.76 L7.8093417,21.9077487 L5.22286342,23.76 C3.6901095,22.5251658 2.81205875,21.9077487 2.5887112,21.9077487 C2.37599923,21.9077487 1.58319098,22.4677642 0.2102864,23.5877952 L0,23.76 L0,1.345344 C0,0.646037664 0.533552736,0.071349248 1.2157784,0.006158624 L1.345344,0 L19.5237881,0 Z M9.8910991,4.5154751 C9.76953741,4.5154751 9.64797571,4.55703718 9.54490461,4.6400961 L9.47135699,4.71016992 L5.82598381,8.79761459 C5.59408086,9.05763219 5.59408086,9.47911011 5.82598381,9.73900029 C6.03459421,9.97290141 6.36003059,9.99629158 6.59200621,9.80917059 L6.66558141,9.73900029 L9.36105661,6.7154751 L9.36121869,16.0268618 C9.36121869,16.3195066 9.59845421,16.5567421 9.8910991,16.5567421 C10.1512278,16.5567421 10.3675763,16.3692968 10.4124423,16.1221084 L10.4209794,16.0268618 L10.4200566,6.7144751 L13.1166167,9.73912762 C13.3485196,9.99901779 13.7244249,9.99901779 13.9562143,9.73912762 C14.1623502,9.50811411 14.1852542,9.1494263 14.0249263,8.88995139 L13.9562143,8.79774202 L10.3108411,4.71029725 C10.1950032,4.58054317 10.0430511,4.5154751 9.8910991,4.5154751 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
OnOrderQuery.displayName = 'OnOrderQuery';
export default OnOrderQuery;
