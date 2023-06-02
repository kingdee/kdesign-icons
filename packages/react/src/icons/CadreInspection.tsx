import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const CadreInspection = ({
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
          id="768.干部考察"
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
              d="M7,1.7647065 L7,5.294118 L21,5.294118 L21,1.7647065 L26.5143683,1.7647065 C27.3348599,1.7647065 28,2.434812 28,3.2628225 L28,28.501884 C28,29.3292705 27.3354787,30 26.5143683,30 L1.48563173,30 C0.665140102,30 0,29.3298945 0,28.501884 L0,3.2628225 C0,2.435436 0.664521302,1.7647065 1.48563173,1.7647065 L7,1.7647065 Z M8.75000028,0 L19.2500003,0 L19.2500003,3.5294115 L8.75000028,3.5294115 L8.75000028,0 Z M21.874975,17.197278 L21.874975,17.197278 L21.874975,17.197293 C21.8760814,15.5954385 18.6639872,12.352941 13.9999874,12.352941 C9.50463731,12.352941 6.12500005,15.5954085 6.12500005,17.197278 C6.12500005,18.7993785 9.4901327,22.0468245 13.999971,22.0468245 C18.6276119,22.0468245 21.874975,18.745032 21.874975,17.197278 Z M14.0069236,13.2375135 C16.1034284,13.2375135 17.802506,15.0116235 17.802506,17.1998985 C17.802506,19.38819 16.1034284,21.1622835 14.0069087,21.1622835 C11.9110197,21.1622835 10.2120031,19.388205 10.2120031,17.1998985 C10.2120031,15.0116235 11.9110345,13.2375135 14.0069236,13.2375135 Z M13.9999874,14.6702145 C12.665267,14.6702145 11.5832535,15.79977 11.5832535,17.193291 C11.5832535,18.5866575 12.665267,19.7164305 13.9999874,19.7164305 C15.3347077,19.7164305 16.416275,18.5866575 16.416275,17.193291 C16.416275,15.7997535 15.3346929,14.6702145 13.9999874,14.6702145 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
CadreInspection.displayName = 'CadreInspection';
export default CadreInspection;