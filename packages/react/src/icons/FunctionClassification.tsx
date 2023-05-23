import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const FunctionClassification = ({
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
          id="745.函数分类"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(2.000000, 5.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M26.6,2.92173913 C27.3731986,2.92173913 28,3.54854049 28,4.32173913 L28,21 C28,21.7731986 27.3731986,22.4 26.6,22.4 L1.4,22.4 C0.626801364,22.4 0,21.7731986 0,21 L0,4.32173913 C0,3.54854049 0.626801364,2.92173913 1.4,2.92173913 L26.6,2.92173913 Z M10.9912457,9.00236333 C10.8816247,9.43584118 10.7823798,9.8454792 10.6416308,10.4505706 L10.5675574,10.7704193 L8.66566781,10.7704193 C8.60093763,10.7704193 8.54503432,10.8104854 8.52112831,10.8672459 L8.5087462,10.9287054 L8.5087462,12.1949943 C8.5087462,12.2605587 8.54826532,12.3168125 8.60458684,12.3408415 L8.66566781,12.3532805 L10.2074223,12.3532805 L10.1477921,12.609704 L10.1321,12.6793499 C9.64250465,14.8399553 9.40398385,15.8506123 9.18429364,16.6523315 C8.9842186,17.3851962 8.64762181,17.7571685 8.09055019,17.8616374 C8.03876606,17.871926 7.96579753,17.8798403 7.87085998,17.8853804 C7.8088661,17.8894534 7.75723357,17.9294538 7.73536565,17.9844487 L7.72413793,18.0436665 L7.72413793,19.3131211 C7.72413793,19.3562215 7.74149569,19.3974724 7.77229611,19.4273457 C7.8030965,19.4572189 7.84464201,19.4731313 7.88733674,19.4714072 C7.94232508,19.4695351 7.99726259,19.4663686 8.0521044,19.46191 C9.38436864,19.3455697 10.3047137,18.5066533 10.6970177,17.0733725 C10.910333,16.2920821 11.1353714,15.3466317 11.5719005,13.4296984 L11.6620854,13.0331194 L11.6777776,12.962682 L11.8166532,12.3532805 L13.84408,12.3532805 C13.9090791,12.3532805 13.964848,12.3134178 13.9886699,12.2566065 L14.0010016,12.1949943 L14.0010016,10.9287054 C14.0010016,10.8634124 13.9612808,10.8070229 13.9050097,10.782909 L13.84408,10.7704193 L12.1791421,10.7704193 C12.3125254,10.198215 12.407463,9.80408251 12.5118158,9.39253862 C12.7260137,8.54175073 13.4674683,8.21093274 15.0429609,8.48001913 C15.1150279,8.49239482 15.1869547,8.50558618 15.2587281,8.51959066 C15.3218212,8.53162069 15.3833506,8.50372687 15.4174895,8.45335114 L15.4415418,8.39612749 L15.6981086,7.15674719 C15.706873,7.11514451 15.6986705,7.0717344 15.6753498,7.03630018 C15.6520291,7.00086598 15.6155524,6.97638939 15.5741405,6.96838671 C15.501172,6.95493238 15.4438956,6.94385233 15.3991729,6.93672949 C13.0312262,6.52201984 11.4494567,7.18286439 10.9912457,9.00236333 Z M16.5713772,10.7704193 L14.9425311,10.7704193 C14.877801,10.7704193 14.8218977,10.8104854 14.7979916,10.8672459 L14.7856096,10.9287054 L14.7856096,12.1949943 C14.7856096,12.2605587 14.8251286,12.3168125 14.8814502,12.3408415 L14.9425311,12.3532805 L15.6125862,12.3532805 L16.3132411,13.7303697 L14.7079334,15.5190028 L14.1579232,15.5190028 C14.0931931,15.5190028 14.0372897,15.559069 14.0133837,15.6158295 L14.0010016,15.6772889 L14.0010016,16.9435778 C14.0010016,17.0091422 14.0405208,17.065396 14.0968422,17.0894251 L14.1579232,17.1018641 L15.4046652,17.1018641 L17.079803,15.2356707 L18.0291787,17.1018641 L19.3363355,17.1018641 C19.4013345,17.1018641 19.4571034,17.0620013 19.4809254,17.00519 L19.493257,16.9435778 L19.493257,15.6772889 C19.493257,15.611996 19.4535362,15.5556065 19.3972652,15.5314926 L19.3363355,15.5190028 L18.9879696,15.5190028 L18.2049308,13.9812532 L19.6658708,12.3532805 L20.1209434,12.3532805 C20.1859424,12.3532805 20.2417113,12.3134178 20.2655333,12.2566065 L20.277865,12.1949943 L20.277865,10.9287054 C20.277865,10.8634124 20.2381442,10.8070229 20.181873,10.782909 L20.1209434,10.7704193 L18.9699236,10.7704193 L17.4391535,12.4759522 L16.5713772,10.7704193 Z M25.562963,0 C26.3361616,0 26.962963,0.626801364 26.962963,1.4 L26.962963,1.9478261 L1.03703704,1.9478261 L1.03703704,1.4 C1.03703704,0.626801364 1.6638384,0 2.43703704,0 L25.562963,0 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
FunctionClassification.displayName = 'FunctionClassification';
export default FunctionClassification;
