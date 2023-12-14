import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const FeeContract = ({
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
          id="616.费用合同"
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
              d="M17.5714286,11.1429039 C21.1218306,11.1429039 24,14.0210734 24,17.5714754 C24,21.1218774 21.1218306,24.0000468 17.5714286,24.0000468 C14.0210266,24.0000468 11.1428571,21.1218774 11.1428571,17.5714754 C11.1428571,14.0210734 14.0210266,11.1429039 17.5714286,11.1429039 Z M18.8571429,0 C19.3305297,0 19.7142857,0.383755939 19.7142857,0.857142857 L19.7142857,10.6059038 C19.0366946,10.3977486 18.3171452,10.2857143 17.5714286,10.2857143 C13.5476397,10.2857143 10.2857143,13.5476397 10.2857143,17.5714285 C10.2857143,19.3697384 10.9372417,21.0158759 12.017125,22.2866694 L0.857142857,22.2857611 C0.383755939,22.2857611 0,21.9020051 0,21.4286182 L0,0.857142857 C0,0.383755939 0.383755939,0 0.857142857,0 L18.8571429,0 Z M19.7390537,13.7114177 C19.7390537,13.7114177 17.9217276,15.0762841 17.6073043,15.3152903 L17.5669886,15.3435644 L15.4183777,13.7114177 L14.5821163,14.3397262 L17.1605849,16.1492424 L17.3328477,16.2783934 L14.5821163,16.2799315 L14.5821163,17.1361026 L17.1490038,17.1351755 L17.1490038,18.8470054 L14.5821163,18.8484451 L14.5821163,19.7046164 L17.1490038,19.7037875 L17.1506301,22.2731301 L17.9616181,22.2731301 L17.9606921,19.7037875 L20.575315,19.7046164 L20.575315,18.8484451 L17.9606921,18.8470054 L17.9606921,17.1351755 L20.575315,17.1361026 L20.575315,16.2799315 L17.8219419,16.2783934 L17.9968464,16.1492424 L20.575315,14.3397262 L19.7390537,13.7114177 Z M9,12.8571896 L4.71428571,12.8571896 C4.47759224,12.8571896 4.28571429,13.0490676 4.28571429,13.2857611 C4.28571429,13.4886412 4.42668584,13.6585956 4.61601823,13.7030136 L4.71428571,13.7143325 L9,13.7143325 C9.23669347,13.7143325 9.42857143,13.5224545 9.42857143,13.2857611 C9.42857143,13.0490676 9.23669347,12.8571896 9,12.8571896 Z M12.4285714,9.42861822 L4.71428571,9.42861822 C4.47759224,9.42861822 4.28571429,9.62049617 4.28571429,9.85718964 C4.28571429,10.0600698 4.42668584,10.2300242 4.61601823,10.2744422 L4.71428571,10.2857611 L12.4285714,10.2857611 C12.6652649,10.2857611 12.8571429,10.0938831 12.8571429,9.85718964 C12.8571429,9.62049617 12.6652649,9.42861822 12.4285714,9.42861822 Z M5.14285714,2.57147536 C4.11428571,2.57147536 3.42857143,3.47645504 3.42857143,4.3814347 C3.42857143,4.92442252 3.6,5.28641439 3.94285714,5.64840623 L3.94285714,7.45836561 C3.94285714,7.63936153 4.11428571,7.82035748 4.28571429,7.63936153 L5.14285714,6.55338592 L6,7.63936153 C6.17142857,7.82035748 6.34285714,7.63936153 6.34285714,7.45836561 L6.34285714,5.64840623 C6.51428571,5.46741031 6.85714286,4.92442252 6.85714286,4.3814347 C6.85714286,3.2954591 6,2.57147536 5.14285714,2.57147536 Z M12.4285714,5.14290393 L9,5.14290393 C8.76330653,5.14290393 8.57142857,5.33478188 8.57142857,5.57147536 C8.57142857,5.77435548 8.71240013,5.94430991 8.90173252,5.98872791 L9,6.00004679 L12.4285714,6.00004679 C12.6652649,6.00004679 12.8571429,5.80816883 12.8571429,5.57147536 C12.8571429,5.33478188 12.6652649,5.14290393 12.4285714,5.14290393 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
FeeContract.displayName = 'FeeContract';
export default FeeContract;
