import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const ProjectRegistration = ({
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
          id="557.项目登记"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(4.000000, 6.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M13.2312034,17.9048372 L15.2120479,19.8552947 L13.2956642,20.5366294 C12.9283137,20.6672341 12.5246411,20.4753137 12.3940364,20.1079631 C12.3305696,19.9294506 12.3415215,19.7329191 12.4244294,19.5625634 L13.2312034,17.9048372 Z M20.5064313,10.7429023 L22.5404181,12.7603406 L15.8536625,19.339469 L13.8196759,17.3220308 L20.5064313,10.7429023 Z M7.87637288,0 C8.18970665,0 8.46554477,0.206536755 8.55375551,0.507197612 L9.45556764,3.58096745 L19.6599034,3.58096745 C20.0497804,3.58096745 20.3658381,3.89702514 20.3658381,4.28690208 L20.3658381,9.31051533 L12.3649731,17.1886437 L0.705934638,17.1886437 C0.316057719,17.1886437 0,16.872586 0,16.482709 L0,0.705934638 C0,0.316057719 0.316057719,0 0.705934638,0 L7.87637288,0 Z M22.995635,9.57351408 L23.7348907,10.3014293 C24.0867061,10.6478477 24.0910696,11.2052065 23.7317807,11.5589837 L23.1064814,12.1746906 L21.0931895,10.1922832 L21.7184887,9.57657636 C22.0720217,9.22846666 22.6470725,9.23029871 22.995635,9.57351408 Z M15.9988044,10.5022507 L4.57108697,10.5022507 L4.57108697,11.5524758 L15.9988044,11.5524758 L15.9988044,10.5022507 Z M15.9988044,7.50160769 L4.57108697,7.50160769 L4.57108697,8.55183278 L15.9988044,8.55183278 L15.9988044,7.50160769 Z M17.5056261,1.48613747 C17.895503,1.48613747 18.2115607,1.80219519 18.2115607,2.19207214 C18.2115607,2.20888821 18.2109598,2.22569891 18.2097593,2.24247208 L18.180578,2.65016131 L10.3951398,2.65016131 L10.0346947,1.48613747 L17.5056261,1.48613747 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
ProjectRegistration.displayName = 'ProjectRegistration';
export default ProjectRegistration;
