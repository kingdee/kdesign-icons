import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const FrontTurnOne = ({
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
          id="1003.前翻"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(9.000000, 2.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M3.65217391,17.0434782 L4.86956523,17.0434782 L4.86956523,18.2608696 L3.65217391,18.2608696 L3.65217391,17.0434782 Z M1.21739131,14.6086956 L2.43478263,14.6086956 L2.43478263,15.826087 L1.21739131,15.826087 L1.21739131,14.6086956 L1.21739131,14.6086956 Z M6.08695654,19.4782609 L7.30434782,19.4782609 L7.30434782,20.6956522 L6.08695654,20.6956522 L6.08695654,19.4782609 Z M0,13.3913043 L1.21739131,13.3913043 L1.21739131,14.6086956 L0,14.6086956 L0,13.3913043 L0,13.3913043 Z M4.86956523,18.2608696 L6.08695654,18.2608696 L6.08695654,19.4782609 L4.86956523,19.4782609 L4.86956523,18.2608696 L4.86956523,18.2608696 Z M2.43478263,15.826087 L3.65217391,15.826087 L3.65217391,17.0434782 L2.43478263,17.0434782 L2.43478263,15.826087 L2.43478263,15.826087 Z M7.30434782,20.6956522 L8.52173914,20.6956522 L8.52173914,21.9130435 L7.30434782,21.9130435 L7.30434782,20.6956522 Z M8.52173914,21.9130435 L9.73913045,21.9130435 L9.73913045,23.1304348 L8.52173914,23.1304348 L8.52173914,21.9130435 Z M9.73913045,23.1304348 L10.9565217,23.1304348 L10.9565217,24.3478261 L9.73913045,24.3478261 L9.73913045,23.1304348 Z M10.9565217,24.3478261 L12.173913,24.3478261 L12.173913,25.5652174 L10.9565217,25.5652174 L10.9565217,24.3478261 Z M12.173913,25.5652174 L13.3913044,25.5652174 L13.3913044,26.7826087 L12.173913,26.7826087 L12.173913,25.5652174 Z M13.3913044,0 L14.6086956,0 L14.6086956,1.21739131 L13.3913044,1.21739131 L13.3913044,0 L13.3913044,0 Z M13.3913044,26.7826087 L14.6086956,26.7826087 L14.6086956,28 L13.3913044,28 L13.3913044,26.7826087 Z M8.52173914,6.08695651 L8.52173914,7.30434782 L7.30434782,7.30434782 L7.30434782,6.08695651 L8.52173914,6.08695651 Z M9.73913045,4.86956523 L9.73913045,6.08695651 L8.52173914,6.08695651 L8.52173914,4.86956523 L9.73913045,4.86956523 L9.73913045,4.86956523 Z M10.9565217,3.65217391 L10.9565217,4.86956523 L9.73913045,4.86956523 L9.73913045,3.65217391 L10.9565217,3.65217391 L10.9565217,3.65217391 Z M12.173913,2.4347826 L12.173913,3.65217391 L10.9565217,3.65217391 L10.9565217,2.4347826 L12.173913,2.4347826 L12.173913,2.4347826 Z M13.3913044,1.21739131 L13.3913044,2.4347826 L12.173913,2.4347826 L12.173913,1.21739131 L13.3913044,1.21739131 L13.3913044,1.21739131 Z M3.65217391,10.9565217 L3.65217391,12.173913 L2.43478263,12.173913 L2.43478263,10.9565217 L3.65217391,10.9565217 L3.65217391,10.9565217 Z M6.08695654,8.52173914 L6.08695654,9.73913042 L4.86956523,9.73913042 L4.86956523,8.52173914 L6.08695654,8.52173914 L6.08695654,8.52173914 Z M7.30434782,7.30434782 L7.30434782,8.52173914 L6.08695654,8.52173914 L6.08695654,7.30434782 L7.30434782,7.30434782 Z M2.43478263,12.173913 L2.43478263,13.3913043 L1.21739131,13.3913043 L1.21739131,12.173913 L2.43478263,12.173913 L2.43478263,12.173913 Z M4.86956523,9.73913042 L4.86956523,10.9565217 L3.65217391,10.9565217 L3.65217391,9.73913042 L4.86956523,9.73913042 L4.86956523,9.73913042 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
FrontTurnOne.displayName = 'FrontTurnOne';
export default FrontTurnOne;