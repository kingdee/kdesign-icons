import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const DataMart = ({
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
          id="875.数据集市"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(2.000000, 3.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M25.0531023,23.6153555 C25.0531023,24.1400101 24.2071703,25.0537346 23.5852482,25.0537346 L4.42945745,25.0537346 C3.85174781,25.0537346 2.97781459,24.5467649 2.97781459,23.6153555 C2.90707464,20.8447072 2.97781459,15.042557 2.97781459,12.3529649 C3.82522032,12.1908525 5.83394033,12.3529649 7.05420458,10.4798298 C7.68939044,11.782624 9.36946441,11.8695752 10.4069838,11.8695752 C11.4445031,11.8695752 13.224792,11.4967167 13.9999841,9.94780638 C15.762588,13.2887956 19.8492942,11.5689304 20.960501,10.1777112 C22.3045602,11.6661978 24.185064,12.1790625 25.0531023,12.1790625 L25.0531023,23.6153555 Z M20.960501,7.6340203 C20.3651064,9.30819927 19.2480046,10.3118224 17.312972,10.2455037 C15.6019493,10.1777112 14.5600087,9.24040681 13.9646141,7.70033901 C13.295532,9.44231044 12.1047427,10.3796149 10.1697102,10.2455037 C8.60753613,10.1777112 7.63928297,9.37599173 6.89503968,7.70033901 C6.74619102,7.96856134 6.67102982,8.23678368 6.59734236,8.43721356 C5.92678653,9.64274031 4.5871486,10.3796149 3.10013577,10.3118224 C1.61164918,10.179185 0.420859917,9.30819927 0.0494751458,7.96856134 C-0.0256860579,7.56622784 -0.0256860579,7.09904938 0.1231626,6.69671588 C0.718557234,5.09032937 3.944594,0 4.39113997,0 L23.5896694,0 C23.9374742,0 26.7095962,5.02253691 27.6572169,6.22806367 C28.6991575,7.76813147 27.2106709,9.91096265 25.2771121,10.1777112 C23.3420796,10.5122523 21.853593,9.64274031 20.9590273,7.6340203 L20.960501,7.6340203 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
DataMart.displayName = 'DataMart';
export default DataMart;
