import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const BusinessPartner = ({
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
          id="1295-商务伙伴"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(4.000000, 6.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M10.2857143,0 C13.5994227,0 16.2857143,2.6862915 16.2857143,6 C16.2857143,8.01703998 15.2904153,9.80161544 13.7641515,10.8893923 C17.6552268,12.286777 20.4597512,15.963703 20.5681715,20.3100216 L20.5714286,20.5714286 L18.8571429,20.5714286 C18.8571429,15.8375593 15.0195836,12 10.2857143,12 C5.63208008,12 1.84462996,15.708575 1.71757868,20.3315102 L1.71428571,20.5714286 L0,20.5714286 C0,16.1114379 2.83863283,12.3144455 6.80776268,10.8885872 C5.28101321,9.80161544 4.28571429,8.01703998 4.28571429,6 C4.28571429,2.6862915 6.97200584,0 10.2857143,0 Z M20.8538436,4.18324652 C21.2958375,6.09773255 20.4805924,8.00900451 18.9357338,9.05478385 C21.9206087,11.0548431 23.9074198,14.990955 23.9968119,18.5995459 L24,18.8571429 L22.2857143,18.8571429 C22.2857143,15.3942849 20.2141003,11.4825736 17.1478989,10.143141 L17.1428571,8.14285714 C18.8033717,7.75949716 19.7338898,6.19082847 19.3505297,4.53031387 C18.9795362,2.92336424 17.4158528,1.90190748 15.8104084,2.18512372 C15.3451123,1.69018006 14.8488622,1.28682289 14.4541876,0.971852654 L15.2135937,0.740821166 L15.3027001,0.714507099 C17.7934719,0.139467099 20.2788036,1.69247462 20.8538436,4.18324652 Z M10.2857143,1.71428571 C7.91877968,1.71428571 6,3.63306536 6,6 C6,8.36693461 7.91877968,10.2857143 10.2857143,10.2857143 C12.6526489,10.2857143 14.5714286,8.36693461 14.5714286,6 C14.5714286,3.63306536 12.6526489,1.71428571 10.2857143,1.71428571 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
BusinessPartner.displayName = 'BusinessPartner';
export default BusinessPartner;
