import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const Enlarge = ({
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
          id="1221-放大"
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
              d="M10.3714912,10.3714912 L10.3714912,6.74146928 C10.3714912,6.45506847 10.603665,6.22289473 10.8900658,6.22289473 C11.1764666,6.22289473 11.4086403,6.45506847 11.4086403,6.74146928 L11.4086403,10.3714912 L15.0386623,10.3714912 C15.3250631,10.3714912 15.5572368,10.603665 15.5572368,10.8900658 C15.5572368,11.1764666 15.3250631,11.4086403 15.0386623,11.4086403 L11.4086403,11.4086403 L11.4086403,15.0386623 C11.4086403,15.3250631 11.1764666,15.5572368 10.8900658,15.5572368 C10.603665,15.5572368 10.3714912,15.3250631 10.3714912,15.0386623 L10.3714912,11.4086403 L6.74146928,11.4086403 C6.45506847,11.4086403 6.22289473,11.1764666 6.22289473,10.8900658 C6.22289473,10.603665 6.45506847,10.3714912 6.74146928,10.3714912 L10.3714912,10.3714912 Z M18.9487145,18.21545 L23.8544298,23.1211654 C24.0509552,23.3246431 24.0481447,23.6480811 23.8481129,23.8481129 C23.6480811,24.0481447 23.3246431,24.0509552 23.1211654,23.8544298 L18.21545,18.9487145 C16.2128488,20.7740783 13.5997428,21.7840995 10.8900658,21.7801316 C4.87563802,21.7801316 0,16.9044935 0,10.8900658 C0,4.87563802 4.87563802,0 10.8900658,0 C16.9044935,0 21.7801316,4.87563802 21.7801316,10.8900658 C21.7801316,13.7111114 20.7077194,16.2811669 18.9487145,18.21545 Z M10.8900658,20.7429824 C16.3316814,20.7429824 20.7429824,16.3316814 20.7429824,10.8900658 C20.7429824,5.44845017 16.3316814,1.03714913 10.8900658,1.03714913 C5.44845017,1.03714913 1.03714913,5.44845017 1.03714913,10.8900658 C1.03714913,16.3316814 5.44845017,20.7429824 10.8900658,20.7429824 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
Enlarge.displayName = 'Enlarge';
export default Enlarge;
