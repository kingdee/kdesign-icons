import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const ProfessionalQualification = ({
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
          id="1350-职业资格"
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
              d="M24,10.7241726 C24,10.6760281 23.9939821,10.6278837 23.9849549,10.5797393 L23.9849549,5.29889671 C23.9849549,4.36609833 23.223671,3.60481447 22.2908727,3.60481447 L17.0942829,3.60481447 L17.0942829,1.94684055 C17.0942829,0.872617877 16.221665,-4.36776394e-16 15.1474424,-4.36776394e-16 L9.47241727,-4.36776394e-16 C8.3981946,-4.36776394e-16 7.52557674,0.872617877 7.52557674,1.94684055 L7.52557674,3.60481447 L1.69408224,3.60481447 C0.761283838,3.60481447 -2.06445092e-16,4.36609833 -2.06445092e-16,5.29889671 L-2.06445092e-16,19.3269811 C-2.06445092e-16,20.2597794 0.761283838,21.0210633 1.69408224,21.0210633 L22.2938817,21.0210633 C23.22668,21.0210633 23.987964,20.2597794 23.987964,19.3269811 L23.987964,10.8686059 C23.996991,10.8204614 24,10.772317 24,10.7241726 Z M9.03009027,1.94684055 C9.03009027,1.70310935 9.22868607,1.50451355 9.47241727,1.50451355 L15.1474424,1.50451355 C15.3911736,1.50451355 15.5897693,1.70310935 15.5897693,1.94684055 L15.5897693,3.60481447 L9.03009027,3.60481447 L9.03009027,1.94684055 L9.03009027,1.94684055 Z M1.69408224,5.109328 L22.2938817,5.109328 C22.3991977,5.109328 22.4834504,5.19358076 22.4834504,5.29889671 L22.4834504,9.97191579 L1.50150451,9.97191579 L1.50150451,5.29889671 C1.50451353,5.19658978 1.58876629,5.109328 1.69408224,5.109328 Z M17.0942829,11.4764293 L19.2367101,11.4764293 L19.2367101,12.6800402 L17.0942829,12.6800402 L17.0942829,11.4764293 Z M5.38314945,11.4764293 L7.52557674,11.4764293 L7.52557674,12.6800402 L5.38314945,12.6800402 L5.38314945,11.4764293 Z M22.2938817,19.5135407 L1.69408224,19.5135407 C1.58876629,19.5135407 1.50451353,19.429288 1.50451353,19.323972 L1.50451353,11.4764293 L3.88164494,11.4764293 L3.88164494,12.9839519 C3.88164494,13.6459379 4.42026077,14.1815447 5.07923773,14.1815447 L7.83249751,14.1815447 C8.49448346,14.1815447 9.03009027,13.6429288 9.03009027,12.9839519 L9.03009027,11.4764293 L15.5897693,11.4764293 L15.5897693,12.9839519 C15.5897693,13.6459379 16.1283852,14.1815447 16.7873621,14.1815447 L19.5406219,14.1815447 C20.2026078,14.1815447 20.7382146,13.6429288 20.7382146,12.9839519 L20.7382146,11.4764293 L22.480517,11.4764293 L22.480517,19.3269811 C22.4834504,19.429288 22.3961886,19.5135407 22.2938817,19.5135407 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
ProfessionalQualification.displayName = 'ProfessionalQualification';
export default ProfessionalQualification;