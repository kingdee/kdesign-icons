import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const ExitReport = ({
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
          id="1342-离职报告"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(4.000000, 7.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M10.4453333,11.796 C10.7853334,11.796 11.072,12.1026667 11.0453333,12.4626667 C11.0453333,12.824 10.7586667,13.1293333 10.4186667,13.1293333 L5.82666666,13.1293333 C5.48666665,13.1293333 5.20000001,12.824 5.20000001,12.4626667 C5.20000001,12.1026667 5.48666667,11.796 5.82666666,11.796 L10.4453333,11.796 Z M14.6586667,5.96799998 C15.1786667,5.96799998 15.6186667,6.27333333 15.6186667,6.63466666 C15.6186667,6.99466666 15.1786667,7.30133332 14.6586667,7.30133332 L6.16000001,7.30133332 C5.64,7.30133332 5.19866667,6.99466666 5.19866667,6.63466666 C5.19866667,6.27333333 5.63866666,5.96799998 6.16000001,5.96799998 L14.656,5.96799998 L14.6586667,5.96799998 Z M20.0306667,14.404 L21.9533333,12.4813333 C22.1005268,12.3339017 22.3151929,12.2761961 22.5164691,12.3299535 C22.7177454,12.3837109 22.875053,12.5407645 22.9291358,12.7419535 C22.9832186,12.9431426 22.9258601,13.1579017 22.7786667,13.3053333 L20.8533333,15.2266667 L22.7773333,17.1506667 C23.0048746,17.3785762 23.0045762,17.747792 22.7766667,17.9753333 C22.5487572,18.2028746 22.1795413,18.2025762 21.952,17.9746667 L20.0293333,16.052 L18.1053333,17.9746667 C17.9584403,18.1233488 17.7431641,18.181964 17.5411701,18.1282764 C17.3391761,18.0745889 17.1814111,17.9168239 17.1277236,17.7148299 C17.074036,17.5128359 17.1326512,17.2975597 17.2813333,17.1506667 L19.2053333,15.2266667 L17.2813333,13.304 C17.1326512,13.157107 17.074036,12.9418308 17.1277236,12.7398368 C17.1814111,12.5378428 17.3391761,12.3800778 17.5411701,12.3263902 C17.7431641,12.2727027 17.9584403,12.3313179 18.1053333,12.48 L20.0293333,14.4026667 L20.0306667,14.404 Z M13.72,17.3333333 C14.0881898,17.3333333 14.3866667,17.6318102 14.3866667,18 C14.3866667,18.3681898 14.0881898,18.6666667 13.72,18.6666667 L3.33333333,18.6666667 C2.44927836,18.6666667 1.60143199,18.3154772 0.976310728,17.6903559 C0.351189467,17.0652347 0,16.2173883 0,15.3333333 L0,3.33333333 C0,1.49238416 1.49238416,-4.26325641e-16 3.33333333,-4.26325641e-16 L20.6666667,-4.26325641e-16 C22.5076158,-4.26325641e-16 24,1.49238416 24,3.33333333 L24,9.43466667 C24,9.80285651 23.7015232,10.1013333 23.3333333,10.1013333 C22.9651435,10.1013333 22.6666667,9.80285651 22.6666667,9.43466667 L22.6666667,3.33333333 C22.6666667,2.22876383 21.7712362,1.33333334 20.6666667,1.33333334 L3.33333333,1.33333334 C2.22876383,1.33333334 1.33333334,2.22876383 1.33333334,3.33333333 L1.33333334,15.3333333 C1.33333334,16.4379028 2.22876383,17.3333333 3.33333333,17.3333333 L13.72,17.3333333 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
ExitReport.displayName = 'ExitReport';
export default ExitReport;