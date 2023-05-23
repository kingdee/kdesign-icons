import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const SalaryAccountingWizard = ({
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
          id="953.薪酬核算向导"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(2.000000, 3.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M26.1335229,14.1627659 C25.5561182,13.8102758 24.925976,13.5525558 24.2670457,13.3994009 L24.2670457,11.8527695 C24.270509,11.7527945 24.2332994,11.6556853 24.1639161,11.5836231 C24.0945329,11.5115609 23.9989023,11.470701 23.8988679,11.4703762 L19.0343707,11.4703762 C18.9347099,11.4718659 18.8397697,11.5130894 18.7706382,11.58489 C18.7015068,11.6566907 18.6639078,11.7531237 18.6661928,11.8527695 L18.6661928,14.7925065 C17.823266,15.5221678 17.177902,16.4525675 16.789765,17.49769 C16.7567308,17.3303209 16.6106585,17.2091878 16.440067,17.2076966 L9.69345585,17.2076966 C9.49247104,17.2224459 9.33621946,17.388579 9.33380717,17.5900899 L9.33380717,17.5872468 L9.33380717,20.6506575 C9.33380717,20.866731 9.49444076,21.0302076 9.69345585,21.0302076 L16.4713408,21.0302076 C16.5893283,21.7082805 16.8096665,22.3508149 17.1138752,22.9407524 L1.87927095,22.9407524 C0.845814086,22.9379093 0.00852920932,22.083566 0,21.0245215 L0,1.91623089 C0,0.860029452 0.838706391,0 1.87927095,0 L24.2542519,0 C25.2862872,0.0028430781 26.1249937,0.857186374 26.1335229,1.91623089 L26.1335229,14.1627659 Z M1.86789867,6.11687059 L1.86789867,9.18028125 C1.86522304,9.27952634 1.90258764,9.37567489 1.97157641,9.44707025 C2.04056517,9.51846561 2.13537653,9.55910381 2.23465502,9.55983146 L7.09915216,9.55983146 C7.30665831,9.55516995 7.47129859,9.38353723 7.46733004,9.17601666 L7.46733004,6.11687059 C7.47080134,6.01664934 7.43339941,5.91931955 7.36370627,5.84721396 C7.29401312,5.77510836 7.19801196,5.73441724 7.09773062,5.73447727 L2.23607656,5.73447727 C2.1361631,5.73596141 2.04100164,5.77738049 1.97182856,5.84949142 C1.90265548,5.92160236 1.86522806,6.01840335 1.86789867,6.11829213 L1.86789867,6.11687059 Z M9.33380717,6.11687059 L9.33380717,9.18028125 C9.33380717,9.39635476 9.49444076,9.55983146 9.69345585,9.55983146 L16.440067,9.55983146 C16.614916,9.55983146 16.7997157,9.38924709 16.7997157,9.17885974 L16.7997157,6.11687059 C16.7997157,5.89937554 16.6390821,5.73447734 16.440067,5.73447734 L9.69345585,5.73447734 C9.49193225,5.74927375 9.33548522,5.91623303 9.33380717,6.11829213 L9.33380717,6.11687059 Z M18.6661928,6.11687059 L18.6661928,9.18028125 C18.6635127,9.27977151 18.7010704,9.37613806 18.7703678,9.44757591 C18.8396652,9.51901376 18.934845,9.55948476 19.0343707,9.55983146 L23.8988679,9.55983146 C23.9982771,9.55833754 24.0929972,9.51730984 24.1620874,9.44581882 C24.2311776,9.3743278 24.2689471,9.27826199 24.2670457,9.17885974 L24.2670457,6.11687059 C24.270509,6.01689558 24.2332994,5.91978645 24.1639161,5.84772427 C24.0945329,5.77566209 23.9989023,5.73480212 23.8988679,5.73447734 L19.0343707,5.73447734 C18.9344573,5.73596141 18.8392958,5.77738049 18.7701227,5.84949142 C18.7009496,5.92160236 18.6635222,6.01840335 18.6661928,6.11829213 L18.6661928,6.11687059 Z M1.86647713,11.8527695 L1.86647713,14.9147586 C1.8634064,15.0144915 1.90079058,15.1112289 1.97013076,15.1829786 C2.03947095,15.2547283 2.13487543,15.2953938 2.23465502,15.2957303 L7.09915216,15.2957303 C7.19881298,15.2942406 7.29375312,15.2530171 7.36288462,15.1812165 C7.43201611,15.1094158 7.46961506,15.0129828 7.46733004,14.9133371 L7.46733004,11.8527695 C7.47080135,11.7525482 7.43339942,11.6552184 7.36370627,11.5831128 C7.29401313,11.5110072 7.19801196,11.4703161 7.09773062,11.4703761 L2.23607656,11.4703761 C2.13641573,11.4718659 2.04147558,11.5130894 1.97234409,11.58489 C1.90321259,11.6566907 1.86561364,11.7531237 1.86789867,11.8527695 L1.86647713,11.8527695 Z M9.33380717,11.8527695 L9.33380717,14.9147586 C9.33380717,15.1308321 9.49444076,15.2957303 9.69345585,15.2957303 L16.440067,15.2957303 C16.614916,15.2957303 16.7997157,15.1237244 16.7997157,14.9133371 L16.7997157,11.8527695 C16.7997157,11.6352744 16.6390821,11.4703762 16.440067,11.4703762 L9.69345585,11.4703762 C9.49247103,11.4851255 9.33621945,11.6512586 9.33380717,11.8527695 Z M1.86647713,17.5872468 L1.86647713,20.6506575 C1.86379697,20.7501477 1.90135471,20.8465143 1.97065209,20.9179521 C2.03994947,20.98939 2.13512928,21.0298609 2.23465502,21.0302076 L7.09915216,21.0302076 C7.19881298,21.0287179 7.29375312,20.9874945 7.36288462,20.9156938 C7.43201611,20.8438931 7.46961506,20.7474602 7.46733004,20.6478144 L7.46733004,17.5900899 C7.47119689,17.4896269 7.4339709,17.3919239 7.36423403,17.3195048 C7.29449716,17.2470858 7.1982679,17.2062007 7.09773062,17.206275 L2.23607656,17.206275 C2.1361631,17.2077591 2.04100164,17.2491782 1.97182856,17.3212892 C1.90265548,17.3934001 1.86522806,17.4902011 1.86789867,17.5900899 L1.86789867,17.5872468 L1.86647713,17.5872468 Z M22.8312941,25.1469767 C19.9754277,25.1469767 17.6611667,22.7758542 17.6611667,19.8531756 C17.6611667,16.9290755 19.9754277,14.557953 22.8312941,14.557953 C25.6857389,14.557953 28,16.9290755 28,19.8531756 C28,22.7758542 25.6857389,25.1469767 22.8312941,25.1469767 Z M20.670559,20.9079555 L20.2455196,22.5000762 L21.7949942,22.0579784 L24.2428796,19.5560745 L23.1056506,18.4188455 L20.670559,20.906534 L20.670559,20.9079555 Z M24.0580799,17.4436716 L23.4468193,18.0677261 L24.5897345,19.2006905 L25.1825151,18.595116 C25.4934144,18.2742602 25.4934144,17.7645274 25.1825151,17.4436716 C25.0351973,17.2912289 24.8322912,17.2051433 24.6202975,17.2051433 C24.4083039,17.2051433 24.2053977,17.2912289 24.0580799,17.4436716 L24.0580799,17.4436716 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
SalaryAccountingWizard.displayName = 'SalaryAccountingWizard';
export default SalaryAccountingWizard;
