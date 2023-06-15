import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const PersonnelPayrollCosting = ({
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
          id="379.人员薪资成本核算"
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
              d="M24,11.0769231 L24,23.0769231 L13.8461538,23.0769231 L13.8461538,11.0769231 L24,11.0769231 Z M11.9037801,12 L12,22.1538462 L1.88234614,22.1538462 C0.842755052,22.1538462 0,21.3586878 0,20.3778103 L0.323556539,15.6034351 C0.580391631,13.3032971 2.63416423,12 4.48359493,12 L11.9037801,12 Z M18.4615385,19.3846154 L15.6923077,19.3846154 L15.6923077,21.2307692 L18.4615385,21.2307692 L18.4615385,19.3846154 Z M22.1538462,19.3846154 L19.3846154,19.3846154 L19.3846154,21.2307692 L22.1538462,21.2307692 L22.1538462,19.3846154 Z M18.4615385,16.6153846 L15.6923077,16.6153846 L15.6923077,18.4615385 L18.4615385,18.4615385 L18.4615385,16.6153846 Z M22.1538462,16.6153846 L19.3846154,16.6153846 L19.3846154,18.4615385 L22.1538462,18.4615385 L22.1538462,16.6153846 Z M22.1538462,12.9230769 L15.6923077,12.9230769 L15.6923077,14.7692308 L22.1538462,14.7692308 L22.1538462,12.9230769 Z M11.5384615,0 C14.3423687,0 16.6153846,2.2730159 16.6153846,5.07692308 C16.6153846,7.88083026 14.3423687,10.1538462 11.5384615,10.1538462 C8.73455436,10.1538462 6.46153846,7.88083026 6.46153846,5.07692308 C6.46153846,2.2730159 8.73455436,0 11.5384615,0 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
PersonnelPayrollCosting.displayName = 'PersonnelPayrollCosting';
export default PersonnelPayrollCosting;
