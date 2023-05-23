import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const StaffRoster = ({
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
          id="649.员工花名册"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(4.000000, 2.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M21.6615168,0 C22.911982,0.0460448566 23.9389355,1.04345099 24,2.31515313 L24,2.31515313 L24,24.9160834 C23.9357215,26.2547172 22.8012061,27.289422 21.4623256,27.230502 L21.4623256,27.230502 L2.59720932,27.230502 L2.59720932,25.4072462 C2.56070829,25.2461239 2.54322459,25.0812776 2.54485788,24.9160834 L2.54485788,24.9160834 L2.54485788,23.9337579 L3.28930235,23.9337579 C4.11130757,23.9337579 4.77767444,23.2673909 4.77767444,22.4453858 C4.77767444,21.6233805 4.11130757,20.9570137 3.28930235,20.9570137 L3.28930235,20.9570137 L2.54485788,20.9570137 L2.54485788,18.2407346 L3.28930235,18.2407346 C4.11130757,18.2407346 4.77767444,17.5743677 4.77767444,16.7523624 C4.77767444,15.9303573 4.11130757,15.2639903 3.28930235,15.2639903 L3.28930235,15.2639903 L2.54485788,15.2639903 L2.54485788,12.5551532 L3.28930235,12.5551532 C4.11130757,12.5551532 4.77767444,11.8887863 4.77767444,11.066781 C4.77767444,10.2447758 4.11130757,9.57840896 3.28930235,9.57840896 L3.28930235,9.57840896 L2.54485788,9.57840896 L2.54485788,6.86212988 L3.28930235,6.86212988 C4.11130757,6.86212988 4.77767444,6.19576298 4.77767444,5.37375779 C4.77767444,4.55175258 4.11130757,3.88538571 3.28930235,3.88538571 L3.28930235,3.88538571 L2.54485788,3.88538571 L2.54485788,0.000734518213 L21.6615168,0 Z M3.16279072,21.4407345 C3.75052445,21.4407345 4.22697678,21.917187 4.22697678,22.5049207 C4.22697678,23.0926544 3.75052445,23.5691066 3.16279072,23.5691066 L3.16279072,23.5691066 L1.06418606,23.5691066 C0.476452329,23.5691066 0,23.0926544 0,22.5049207 C0,21.917187 0.476452329,21.4407345 1.06418606,21.4407345 L1.06418606,21.4407345 L3.16279072,21.4407345 Z M13.335814,12.2128277 C9.89572225,12.2128277 7.10697678,15.0015731 7.10697678,18.4416648 L7.10697678,18.4416648 L19.5646512,18.4416648 C19.5646512,15.0015731 16.7759058,12.2128277 13.335814,12.2128277 Z M3.16279072,15.7253857 C3.7181083,15.7717832 4.14519382,16.2360403 4.14519382,16.7932927 C4.14519382,17.3505452 3.7181083,17.8148023 3.16279072,17.8611998 L3.16279072,17.8611998 L1.06418606,17.8611998 C0.508868455,17.8148023 0.0817829585,17.3505452 0.0817829585,16.7932927 C0.0817829585,16.2360403 0.508868455,15.7717832 1.06418606,15.7253857 L1.06418606,15.7253857 L3.16279072,15.7253857 Z M3.16279072,10.0472462 C3.75052445,10.0472462 4.22697678,10.5236985 4.22697678,11.1114322 C4.22697678,11.699166 3.75052445,12.1756183 3.16279072,12.1756183 L3.16279072,12.1756183 L1.06418606,12.1756183 C0.476452329,12.1756183 0,11.699166 0,11.1114322 C0,10.5236985 0.476452329,10.0472462 1.06418606,10.0472462 L1.06418606,10.0472462 L3.16279072,10.0472462 Z M13.335814,6.35608339 C11.7058153,6.3226264 10.3521777,7.60659148 10.2995349,9.2360834 C10.3521777,10.8655753 11.7058153,12.1495404 13.335814,12.1160834 C14.9658127,12.1495404 16.3194503,10.8655753 16.3720931,9.2360834 C16.3194503,7.6065915 14.9658127,6.32262643 13.335814,6.35608339 Z M3.16279072,4.34678105 C3.75052445,4.34678105 4.22697678,4.82323338 4.22697678,5.41096709 C4.22697678,5.99870082 3.75052445,6.47515315 3.16279072,6.47515315 L3.16279072,6.47515315 L1.06418606,6.47515315 C0.476452329,6.47515315 0,5.99870082 0,5.41096709 C0,4.82323338 0.476452329,4.34678105 1.06418606,4.34678105 L1.06418606,4.34678105 L3.16279072,4.34678105 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
StaffRoster.displayName = 'StaffRoster';
export default StaffRoster;
