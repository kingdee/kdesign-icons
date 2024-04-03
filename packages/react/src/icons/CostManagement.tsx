import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const CostManagement = ({
  size = '1em',
  fill = 'currentColor',
  rotate = 0,
  spin = false,
  ...restProps
}: SvgIconProps) => {
  return (
    <IconWrapper rotate={rotate} spin={spin} {...restProps}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 32 32"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          id="1850.成本管理"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <path
            d="M14.2685263,5.12437419 C15.095068,6.36472108 15.5460398,7.13932206 15.5460399,7.13932206 C15.5460399,7.13932206 15.921445,7.44855935 16.5239619,7.44855935 L28.126015,7.44813826 C28.2431391,7.4408561 30,7.36534574 30,9.38867188 L30,26.8394488 C30,26.8394488 30.2995504,28.9358576 28.3469989,28.9358576 L3.89662579,28.9358576 C3.89662579,28.9358576 2.01651302,29.2450524 2.01651302,26.6866777 L2.01713905,6.18485809 C2.02621646,5.93086149 2.1669162,3.96238782 4.34776231,3.96238782 L12.5398762,3.96238782 C12.5398762,3.96238782 13.5178394,3.72794337 14.2685263,5.12437419 Z M17.1333743,13.3389424 L15.5613999,16.2782676 C15.511974,16.3697946 15.4835375,16.4714946 15.478216,16.575766 C15.4661894,16.4743924 15.4401318,16.3719999 15.3905222,16.2782676 L13.8426009,13.3389424 C13.6722243,13.0154638 13.293387,12.9039019 12.9967313,13.0913666 C12.7000757,13.2788314 12.5988519,13.6934953 12.7702307,14.0179927 L14.117709,16.575766 L12.6760225,16.575766 C12.2986058,16.5902649 12,16.9055091 12,17.2894566 C12,17.6734041 12.2986058,17.9886483 12.6760225,18.0031472 L14.7836809,18.0031472 L14.7836809,19.4310377 L12.6760225,19.4310377 C12.2986058,19.4455366 12,19.7607808 12,20.1447283 C12,20.5286758 12.2986058,20.8439199 12.6760225,20.8584189 L14.7836809,20.8584189 L14.7836809,22.3576275 C14.7836809,22.7121805 15.0978754,23 15.4867349,23 C15.8745921,23 16.1892877,22.711671 16.1892877,22.3576275 L16.1892877,20.8584189 L18.2969461,20.8584189 C18.6743628,20.8439199 18.9729686,20.5286758 18.9729686,20.1447283 C18.9729686,19.7607808 18.6743628,19.4455366 18.2969461,19.4310377 L16.1892877,19.4310377 L16.1892877,18.0031472 L18.2969461,18.0031472 C18.6853044,18.0031472 19,17.6827251 19,17.2894566 C19,16.8956787 18.6853045,16.575766 18.2969461,16.575766 L16.8552596,16.575766 L18.2227822,14.0179927 C18.3966665,13.6940047 18.2934384,13.2788314 17.9932749,13.0913666 C17.6916081,12.9033924 17.3077598,13.0149543 17.1333743,13.3389424 Z M17.6701725,4.35932909 L26.1349504,4.40299216 C26.6602986,4.40570202 27.0847458,4.83234433 27.0847458,5.35769948 L27.0847458,6.00114709 L16.9907498,6.00114709 L16.9137651,5.90290297 C16.5885431,5.48787044 16.6613489,4.88777557 17.0763814,4.56255355 C17.2457542,4.42983195 17.454996,4.35821916 17.6701725,4.35932909 Z"
            id="形状结合"
            fill={fill}
            fillRule="nonzero"
          ></path>
        </g>
      </svg>
    </IconWrapper>
  );
};
CostManagement.displayName = 'CostManagement';
export default CostManagement;
