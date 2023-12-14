import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const CertificateHandlingSettings = ({
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
          id="964.证明办理设置"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(2.000000, 1.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M15.4615385,27.6923077 L13.5384615,24.4123077 L14.7846154,23.7153846 C15.0217825,23.5899907 15.171623,23.3451725 15.1753846,23.0769231 C15.171623,22.8086737 15.0217825,22.5638555 14.7846154,22.4384615 L13.5384615,21.7415385 L16.4646154,16.7538462 L17.66,17.4215385 C17.7851191,17.4910848 17.9260856,17.5271214 18.0692308,17.5261538 C18.5169231,17.5261538 18.8676923,17.1861538 18.8676923,16.7830769 L18.8676923,15.3846154 L24.6553846,15.3846154 L24.6553846,16.7846154 C24.6553846,17.1846154 25.0046154,17.5261538 25.4538462,17.5261538 C25.5964707,17.5268565 25.7368743,17.4908284 25.8615385,17.4215385 L26.1538462,17.2584615 L26.1538462,4.61692308 C26.1538462,3.76615385 25.4630769,3.07692308 24.6046154,3.07692308 L4.62615385,3.07692308 C3.77076923,3.07692308 3.07692308,3.76153846 3.07692308,4.61538462 L3.07692308,26.1538462 C3.07692308,27.0030769 3.76769231,27.6923077 4.62615385,27.6923077 L15.4630769,27.6923077 L15.4615385,27.6923077 Z M1.53846154,24.6153846 L1.53846154,3.07692308 C1.53846154,2.22725423 2.22725423,1.53846154 3.07692308,1.53846154 L23.0769231,1.53846154 L23.0769231,0 L3.07692308,0 C1.37758539,0 0,1.37758539 0,3.07692308 L0,24.6153846 L1.53846154,24.6153846 Z M23.8969231,23.0769231 C23.8969231,21.9461538 22.9769231,21.0261538 21.8461538,21.0261538 C20.7153846,21.0261538 19.7953846,21.9461538 19.7953846,23.0769231 C19.7953846,24.2076923 20.7153846,25.1276923 21.8461538,25.1276923 C22.9769231,25.1276923 23.8969231,24.2076923 23.8969231,23.0769231 Z M23.3076923,16.9230769 C23.3076923,18.08 24.2707692,19.0169231 25.4569231,19.0169231 C25.8446154,19.0169231 26.2092308,18.9169231 26.5230769,18.74 L28,21.2584615 C27.3538462,21.62 26.9184615,22.2984615 26.9184615,23.0769231 C26.9184615,23.8553846 27.3538462,24.5338462 28,24.8953846 L26.5230769,27.4123077 C26.1972833,27.2301911 25.8301625,27.1348351 25.4569231,27.1353846 C24.2707692,27.1353846 23.3092308,28.0738462 23.3092308,29.2307692 L20.3830769,29.2307692 C20.3830769,28.0738462 19.4215385,27.1369231 18.2353846,27.1369231 C17.8476923,27.1369231 17.4830769,27.2369231 17.1692308,27.4138462 L15.6923077,24.8953846 C16.3384615,24.5338462 16.7738462,23.8553846 16.7738462,23.0769231 C16.7738462,22.2984615 16.3384615,21.62 15.6923077,21.2584615 L17.1692308,18.7415385 C17.4830769,18.9169231 17.8476923,19.0184615 18.2353846,19.0184615 C19.4215385,19.0184615 20.3846154,18.08 20.3846154,16.9230769 L23.3076923,16.9230769 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
CertificateHandlingSettings.displayName = 'CertificateHandlingSettings';
export default CertificateHandlingSettings;
