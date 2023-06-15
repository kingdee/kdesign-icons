import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const Supplier = ({
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
          id="98.供应商"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="供应商"
            transform="translate(4.000000, 7.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M23.1428571,0 C23.616244,0 24,0.386663183 24,0.863636364 L24,18.1363636 C24,18.6133368 23.616244,19 23.1428571,19 L0.857142857,19 C0.383755941,19 0,18.6133368 0,18.1363636 L0,0.863636364 C0,0.386663183 0.383755941,0 0.857142857,0 L23.1428571,0 Z M22.2857143,1.72727273 L1.71428571,1.72727273 L1.71428571,17.2727273 L22.2857143,17.2727273 L22.2857143,1.72727273 Z M15.4285714,3.45454545 C17.3221191,3.45454545 18.8571429,5.00119813 18.8571429,6.90909091 C18.8571429,8.1423557 18.2157563,9.22468171 17.2507431,9.83590204 C19.1917108,10.5758625 20.5714286,12.4664945 20.5714286,14.6818182 C20.5714286,15.1587913 20.1876726,15.5454545 19.7142857,15.5454545 C19.2408988,15.5454545 18.8571429,15.1587913 18.8571429,14.6818182 C18.8571429,12.7739254 17.3221191,11.2272727 15.4285714,11.2272727 C13.5350237,11.2272727 12,12.7739254 12,14.6818182 C12,15.1587913 11.616244,15.5454545 11.1428571,15.5454545 C10.6694703,15.5454545 10.2857143,15.1587913 10.2857143,14.6818182 C10.2857143,12.4664945 11.6654321,10.5758625 13.6062919,9.83469941 C12.6413865,9.22468171 12,8.1423557 12,6.90909091 C12,5.00119813 13.5350237,3.45454545 15.4285714,3.45454545 Z M7.71428571,12.0909091 C8.1876726,12.0909091 8.57142857,12.4775723 8.57142857,12.9545455 C8.57142857,13.4315186 8.1876726,13.8181818 7.71428571,13.8181818 L4.28571429,13.8181818 C3.81232737,13.8181818 3.42857143,13.4315186 3.42857143,12.9545455 C3.42857143,12.4775723 3.81232737,12.0909091 4.28571429,12.0909091 L7.71428571,12.0909091 Z M7.71428571,8.63636364 C8.1876726,8.63636364 8.57142857,9.02302685 8.57142857,9.5 C8.57142857,9.97697315 8.1876726,10.3636364 7.71428571,10.3636364 L4.28571429,10.3636364 C3.81232737,10.3636364 3.42857143,9.97697315 3.42857143,9.5 C3.42857143,9.02302685 3.81232737,8.63636364 4.28571429,8.63636364 L7.71428571,8.63636364 Z M15.4285714,5.18181818 C14.4817976,5.18181818 13.7142857,5.95514452 13.7142857,6.90909091 C13.7142857,7.8630373 14.4817976,8.63636364 15.4285714,8.63636364 C16.3753453,8.63636364 17.1428571,7.8630373 17.1428571,6.90909091 C17.1428571,5.95514452 16.3753453,5.18181818 15.4285714,5.18181818 Z M9.42857143,5.18181818 C9.90195832,5.18181818 10.2857143,5.56848139 10.2857143,6.04545455 C10.2857143,6.5224277 9.90195832,6.90909091 9.42857143,6.90909091 L4.28571429,6.90909091 C3.81232737,6.90909091 3.42857143,6.5224277 3.42857143,6.04545455 C3.42857143,5.56848139 3.81232737,5.18181818 4.28571429,5.18181818 L9.42857143,5.18181818 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
Supplier.displayName = 'Supplier';
export default Supplier;
