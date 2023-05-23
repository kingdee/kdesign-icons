import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const Adjustment = ({
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
          id="1137-调整"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(4.000000, 4.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M12,0 C18.627417,0 24,5.372583 24,12 C24,18.627417 18.627417,24 12,24 C5.372583,24 0,18.627417 0,12 C0,5.372583 5.372583,0 12,0 Z M10.4998323,6 L6.29998882,6 C6.13430957,6 6,6.13438176 6,6.30015007 L6,10.5022511 C6.00168595,10.6223337 6.07474951,10.7298515 6.18573854,10.7755774 C6.29672758,10.8213033 6.42427409,10.7964341 6.50998099,10.7123562 L8.18991838,9.03751877 L14.9636659,15.8149074 L13.2897283,17.4897449 C13.2056955,17.5754978 13.1808397,17.7031129 13.226541,17.8141616 C13.2722424,17.9252103 13.3797024,17.9983131 13.4997204,18 L17.6995639,18 C17.8652431,18 17.9995527,17.8656182 17.9995527,17.6998499 L17.9995527,13.4977489 C18.0065058,13.3700703 17.9318498,13.2520022 17.8135596,13.2036018 C17.7020924,13.1587049 17.5746037,13.1846888 17.4895717,13.2696348 L15.8156341,14.9444722 L9.03588684,8.19109555 L10.7098244,6.51025512 C10.7938572,6.42450216 10.818713,6.29688708 10.7730117,6.18583838 C10.7273103,6.07478969 10.6198503,6.00168686 10.4998323,6 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
Adjustment.displayName = 'Adjustment';
export default Adjustment;
