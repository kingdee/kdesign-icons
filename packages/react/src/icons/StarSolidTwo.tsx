import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const StarSolidTwo = ({
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
          id="61.星形"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="星形"
            transform="translate(4.000000, 4.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M11.9998794,19.9463509 L6.59614637,22.7863032 C5.68801358,23.2635758 4.56479002,22.9145429 4.08735637,22.0067165 C3.89723978,21.6452152 3.83163525,21.2311443 3.90069916,20.8286068 L4.93272033,14.8134914 L0.561008478,10.5535631 C-0.173686406,9.83765419 -0.188719567,8.66190843 0.527430915,7.92746142 C0.812605799,7.6350008 1.1862706,7.44467327 1.5905777,7.38594383 L7.63213492,6.50835032 L10.3340013,1.03561761 C10.7880678,0.115888963 11.9020003,-0.261729043 12.8220393,0.192184176 C13.1884037,0.37293482 13.4849457,0.669376836 13.6657574,1.03561761 L16.3676239,6.50835032 L22.4091811,7.38594383 C23.4245044,7.53342917 24.1279857,8.47579413 23.9804506,9.49077497 C23.9217013,9.89494568 23.7313096,10.2684845 23.4387503,10.5535631 L19.0670385,14.8134914 L20.0990596,20.8286068 C20.2724975,21.8394863 19.5933404,22.799518 18.5821197,22.9728974 C18.1794463,23.041938 17.7652357,22.9763556 17.4036124,22.7863032 L11.9998794,19.9463509 Z"
              id="路径"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
StarSolidTwo.displayName = 'StarSolidTwo';
export default StarSolidTwo;
