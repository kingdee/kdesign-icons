import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const Platform = ({
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
          id="1325-平台"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(4.000000, 5.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M12.1658349,1.24690735 L22.0134574,5.9225371 L12.1658349,10.8316211 L1.73784961,5.9225371 L12.1658349,1.24690735 Z M12.1658349,0 C12.0829259,0 11.834199,0.0774544447 11.75129,0.0774544447 L0.49639682,5.06508375 C0.165851817,5.1425382 1.68054622e-05,5.53090129 1.68054622e-05,5.84399176 C-0.00207987588,6.17864642 0.192166751,6.4834642 0.49639682,6.62289974 L11.669472,11.9225286 C11.75129,11.9999831 12.0000168,11.9999831 12.0829259,11.9999831 C12.2487439,11.9999831 12.4134709,11.9225286 12.5792889,11.9225286 L23.3378191,6.62289974 C23.6420492,6.4834642 23.8362958,6.17864642 23.8341991,5.84399176 C23.8362958,5.5093371 23.6420492,5.2045193 23.3378191,5.06508375 L12.6621978,0 C12.4963799,0.0774544447 12.3305619,0 12.1658349,0 L12.1658349,0 Z M12.3305619,17.1425213 C12.0829259,17.1425213 11.834199,17.0650668 11.586563,16.9865215 L0.41348784,11.2985295 C0.0829024068,11.1425297 3.38844487e-05,10.7530757 0.165851817,10.4410762 C0.33057886,10.1301675 0.662214753,10.0516222 1.07566874,10.1301675 L12.3305619,15.8181595 L12.4963799,15.8181595 L23.0072741,10.3636217 C23.1720012,10.2861673 23.4207281,10.2861673 23.5036371,10.2861673 C23.669455,10.3636218 23.834182,10.4410762 23.9181819,10.597076 C24,10.7530757 24,10.9090755 24,11.0650753 C23.917091,11.2210751 23.834182,11.3770749 23.669455,11.4545293 L13.0767427,16.9865215 C12.8280158,17.0650668 12.5792888,17.1425213 12.3305619,17.1425213 L12.3305619,17.1425213 Z M12.3305619,21.818151 C12.0829259,21.818151 11.834199,21.7406966 11.586563,21.6621513 L0.41348784,15.9741593 C0.248760798,15.8956139 0.0829428647,15.740705 0.0829428647,15.5847053 C1.20731172e-05,15.4397272 1.20731172e-05,15.2616841 0.0829428647,15.116706 C0.248760825,14.8047064 0.661123863,14.727252 0.992759756,14.8832517 L12.2487439,20.649789 L12.4134709,20.649789 L22.9243651,15.1952513 C23.0901831,15.116706 23.33891,15.116706 23.4207281,15.116706 C23.586546,15.1952513 23.7512731,15.2727057 23.835273,15.4287055 C23.917091,15.50616 23.917091,15.7407051 23.917091,15.8956139 C23.834182,16.0516137 23.7512731,16.2076135 23.586546,16.2861588 L12.9927428,21.818151 L12.329471,21.818151 L12.3305619,21.818151 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
Platform.displayName = 'Platform';
export default Platform;
