import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const Star = ({
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
          id="1165-星星"
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
              d="M11.9998794,19.9530819 L6.59614637,22.7939925 C5.68801358,23.2714262 4.56479002,22.9222755 4.08735637,22.0141428 C3.89723978,21.6525195 3.83163525,21.2383089 3.90069916,20.8356355 L4.93272033,14.8184903 L0.561008478,10.5571245 C-0.173686406,9.84097396 -0.188719567,8.66483144 0.527430915,7.93013659 C0.812605799,7.63757727 1.1862706,7.44718552 1.5905777,7.38843626 L7.63213492,6.5105466 L10.3340013,1.03596708 C10.7880678,0.11592807 11.9020003,-0.261817365 12.8220393,0.19224903 C13.1884037,0.373060669 13.4849457,0.669602721 13.6657574,1.03596708 L16.3676239,6.5105466 L22.4091811,7.38843626 C23.4245044,7.53597137 24.1279857,8.47865434 23.9804506,9.49397768 C23.9217013,9.89828478 23.7313096,10.2719496 23.4387503,10.5571245 L19.0670385,14.8184903 L20.0990596,20.8356355 C20.2724975,21.8468562 19.5933404,22.8072118 18.5821197,22.9806497 C18.1794463,23.0497137 17.7652357,22.9841091 17.4036124,22.7939925 L11.9998794,19.9530819 Z M18.20134,21.2766243 C18.2292596,21.2913026 18.2612392,21.2963676 18.2923281,21.2910355 C18.3704007,21.2776449 18.4228359,21.2034995 18.4094453,21.125427 L17.2250717,14.2199991 L22.2421588,9.32954787 C22.2647463,9.3075306 22.2794456,9.27868131 22.2839815,9.2474663 C22.295372,9.16907701 22.2410589,9.09629606 22.1626696,9.08490539 L15.2292259,8.07741704 L12.1284956,1.79465116 C12.1145357,1.76636555 12.0916408,1.74347065 12.0633553,1.72951088 C11.9923225,1.69445412 11.9063199,1.72361843 11.8712632,1.79465116 L8.77053293,8.07741704 L1.83708911,9.08490539 C1.80587408,9.08944123 1.77702482,9.10414064 1.75500755,9.12672806 C1.69971626,9.18345104 1.70087693,9.27425659 1.75759993,9.32954787 L6.774687,14.2199991 L5.59031342,21.125427 C5.58498125,21.1565159 5.59004632,21.1884956 5.6047245,21.2164151 C5.64158537,21.2865286 5.72830522,21.3134852 5.79841871,21.2766243 L11.9998794,18.0163236 L18.20134,21.2766243 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
Star.displayName = 'Star';
export default Star;