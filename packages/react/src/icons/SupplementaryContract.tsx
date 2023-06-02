import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const SupplementaryContract = ({
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
          id="619.补充合同"
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
              d="M19.9236456,0 C20.6963147,0 21.3226867,0.617857898 21.3226867,1.41020951 L21.3214694,5.26279239 L21.2729431,5.21695308 C20.9152558,4.89883514 20.5052272,4.64222665 20.0466718,4.64222665 C19.5744524,4.64222665 19.1402736,4.81293797 18.8211486,5.12365828 L9.45830102,14.2798992 C9.42815354,14.3341774 9.4138746,14.3527971 9.4075162,14.3753014 L8.30663922,18.3207369 C8.24234282,18.5504148 8.30822882,18.7979087 8.48207024,18.9724512 C8.61225262,19.0966 8.78368226,19.1648899 8.96623906,19.1648899 C9.02656146,19.1648899 9.08688386,19.1578975 9.14641147,19.1423587 L13.1539184,18.0739664 C13.2142408,18.0794048 13.2595169,18.063116 13.2936657,18.0289308 L21.3214694,10.1801021 L21.3226867,21.6893678 C21.3226867,22.4682048 20.7075357,23.0995772 19.9236456,23.0995772 L1.39904102,23.0995772 C0.626371993,23.0995772 0,22.4817193 0,21.6893678 L0,1.41020951 C0,0.631372319 0.615151004,0 1.39904102,0 L19.9236456,0 Z M5.36535987,17.8918576 L4.08053132,17.8918576 C3.79744972,17.8918576 3.56796674,18.1213406 3.56796674,18.4044223 C3.56796674,18.6470637 3.7365665,18.8503263 3.96300496,18.9034496 L4.08053132,18.9169868 L5.36535987,18.9169868 C5.64844148,18.9169868 5.87792446,18.6875038 5.87792446,18.4044223 C5.87792446,18.1213406 5.64844148,17.8918576 5.36535987,17.8918576 Z M16.1043819,9.32864136 L18.4107292,11.5399194 L13.4126388,16.3978805 C13.054959,16.7455321 12.3820086,17.147035 11.9225023,17.2906185 L9.42628293,18.0706213 L10.1420631,15.7893687 C10.2907003,15.3156493 10.6857888,14.6613804 11.0422177,14.3105989 L16.1043819,9.32864136 Z M6.61321772,13.8819241 L3.91416473,13.8819241 C3.63108313,13.8819241 3.40160014,14.1114071 3.40160014,14.3944887 C3.40160014,14.6371301 3.57019991,14.8403928 3.79663837,14.8935161 L3.91416473,14.9070533 L6.61321772,14.9070533 C6.8962993,14.9070533 7.12578231,14.6775703 7.12578231,14.3944887 C7.12578231,14.1114071 6.8962993,13.8819241 6.61321772,13.8819241 Z M20.3125574,6.00974883 L21.7962206,7.31330965 C21.9259473,7.4452609 22,7.62081915 22,7.79442482 C21.9990912,7.93682396 21.9493075,8.06579502 21.8576842,8.15852402 L19.0670855,10.8500512 L16.8229804,8.64124739 L19.4926543,6.06912673 C19.6963662,5.86082048 20.0785511,5.77071563 20.3125574,6.00974883 Z M9.61571158,9.81988315 L3.88865664,9.81988315 C3.60557504,9.81988315 3.37609206,10.0493661 3.37609206,10.3324477 C3.37609206,10.5750891 3.54469182,10.7783519 3.77113028,10.8314751 L3.88865664,10.8450123 L9.61571158,10.8450123 C9.89879319,10.8450123 10.1282762,10.6155293 10.1282762,10.3324477 C10.1282762,10.0493661 9.89879319,9.81988315 9.61571158,9.81988315 Z M13.8802489,5.65529591 L3.88865664,5.65529591 C3.60557504,5.65529591 3.37609206,5.88477889 3.37609206,6.16786047 C3.37609206,6.41050186 3.54469182,6.61376465 3.77113028,6.66688787 L3.88865664,6.68042509 L13.8802489,6.68042509 C14.1633305,6.68042509 14.3928135,6.4509421 14.3928135,6.16786047 C14.3928135,5.88477889 14.1633305,5.65529591 13.8802489,5.65529591 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
SupplementaryContract.displayName = 'SupplementaryContract';
export default SupplementaryContract;