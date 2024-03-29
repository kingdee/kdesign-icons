import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const EnvironmentalMaintenance = ({
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
          id="846.环境维护"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(2.000000, 4.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M24.3413111,14.8197642 L19.942204,19.2188713 L21.0559808,20.3326481 L26.5548646,14.8337642 L25.4410879,13.7199875 L21.0544252,9.33332481 L19.9546484,10.4331016 L24.3413111,14.8197642 Z M2.66933089,13.7199875 L1.55555413,14.8337642 L7.05599355,20.3326481 L8.16821476,19.2188713 L3.76910767,14.8197642 L8.15577033,10.4331016 L7.05599355,9.33332481 L2.66933089,13.7199875 Z M0,6.20199433 L27.9999873,6.20199433 L27.9999873,23.3286454 C28.0034215,24.1856892 27.3123446,24.8837256 26.4553092,24.8888661 L1.54466526,24.8888661 C0.69222159,24.8888661 0,24.1795335 0,23.3270898 L0,6.20199433 Z M0,1.55555413 C0,0.695332698 0.69222159,0 1.54466526,0 L26.4553092,0 C27.3077528,0 27.9999744,0.689110481 27.9999744,1.55399858 L27.9999744,4.6666624 L0,4.6666624 L0,1.55399858 L0,1.55555413 Z M17.499984,7.77777067 L9.33332481,21.9224244 L10.6804347,22.7002015 L18.8470939,8.55554774 L17.499984,7.77777067 L17.499984,7.77777067 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
EnvironmentalMaintenance.displayName = 'EnvironmentalMaintenance';
export default EnvironmentalMaintenance;
