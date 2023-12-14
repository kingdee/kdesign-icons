import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const SvnMetadataCheckout = ({
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
          id="1499-SVN元数据签出"
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
              d="M21.0626968,11.2102731 L17.6187975,7.7663738 L18.6687668,6.71640451 L22.9076428,10.9552806 L22.9481416,10.9162817 L23.9981109,11.966251 L23.9576121,12.0052498 L23.9981109,12.0442487 L22.9481416,13.094218 L22.9076428,13.0552191 L18.6687668,17.2940952 L17.6187975,16.2441259 L21.155694,12.7102292 L6.00613705,12.7102292 L6.00613705,11.2102731 L21.0626968,11.2102731 Z M20.4852136,20.4845019 C17.0534563,23.9166891 11.8920754,24.9436036 7.4079293,23.086374 C2.92378325,21.2291443 0,16.8535418 0,12 C0,7.14645823 2.92378325,2.77085566 7.4079293,0.91362604 C11.8920754,-0.943603583 17.0534563,0.0833109143 20.4852136,3.51549812 C20.769435,3.8097736 20.7653704,4.27753973 20.4760783,4.56683182 C20.1867863,4.8561239 19.7190201,4.86018842 19.4247446,4.57596709 C15.3242489,0.475889769 8.67640582,0.476115889 4.57618902,4.57647215 C0.475972227,8.67682842 0.475972227,15.3246715 4.57618902,19.4250278 C8.67640582,23.525384 15.3242489,23.5256102 19.4247446,19.4255328 C19.6110762,19.2227997 19.8935194,19.1384772 20.160498,19.2058761 C20.4274765,19.273275 20.636052,19.4815555 20.7038287,19.7484384 C20.7716054,20.0153212 20.6876828,20.2978836 20.4852136,20.4845019 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
SvnMetadataCheckout.displayName = 'SvnMetadataCheckout';
export default SvnMetadataCheckout;
