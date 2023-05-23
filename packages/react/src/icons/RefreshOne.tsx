import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const RefreshOne = ({
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
          id="979.刷新"
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
              d="M6.84781187,26.6934886 C3.80704425,25.2225709 1.20680529,21.9951386 0.350014414,18.6295745 C-0.456376997,15.4637415 0.144683261,12.036578 2.00759675,9.161942 C3.6091797,6.69423495 5.85288912,5.03105267 9.13818748,3.87559828 C9.9483122,3.59000132 10.6128384,3.27267137 10.6128384,3.16813915 C10.6128384,3.06547357 10.2544422,2.62307827 9.81578025,2.18628296 C8.91978978,1.29402579 8.84512392,0.974829188 9.40885127,0.405501922 C10.0621776,-0.255291051 10.6091052,-0.130225702 11.7608262,0.941229546 C12.3133537,1.4545574 13.2896099,2.2964151 13.9298698,2.81160964 C15.1842564,3.8195989 15.4922531,4.27506072 15.3373215,4.89852072 C15.2495891,5.24198374 13.4389417,7.61449181 12.094956,9.1470088 C11.4640294,9.8656678 11.0421672,10.0523325 10.5587057,9.83020154 C10.3181098,9.7072887 10.1164585,9.51985637 9.97631189,9.28887397 C9.74298104,8.84461202 9.95391211,8.37795033 10.9208352,7.20942946 C11.2754981,6.78010071 11.5685616,6.3694384 11.5685616,6.30037247 C11.5685616,6.04464185 10.7267039,5.97184265 9.76538078,6.14544078 C8.08353202,6.44783756 6.58834795,7.29342856 5.10623043,8.77741273 C4.3670383,9.51847151 3.62224622,10.4424617 3.39451533,10.8997901 C1.78919911,14.1272224 1.86759826,17.8493161 3.60357975,20.8340843 C4.40623786,22.209803 6.26915135,23.9793842 7.63740346,24.6607102 C10.8144363,26.2436267 14.3423987,26.1502944 17.3066338,24.4068463 C20.8588626,22.3218018 22.8655079,17.8623827 22.0329835,13.9106914 C21.7473865,12.5480393 20.9055288,10.6869924 20.0879375,9.60247062 C19.3431454,8.61688112 19.1602141,8.18381904 19.2796795,7.69849092 C19.4084781,7.18142976 20.1439369,6.89769946 20.6703313,7.16462991 C21.6036547,7.63315825 23.3732358,10.4349951 23.9462964,12.3483081 C24.4036249,13.8696252 24.3625586,17.4367872 23.8716306,19.0402368 C23.4423018,20.4402219 22.3540467,22.5961989 21.5868549,23.5705885 C20.79353,24.5785778 19.0108823,26.0382956 17.7788954,26.6953552 C15.8375828,27.7257443 13.0730789,28.2073391 10.7715034,27.9161422 C9.2520529,27.7238776 8.46992791,27.4793469 6.84781187,26.6934886 Z"
              id="路径"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
RefreshOne.displayName = 'RefreshOne';
export default RefreshOne;
