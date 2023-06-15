import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const TrialAndCorrection = ({
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
          id="741.试用及转正"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(2.000000, 2.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M18.3035605,21.0240592 C18.3235773,21.0309434 20.3860025,22.8647614 20.3803492,22.8704145 C20.3747537,22.8760678 19.3894299,22.9340993 19.2982871,22.9340993 L19.2251997,22.9340993 L19.2383519,23.0721404 C19.306363,23.7645379 19.6111148,24.4002306 20.118746,24.906016 C20.7112903,25.4954451 21.4331072,25.7958129 22.2567391,25.7958129 C23.0709104,25.7958129 23.8009188,25.497291 24.3921939,24.9215911 C24.568365,24.7504962 24.6051106,24.7224035 24.6313574,24.7411513 C24.6488361,24.7530344 24.927341,24.9846989 25.2521097,25.2544356 C25.7471656,25.6677514 25.8383662,25.7514528 25.8240025,25.7795457 C25.8139653,25.7970819 25.7097278,25.9088186 25.5930302,26.0274774 C25.207692,26.4158152 24.8355637,26.6855521 24.3467378,26.9303112 C23.8983494,27.1550533 23.4388277,27.303074 22.9536361,27.3792186 C22.6893794,27.4210983 21.9725233,27.43177 21.707805,27.3980242 C20.651932,27.2637902 19.7090645,26.8042685 18.9635389,26.0618002 C18.1880166,25.2888162 17.7078436,24.2641509 17.6086248,23.1708401 L17.5967416,23.0384521 L17.0347707,23.0709289 C16.7250579,23.0889845 16.4646661,23.1014445 16.4559557,23.0990217 C16.4479711,23.0966951 16.7904372,22.7024745 17.239553,22.1971728 L17.3645003,22.0568201 C17.8721316,21.4861388 18.2954845,21.0215985 18.3035605,21.0240592 Z M18.2840758,3.954601 L18.3329718,4.21252477 L18.3329718,7.78112058 C18.3329718,7.78112058 19.4678496,8.01767881 19.2686714,9.88140448 C19.0700533,11.7440155 17.7551416,12.2608664 16.8395996,13.1718838 C15.9241376,14.0835115 16.0929136,15.5357496 14.5995414,16.2788103 L14.6923984,16.2274005 C14.8736524,16.3001267 14.9178674,16.387822 14.7686303,16.4904864 L14.692663,16.5354019 L14.692663,18.329442 C14.692663,18.329442 15.6282391,18.6536799 16.7682497,19.0387366 C16.0737819,20.1452441 15.6721739,21.4533486 15.6721739,22.8552537 C15.6721739,24.031217 15.9547612,25.1411786 16.4557338,26.1209363 L0,26.1202898 C0,23.0642764 1.46926629,20.7722663 3.25178785,20.1895859 C4.97064791,19.6277154 8.54805527,18.4198539 8.80139193,18.3342948 L8.81559785,18.3294966 L8.81559785,16.5354019 C8.6549149,16.4518485 8.617241,16.3774325 8.67567096,16.3121544 C8.64474901,16.2910378 8.62605274,16.2788103 8.62605274,16.2788103 C7.13268057,15.5357496 7.34220418,14.0829276 6.38599447,13.1718838 C5.42978478,12.2608399 4.15559412,11.7456343 3.95694932,9.88190868 C3.76687568,8.10396178 4.31115288,7.80612931 4.76822327,7.78272707 L4.83283706,7.78112058 L4.83283706,4.6125118 C5.05104625,2.05107906 7.88291709,0.361439558 10.3069194,0.0814916999 C12.6793123,-0.370098693 17.6031688,1.07360612 18.2840758,3.954601 Z M22.8303624,17.8626898 C24.2029281,18.0730683 25.3473483,18.8054994 26.1085644,19.9600145 C26.4719823,20.5126404 26.7397577,21.2612812 26.8204019,21.9512558 C26.8365538,22.0905084 26.8516674,22.2059945 26.8534557,22.2085327 C26.8559939,22.2103786 27.1139051,22.197284 27.4266176,22.1779017 C27.7388684,22.1592117 27.9973567,22.1461171 27.9999652,22.1485976 C28.0092398,22.1573657 26.1635962,24.2241173 26.1472713,24.2241173 C26.137984,24.2241173 25.6640409,23.8082633 25.0933018,23.2999398 L24.0548498,22.3753011 L24.423344,22.3534383 C24.6255889,22.3409205 24.8885188,22.3253455 25.0064854,22.3177888 L25.2206712,22.3053287 L25.2081535,22.1791707 C25.1345469,21.4542387 24.7755131,20.7349021 24.249711,20.2585363 C23.8475286,19.892638 23.3530496,19.6322462 22.8585705,19.5248937 C22.2254159,19.3875449 21.5866658,19.4430959 21.0096967,19.6859513 C20.6512974,19.8363947 20.3440652,20.04187 20.0555807,20.3241246 C19.9406713,20.4359188 19.8432985,20.5276385 19.8394913,20.5276385 C19.8351072,20.5276385 19.5553907,20.2966086 19.2182198,20.0137772 L18.6044474,19.5004928 L18.6406738,19.4499028 C18.6606329,19.4224446 18.7567944,19.318784 18.854225,19.220142 C19.5754076,18.4851726 20.5057573,18.0150367 21.5416711,17.8607861 C21.8482112,17.8158492 22.5313791,17.8158492 22.8303624,17.8626898 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
TrialAndCorrection.displayName = 'TrialAndCorrection';
export default TrialAndCorrection;
