import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const ListSubheading = ({
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
          id="595.清单子目"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(4.000000, 1.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M23.1101217,0 C23.5637829,0 23.9381552,0.339475367 23.9930666,0.778253835 L24,0.889878261 L24,29.2173913 C22.6713557,27.7830055 21.679535,27.0658127 21.024538,27.0658127 C20.4059297,27.0658127 19.4734467,27.705531 18.2270892,28.9849677 L18.0038855,29.2173913 L15.1104546,27.0658127 L12.0533175,29.2173913 L8.98092939,27.0658127 L6.00641761,29.2173913 C4.24371399,27.7830055 3.23393467,27.0658127 2.97707967,27.0658127 C2.73139227,27.0658127 1.81276656,27.7219967 0.221202566,29.0343648 L0,29.2173913 L0,1.04347826 C0,0.50834521 0.386040175,0.0672968682 0.883378877,0.00702025461 L1,0 L23.1101217,0 Z M5.2173913,19.826087 L3.13043478,19.826087 L3.13043478,21.9130435 L5.2173913,21.9130435 L5.2173913,19.826087 Z M19.826087,19.826087 L7.30434783,19.826087 L7.30434783,21.9130435 L19.826087,21.9130435 L19.826087,19.826087 Z M5.2173913,15.6521739 L3.13043478,15.6521739 L3.13043478,17.7391304 L5.2173913,17.7391304 L5.2173913,15.6521739 Z M19.826087,15.6521739 L7.30434783,15.6521739 L7.30434783,17.7391304 L19.826087,17.7391304 L19.826087,15.6521739 Z M5.2173913,10.4347826 L3.13043478,10.4347826 L3.13043478,12.5217391 L5.2173913,12.5217391 L5.2173913,10.4347826 Z M19.826087,10.4347826 L7.30434783,10.4347826 L7.30434783,12.5217391 L19.826087,12.5217391 L19.826087,10.4347826 Z M5.2173913,6.26086957 L3.13043478,6.26086957 L3.13043478,8.34782609 L5.2173913,8.34782609 L5.2173913,6.26086957 Z M19.826087,6.26086957 L7.30434783,6.26086957 L7.30434783,8.34782609 L19.826087,8.34782609 L19.826087,6.26086957 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
ListSubheading.displayName = 'ListSubheading';
export default ListSubheading;
