import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const CadreSuccession = ({
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
          id="766.干部继任"
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
              d="M3.09370932,3.60021183 C3.36477141,5.29530803 4.95933181,6.44955086 6.654428,6.17721529 C8.34952418,5.9061532 9.50376704,4.3115928 9.23143144,2.6164966 C8.96036935,0.921401751 7.36580895,-0.231568923 5.67071278,0.0394931674 C5.66689493,0.0394931674 5.66307711,0.0407653261 5.65925926,0.0407653261 C3.96925442,0.318190926 2.82264591,1.91020698 3.09370932,3.60021183 Z M6.15429864,6.79187828 C2.68520661,6.86568926 -0.0686879676,9.73538963 0.00130518458,13.2057538 L12.3085642,13.2057538 C12.3798296,9.73538963 9.62466283,6.8644171 6.15429864,6.79187828 Z M18.7439824,15.0632823 C18.7439824,16.780012 20.1362004,18.1709577 21.85293,18.1709577 C23.5696597,18.1709577 24.9618777,16.7787385 24.9618777,15.0620088 C24.9618777,13.3452791 23.5696597,11.9543333 21.85293,11.9543333 C20.1362004,11.9543333 18.7439824,13.3465526 18.7439824,15.0632823 Z M21.7434878,18.7538059 C18.2476709,18.7970742 15.4466902,21.6642289 15.4874128,25.1600458 L27.9995613,25.1600458 C28.040284,21.6642289 25.2405768,18.7958007 21.7434878,18.7538059 L21.7434878,18.7538059 Z M6.48129324,15.2796533 L4.09263307,15.8994063 C5.25069374,19.838085 8.73251277,22.6454292 12.8264478,22.9406705 L13.5658258,20.5456481 C10.2990762,20.549466 7.41792232,18.4076901 6.47874758,15.2783798 L6.48129324,15.2783798 L6.48129324,15.2796533 Z M19.9580665,9.52243555 L22.283097,8.62780129 C20.5256447,5.48831101 17.2016276,3.54887755 13.6040041,3.56414889 C12.7068242,3.56542105 11.8134634,3.68504601 10.9480996,3.92174763 L11.5729427,6.26841164 C12.2318588,6.08306168 12.9131515,5.98928225 13.5976406,5.98971388 C16.190367,5.97861315 18.5993952,7.31717567 19.9580665,9.52243555 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
CadreSuccession.displayName = 'CadreSuccession';
export default CadreSuccession;