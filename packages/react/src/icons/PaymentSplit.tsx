import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const PaymentSplit = ({
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
          id="611.付款拆分"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(4.000000, 3.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M18,13.8461538 C21.3137085,13.8461538 24,16.5324454 24,19.8461538 C24,23.1598623 21.3137085,25.8461538 18,25.8461538 C14.6862915,25.8461538 12,23.1598623 12,19.8461538 C12,16.5324454 14.6862915,13.8461538 18,13.8461538 Z M21.2307692,0 C21.7405705,0 22.1538462,0.413275612 22.1538462,0.923076923 L22.1538462,0.923076923 L22.1552235,14.3082201 C20.9979192,13.4384863 19.5591497,12.9230769 18,12.9230769 C16.8328387,12.9230769 15.7331367,13.2119043 14.7684684,13.7219845 L14.7684684,13.7219845 L14.7692308,12.9230769 L11.0774992,12.9224942 L11.0774992,11.0759033 L14.7692308,11.0769231 L14.7692308,10.1538462 L11.0720359,10.1526078 L14.6707712,5.28637774 L13.7383613,4.60896987 L10.6753305,8.80056393 L7.22917503,4.60896987 L6.29676518,5.28637774 L10.2871437,10.1526078 L6.46153846,10.1538462 L6.46153846,11.0769231 L10.2033733,11.0759033 L10.2033733,12.9224942 L6.46153846,12.9230769 L6.46153846,13.8461538 L10.2033733,13.8457896 L10.2025602,17.5384615 L11.0769231,17.5384615 L11.0774992,13.8457896 L14.5457883,13.8450291 C12.472436,15.0410154 11.0769231,17.2806148 11.0769231,19.8461538 C11.0769231,21.1395755 11.4316196,22.3501534 12.0490499,23.3859248 L12.0490499,23.3859248 L11.1261392,24 L8.29008869,22.129039 L5.54438549,24 C3.91727445,22.7526927 2.98517048,22.129039 2.74807354,22.129039 C2.5109766,22.129039 1.5949521,22.7526927 0,24 L0,24 L0,0.923076923 C0,0.413275612 0.413275612,0 0.923076923,0 L0.923076923,0 L21.2307692,0 Z M21.2307692,20.3076923 L14.7692308,20.3076923 L14.7692308,21.2307692 L17.3800865,23.841625 L18.0328005,23.1889112 L16.0750291,21.2299825 L21.2307692,21.2307692 L21.2307692,20.3076923 Z M18.6426318,15.9391796 L17.9899179,16.5918936 L19.8610868,18.4600962 L14.7692308,18.4615385 L14.7692308,19.3846154 L21.2307692,19.3846154 L21.2323718,18.571183 L21.2534878,18.5500355 L21.2323718,18.5274767 L21.2307692,18.4615385 L21.1649913,18.4600962 L18.6426318,15.9391796 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
PaymentSplit.displayName = 'PaymentSplit';
export default PaymentSplit;
