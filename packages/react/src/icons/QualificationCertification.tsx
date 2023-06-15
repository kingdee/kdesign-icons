import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const QualificationCertification = ({
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
          id="770.任职资格认证"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(3.000000, 1.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M25.9891184,4.3610398 L24.7014505,4.33907005 C24.6724329,4.33907005 21.788784,4.28048404 18.810825,3.11607504 C15.7566963,1.92237303 13.7871097,0.552911493 13.7689737,0.53826499 L12.9927449,0 L12.2201447,0.541926616 C12.2020087,0.552911493 10.2324221,1.92603466 7.17829194,3.11973666 C4.20396161,4.28414566 1.31668547,4.34273167 1.2912951,4.34273167 L0,4.36470143 L0,16.9754666 C0,23.3064806 8.45507826,30 13,30 C17.5485489,30 26,23.3064806 26,16.9754666 L25.9891184,4.3610398 Z M7.47935217,22.6290738 L7.47935217,10.4101056 L6.32589348,10.4101056 L6.32589348,9.30062248 L10.9433599,9.30062248 L10.9433599,14.8517027 L16.7505584,9.30062248 L21.3281242,9.30062248 L7.47935217,22.6290738 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
QualificationCertification.displayName = 'QualificationCertification';
export default QualificationCertification;
