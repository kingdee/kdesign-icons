import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const PreSalesManagement = ({
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
          id="1883.售前管理"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <path
            d="M15.6568825,15.4260387 C17.6898854,13.2663228 19.7130885,11.1343496 21.7158782,8.98221352 C22.7548141,7.8664187 23.9132648,7.35371573 25.3870196,8.01013612 C26.7865356,8.63381039 27.0129159,9.79664218 26.9994523,11.2293224 C26.9480696,16.7918785 26.9811034,22.3556929 26.976189,27.9186385 C26.9745897,29.8623439 26.0176276,30.9676528 24.3374699,30.9970434 C22.3318304,31.0319167 21.1917286,29.9447035 21.1689015,27.8774736 C21.137089,24.9911414 21.1607594,22.1043597 21.1607594,19.217608 L21.1607594,17.3987453 L20.8074781,17.2125448 C19.7677571,18.3346312 18.7471701,19.4769105 17.6829355,20.5741901 C16.3348312,21.9644172 14.742783,22.0001294 13.3840649,20.6242231 C12.303924,19.530269 11.30945,18.3464054 10.2770569,17.2020588 L9.84386644,17.4075834 L9.84386644,24.0640337 C9.84386644,25.4290346 9.887485,26.7952938 9.83243838,28.1573586 C9.75697827,30.0270931 8.52676047,31.0672393 6.5790174,30.9966239 C4.99799008,30.9390411 4.01942228,29.771985 4.0206436,27.9715775 C4.02390045,22.3561123 4.04675657,16.7397783 4.00025919,11.1246726 C3.98883113,9.72734504 4.35269714,8.6602949 5.61187766,8.03242625 C7.00688637,7.33645885 8.18982165,7.81093305 9.20139416,8.83427177 C11.1605653,10.8158165 13.0801599,12.8384961 15.0185395,14.8418815 C15.1596601,14.9872767 15.3167159,15.1158943 15.6568825,15.4260387 L15.6568825,15.4260387 Z M6.85515195,2.00001979 C8.39008899,1.99455706 9.54935394,3.12083784 9.51143487,4.58084141 C9.47392291,6.01307221 8.40029573,7.04818514 6.93349088,7.06667037 C5.38631156,7.08599448 4.30739199,6.02316868 4.33106233,4.50309559 C4.35388938,3.02167072 5.37895456,2.00465354 6.85515195,2.00001979 L6.85515195,2.00001979 Z M24.0959975,7.07170363 C22.6597838,7.0570233 21.5678078,5.95887483 21.5694634,4.53125786 C21.5715008,3.05951002 22.6206144,2.01475001 24.1070185,2.0042341 C25.7047662,1.99374815 26.7159898,3.03092832 26.6670207,4.63042497 C26.619302,6.18579076 25.6692898,7.08767223 24.0959975,7.07170363 Z"
            id="形状结合"
            fill={fill}
            fillRule="nonzero"
          ></path>
        </g>
      </svg>
    </IconWrapper>
  );
};
PreSalesManagement.displayName = 'PreSalesManagement';
export default PreSalesManagement;