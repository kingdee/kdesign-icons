import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const CaseTwo = ({
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
          id="案例2"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g id="视觉修正模版" transform="translate(-2.000000, -0.500000)"></g>
          <g
            id="编组"
            transform="translate(3.000000, 2.000000)"
            fill="#353535"
            fillRule="nonzero"
          >
            <path
              d="M26.9464945,18.8437613 C26.8171567,18.4335294 26.4733906,18.134262 26.0615521,18.0737361 L22.2528963,17.5021016 L20.5510841,13.9445179 C20.3672884,13.5544613 19.9860825,13.3123574 19.5674368,13.3123574 C19.1487909,13.3123574 18.767585,13.5578239 18.5837892,13.9411553 L16.8819771,17.4987391 L13.0733214,18.0670109 C12.6614828,18.1275369 12.3177167,18.4268043 12.1883791,18.8370362 C12.0590413,19.2472679 12.1679572,19.6944878 12.4640725,19.9937552 L15.2176048,22.7611385 L14.5675125,26.6717905 C14.49944,27.0954725 14.6662175,27.5258796 15.0031764,27.7780713 C15.1937794,27.9226612 15.4218222,27.9932748 15.6464614,27.9932748 C15.8200463,27.9932748 15.9970347,27.9495616 16.1570051,27.8621352 L19.5606294,26.0194547 L22.9676575,27.8654978 C23.1276278,27.9529242 23.3046164,27.9966374 23.4782011,27.9966374 C23.706244,27.9966374 23.9342868,27.9260237 24.1214862,27.7814338 C24.458445,27.5292422 24.6286262,27.0988351 24.5571501,26.6751531 L23.9070578,22.7645009 L26.66059,19.9971178 C26.9669162,19.7012129 27.0758321,19.253993 26.9464945,18.8437613 Z M24.2542275,19.7113006 L22.2494927,21.7254713 L22.0078354,21.9675753 L22.0622934,22.3038308 L22.5353972,25.1485529 C22.545608,25.2124414 22.5217827,25.2763299 22.4775355,25.3133181 L22.4775355,25.3133181 L22.4775355,25.3133181 C22.4605175,25.3267683 22.4400958,25.3334934 22.4196739,25.3334934 C22.4060595,25.3334934 22.3890413,25.3301309 22.3720233,25.3200432 L19.8941847,23.9783835 L19.5674368,23.8035307 L19.2406887,23.9783835 L16.7628502,25.3166807 L16.7628502,25.3166807 L16.7628502,25.3166807 C16.7492357,25.3234057 16.7356212,25.3267683 16.7186031,25.3267683 C16.7083922,25.3267683 16.6811632,25.3234057 16.6607415,25.306593 L16.6607415,25.306593 L16.6607415,25.306593 C16.6164944,25.2729674 16.592669,25.2057163 16.6028799,25.1418277 L17.0759836,22.2971058 L17.1304416,21.9608502 L16.8887843,21.7187463 L14.8840495,19.7045754 C14.8432061,19.6608622 14.8261879,19.5902485 14.8466096,19.5297226 C14.8636278,19.4759217 14.9044712,19.4389336 14.9453148,19.4322084 L17.7192686,19.0152516 L18.0766492,18.9614507 L18.2298123,18.6386453 L19.4687316,16.0494776 C19.4891534,16.0024018 19.5299968,15.9721388 19.5708403,15.9721388 C19.6116838,15.9721388 19.6525273,15.9990392 19.672949,16.0494776 L19.672949,16.0494776 L19.672949,16.0494776 L20.9118683,18.6386453 L21.0650315,18.9614507 L21.422412,19.0152516 L24.1963659,19.4322084 C24.240613,19.4389336 24.2814564,19.4759217 24.295071,19.5297226 C24.3120891,19.5969737 24.295071,19.6675873 24.2542275,19.7113006 Z M11.2932257,25.8479645 L6.66429658,25.8479645 C6.57580236,25.8479645 6.49411536,25.8580521 6.41242839,25.8782274 L2.52889295,25.8782274 C2.33488635,25.8782274 2.18512689,25.7504503 2.18512689,25.6361234 L2.18512689,2.33697611 C2.18512689,2.22264922 2.33148271,2.09487213 2.52889295,2.09487213 L15.4728765,2.09487213 L15.4728765,7.17233096 C15.4728765,8.10712141 16.2420957,8.86369642 17.1848996,8.86369642 L21.8887085,8.86369642 L21.8887085,12.5053441 C21.8887085,13.1005164 22.3754268,13.5813618 22.9778683,13.5813618 C23.5803099,13.5813618 24.0670281,13.1005164 24.0670281,12.5053441 L24.0670281,12.4717185 L24.0670281,7.93226851 L24.0670281,6.92350187 L17.7941484,0 L17.0964054,0 L15.3537497,0 L2.08982538,0 C0.935996729,0 0,0.880989557 0,1.96709501 L0,26.032905 C0,27.1156479 0.935996729,28 2.08982538,28 L6.66429658,28 L9.60843169,28 L11.2932257,28 C11.8956673,28 12.3823855,27.5191546 12.3823855,26.9239822 C12.3823855,26.3288099 11.8922637,25.8479645 11.2932257,25.8479645 Z M17.099809,2.24618711 L21.3032852,6.88315121 L17.099809,6.88315121 L17.099809,2.24618711 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
CaseTwo.displayName = 'CaseTwo';
export default CaseTwo;
