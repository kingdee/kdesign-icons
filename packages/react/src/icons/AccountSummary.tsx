import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const AccountSummary = ({
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
          id="526.账户汇总表"
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
              d="M18.1176471,2.58830593 C18.8323684,2.58830593 19.4117647,3.16770212 19.4117647,3.88242356 L19.4117647,22.0001413 C19.4117647,22.7148627 18.8323684,23.2942589 18.1176471,23.2942589 L1.29411767,23.2942589 C0.579396196,23.2942589 0,22.7148627 0,22.0001413 L0,3.88242356 C0,3.16770212 0.579396196,2.58830593 1.29411767,2.58830593 L18.1176471,2.58830593 Z M19.4117647,4.00177669e-16 C20.8412076,4.00177669e-16 22,1.15879242 22,2.5882353 L22,20.9648471 L20.7055718,20.96424 L20.7058824,2.58830593 C20.7058824,1.91562692 20.1926456,1.3628208 19.5363969,1.30011239 L19.4117647,1.29418826 L2.32941176,1.2936 L2.32941176,4.00177669e-16 L19.4117647,4.00177669e-16 Z M3.96,14.0801413 C3.74399528,14.0801413 3.56434462,14.2357914 3.527089,14.4410507 L3.52,14.5201413 L3.52,18.9201413 C3.52,19.1631466 3.71699472,19.3601413 3.96,19.3601413 C4.17600472,19.3601413 4.35565538,19.2044911 4.392911,18.9992318 L4.4,18.9201413 L4.4,14.5201413 C4.4,14.2771359 4.20300528,14.0801413 3.96,14.0801413 Z M9.68,14.9601413 C9.46399528,14.9601413 9.28434459,15.1157914 9.24708903,15.3210507 L9.24,15.4001413 L9.24,18.9201413 C9.24,19.1631466 9.43699469,19.3601413 9.68,19.3601413 C9.89600472,19.3601413 10.0756554,19.2044911 10.112911,18.9992318 L10.12,18.9201413 L10.12,15.4001413 C10.12,15.1571359 9.92300531,14.9601413 9.68,14.9601413 Z M15.4,11.4401413 C15.1839953,11.4401413 15.0043446,11.5957914 14.967089,11.8010507 L14.96,11.8801413 L14.96,18.9201413 C14.96,19.1631466 15.1569947,19.3601413 15.4,19.3601413 C15.6160047,19.3601413 15.7956554,19.2044911 15.832911,18.9992318 L15.84,18.9201413 L15.84,11.8801413 C15.84,11.6371359 15.6430053,11.4401413 15.4,11.4401413 Z M15.6743064,6.63244913 L15.6037748,6.66893025 L11.09064,9.54022125 L8.89976392,6.91255603 L3.29829674,10.1800785 L3.23355192,10.2260533 C3.09484114,10.3447076 3.04387103,10.538394 3.10620916,10.7099558 L3.13993729,10.7818445 L3.18591204,10.8465894 C3.30456628,10.9853001 3.49825271,11.0362702 3.66981455,10.9739321 L3.74170326,10.940204 L8.6988,8.04686125 L10.9097315,10.6991211 L16.0762252,7.41135226 L16.139145,7.36290985 C16.2923127,7.22128 16.3271786,6.98615087 16.211211,6.80391608 C16.0952434,6.6216812 15.8674774,6.55368156 15.6743064,6.63244913 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
AccountSummary.displayName = 'AccountSummary';
export default AccountSummary;
