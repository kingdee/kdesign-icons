import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const SalaryAndExpenseAllocation = ({
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
          id="746.薪酬费用分配"
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
              d="M14.3898833,24.0386815 C11.7259567,21.3735176 11.7259567,17.0537454 14.3898833,14.3885815 C15.6688195,13.108488 17.4041241,12.3892416 19.2136315,12.3892416 C21.023139,12.3892416 22.7584435,13.108488 24.0373798,14.3885815 C26.7014554,17.054192 26.7014554,21.3743728 24.0373798,24.0399832 C22.7595383,25.3221345 21.0231699,26.041795 19.2129806,26.0395237 C17.4030261,26.0412478 15.6671106,25.3211122 14.3898833,24.0386815 L14.3898833,24.0386815 Z M17.5727369,17.7289507 C16.9623903,18.353973 16.268465,18.8915023 15.5107165,19.3262356 C16.2684402,19.7604844 16.9623723,20.297581 17.5727369,20.9222186 C18.1970529,21.5325453 18.7337238,22.2264937 19.1674184,22.9842392 C19.6020005,22.2267385 20.1390631,21.53285 20.7634014,20.9222186 C21.3734636,20.2972418 22.0674456,19.7601067 22.825422,19.3262356 C22.0679334,18.8911141 21.3740589,18.3536243 20.7634014,17.7289507 C20.1388387,17.1185193 19.6017506,16.4245979 19.1674184,15.6669301 C18.7350002,16.4255703 18.1986874,17.1200604 17.5740388,17.7302525 L17.5727369,17.7289507 Z M9.90134363,22.6666047 C4.43386491,22.6666047 0,20.884467 0,18.6896647 L0,15.2633781 C0,17.5258729 4.4260542,19.2390162 9.89353295,19.2390162 L10.5196894,19.2390162 C10.4569629,20.4269708 10.7122046,21.61016 11.2591009,22.6666047 L9.90134363,22.6666047 Z M9.9104561,17.7055186 C4.45729697,17.7055186 0.0169231488,15.9220792 0.0169231488,13.7259751 L0.0169231488,10.2944814 C0.0169231488,12.5608815 4.45078803,14.344321 9.9104561,14.3430192 C10.6811557,14.3391015 11.450962,14.2899834 12.2159096,14.195918 C11.3523677,15.1855425 10.8007196,16.4084077 10.6303408,17.7107257 L9.9104561,17.7055186 Z M9.9104561,12.9188712 C4.45599515,12.9188712 0.0169231488,11.1354317 0.0169231488,8.92110279 L0.0169231488,5.49091078 C0.0169231488,7.68831651 4.57315542,9.47175602 9.95732019,9.47175602 C15.341485,9.47175602 19.7089591,7.73908599 19.8508531,5.59375144 L19.8508531,9.20619276 C19.8623863,9.74023515 19.6211048,10.2483742 19.1999628,10.5769678 C17.1328442,10.5915455 15.1347636,11.3225955 13.5463295,12.6454972 C12.4156623,12.8532816 11.2667653,12.9453154 10.1174392,12.9201729 L9.9104561,12.9188712 Z M23.2146543,11.7030081 L23.2146543,6.02594263 L20.8284904,6.02594263 L24.3654284,0 L28,6.02594263 L25.6099308,6.02594263 L25.6099308,11.7030081 L23.2146543,11.7030081 Z M4.9649914,7.42796037 C1.90450508,6.71848994 0.0182249148,5.40499325 0.0182249148,3.98214698 C0.0182249148,1.78343951 4.44427914,0.00130176604 9.91175786,0.00130176604 C15.3792365,0.00130176604 19.8052908,1.78474125 19.8052908,3.98214698 C19.8052908,5.40499325 17.9203124,6.71588635 14.8585244,7.42796037 C13.234895,7.79117843 11.5754967,7.97021877 9.91175786,7.96169045 C8.24869484,7.96826991 6.59018341,7.78748431 4.96759499,7.42275325 L4.9649914,7.42796037 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
SalaryAndExpenseAllocation.displayName = 'SalaryAndExpenseAllocation';
export default SalaryAndExpenseAllocation;
