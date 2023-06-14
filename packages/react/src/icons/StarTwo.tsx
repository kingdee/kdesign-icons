import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const StarTwo = ({
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
          id="174.星形"
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
              d="M11.9998794,19.9463509 L6.59614637,22.7863032 C5.68801358,23.2635758 4.56479002,22.9145429 4.08735637,22.0067165 C3.89723978,21.6452152 3.83163525,21.2311443 3.90069916,20.8286068 L4.93272033,14.8134914 L0.561008478,10.5535631 C-0.173686406,9.83765419 -0.188719567,8.66190843 0.527430915,7.92746142 C0.812605799,7.6350008 1.1862706,7.44467327 1.5905777,7.38594383 L7.63213492,6.50835032 L10.3340013,1.03561761 C10.7880678,0.115888963 11.9020003,-0.261729043 12.8220393,0.192184176 C13.1884037,0.37293482 13.4849457,0.669376836 13.6657574,1.03561761 L16.3676239,6.50835032 L22.4091811,7.38594383 C23.4245044,7.53342917 24.1279857,8.47579413 23.9804506,9.49077497 C23.9217013,9.89494568 23.7313096,10.2684845 23.4387503,10.5535631 L19.0670385,14.8134914 L20.0990596,20.8286068 C20.2724975,21.8394863 19.5933404,22.799518 18.5821197,22.9728974 C18.1794463,23.041938 17.7652357,22.9763556 17.4036124,22.7863032 L11.9998794,19.9463509 Z M18.20134,21.2694469 C18.2292596,21.2841201 18.2612392,21.2891834 18.2923281,21.2838531 C18.3704007,21.2704671 18.4228359,21.1963467 18.4094453,21.1183005 L17.2250717,14.2152021 L22.2421588,9.32640062 C22.2647463,9.30439078 22.2794456,9.27555122 22.2839815,9.24434675 C22.295372,9.1659839 22.2410589,9.0932275 22.1626696,9.08184067 L15.2292259,8.07469219 L12.1284956,1.79404575 C12.1145357,1.76576969 12.0916408,1.74288251 12.0633553,1.72892744 C11.9923225,1.69388251 11.9063199,1.72303698 11.8712632,1.79404575 L8.77053293,8.07469219 L1.83708911,9.08184067 C1.80587408,9.08637498 1.77702482,9.10106943 1.75500755,9.12364924 C1.69971626,9.18035307 1.70087693,9.27112799 1.75759993,9.32640062 L6.774687,14.2152021 L5.59031342,21.1183005 C5.58498125,21.1493789 5.59004632,21.1813478 5.6047245,21.2092579 C5.64158537,21.2793478 5.72830522,21.3062953 5.79841871,21.2694469 L11.9998794,18.0102459 L18.20134,21.2694469 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
StarTwo.displayName = 'StarTwo';
export default StarTwo;