import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const References = ({
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
          id="1088.引用"
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
              d="M9.32244472,25.6495478 L2.33177708,25.6495478 C1.04397218,25.6495478 0,24.6055757 0,23.3177708 L0,14.0839335 C0,9.20818767 1.26615497,6.50332626 2.3970668,5.04130201 C4.85709163,1.86542166 9.0706128,0 11.6075863,0 L11.6075863,3.54196937 C9.9287068,4.05496035 7.6715466,5.02731136 6.54296647,6.50332626 C5.41438637,7.97934116 4.68220837,9.66055244 4.68220837,12.1368997 L9.3457625,12.1368997 C9.96540216,12.1368969 10.5595614,12.3835256 10.997056,12.8223327 C11.4345507,13.2611399 11.6793985,13.8560352 11.6775501,14.4756721 L11.6542218,23.3224343 C11.6516498,24.6084176 10.6084306,25.6495478 9.32244472,25.6495478 L9.32244472,25.6495478 Z M25.6448843,25.6495478 L18.6542166,25.6495478 C17.3664117,25.6495478 16.3224395,24.6055757 16.3224395,23.3177708 L16.3224395,14.0839335 C16.3224395,9.20818767 17.5885945,6.50332626 18.7195064,5.04130201 C21.1795312,1.86542166 25.4187019,0 27.9533436,0 L27.9533436,3.54196937 C26.2791277,4.05496035 23.9939861,5.02731136 22.865406,6.50332626 C21.7368259,7.97934116 21.0046479,9.66055244 21.0046479,12.1368997 L25.6682021,12.1368997 C26.2878417,12.1368969 26.8820009,12.3835256 27.3194956,12.8223327 C27.7569903,13.2611399 28.001838,13.8560352 27.9999896,14.4756721 L27.9766614,23.3224343 C27.9740894,24.6084176 26.9308702,25.6495478 25.6448843,25.6495478 L25.6448843,25.6495478 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
References.displayName = 'References';
export default References;