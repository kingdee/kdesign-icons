import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const AccountBalanceInquiry = ({
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
          id="514.账户余额查询"
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
              d="M17.9657031,15.4952012 C20.5153419,15.4952012 22.5822325,17.5337539 22.5822325,20.048436 C22.5822325,21.1416535 22.1916035,22.1448857 21.5405016,22.9297607 L24,25.3560754 L23.3471241,26 L20.8874362,23.573936 C20.0915981,24.2162828 19.0742823,24.6016707 17.9657031,24.6016707 C15.4160643,24.6016707 13.3491736,22.5631181 13.3491736,20.048436 C13.3491736,17.5337539 15.4160643,15.4952012 17.9657031,15.4952012 Z M14.1510499,5.13567939 C18.718166,6.75795024 22.4850779,11.902052 22.4850779,16.832356 C22.4850779,16.9710153 22.4832736,17.108016 22.4796487,17.2433602 C21.534383,15.6565003 19.7708731,14.5899983 17.7513773,14.5899983 C17.0406619,14.5899983 16.361651,14.7220875 15.7388567,14.9624137 L15.7395545,14.4637501 L12.170209,14.4637501 L11.8849697,13.2060327 L10.6001081,13.2060327 L10.6001081,14.4637501 L6.74552339,14.4637501 C6.83674861,14.4637501 6.74552339,14.6347997 6.74552339,14.6347997 L6.74552339,15.7214675 L10.6001081,15.7214675 L10.6001081,18.2369023 L6.74552339,18.2369023 L6.74552339,19.4946197 L10.6001081,19.4946197 L10.6001081,22.0100545 L11.8849697,22.0100545 L11.8849697,19.4946197 L12.3054633,19.4944408 C12.2948295,19.629912 12.2894151,19.7668038 12.2894151,19.9049262 C12.2894151,22.4297385 14.0986205,24.5433634 16.5243258,25.0852026 C15.062032,25.4812969 13.3087391,25.678397 11.2425389,25.678397 C3.32250093,25.678397 0,22.7824102 0,16.832356 C0,11.902052 3.76691187,6.75795024 8.334028,5.13567939 L14.1510499,5.13567939 Z M14.3827569,15.7209058 C13.545563,16.3600365 12.9049868,17.2319456 12.5639586,18.2364736 L11.8849697,18.2369023 L11.8849697,15.7214675 L14.3827569,15.7209058 Z M10.4930364,11.7386957 L8.9940312,11.7386957 L8.9940312,13.2060327 L10.4930364,13.2060327 L10.4930364,11.7386957 Z M13.4910468,11.7386957 L11.9920416,11.7386957 L11.9920416,13.2060327 L13.4910468,13.2060327 L13.4910468,11.7386957 Z M8.24452861,8.80402179 L6.74552339,8.80402179 L6.74552339,10.2713588 L7.49502602,10.2713588 L7.49502602,11.7386957 L8.9940312,11.7386957 L8.9940312,10.2713588 L8.24452861,10.2713588 L8.24452861,8.80402179 Z M15.7395545,8.80402179 L14.2405493,8.80402179 L14.2405493,10.2713588 L13.4910468,10.2713588 L13.4910468,11.7386957 L14.9900519,11.7386957 L14.9900519,10.2713588 L15.7395545,10.2713588 L15.7395545,8.80402179 Z M15.2508796,0.458035968 L15.2751105,0.502977824 C15.5584456,0.611399616 15.7416694,0.862978496 15.7395726,1.1406664 C15.7395726,1.20139862 15.7193437,1.25362842 15.7031898,1.30950205 L15.73819,1.37509286 L15.5335735,1.61559258 L15.521458,1.63016829 L13.7916408,3.66834243 L7.9493008,3.66834243 L6.2208297,1.63381222 C6.2073681,1.62166576 6.1992911,1.6083047 6.18717571,1.59494358 L6.0000593,1.37630752 L6.03371331,1.31314598 C6.01755939,1.25605766 5.99602077,1.20139862 5.99602077,1.1406664 C5.99602077,0.849151616 6.19121421,0.60257872 6.4644849,0.5017632 L6.4873696,0.458035968 C6.4873696,0.458035968 8.88084442,0.00861734405 10.8691246,0.000114848045 C12.95029,-0.00838764795 15.2508796,0.458035968 15.2508796,0.458035968 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
AccountBalanceInquiry.displayName = 'AccountBalanceInquiry';
export default AccountBalanceInquiry;