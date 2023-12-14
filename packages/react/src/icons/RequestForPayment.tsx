import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const RequestForPayment = ({
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
          id="495.请款申请查询"
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
              d="M16.9180891,12.6681567 C19.9103706,12.6681567 22.336094,15.0535017 22.336094,17.9959739 C22.336094,19.2754463 21.8774471,20.4495792 21.1130064,21.368064 L24,24.2065329 L23.2337784,24.96 L20.3474651,22.1208987 C19.4134023,22.8727132 18.2193149,23.3237912 16.9180891,23.3237912 C13.9258077,23.3237912 11.5000843,20.9384462 11.5000843,17.9959739 C11.5000843,15.0535017 13.9258077,12.6681567 16.9180891,12.6681567 Z M19.6619745,0 C20.1318074,0 20.5126822,0.380874793 20.5126822,0.850707702 L20.5126822,0.850707702 L20.5134938,12.7915579 C19.4799787,12.0479586 18.2055284,11.6089632 16.8268096,11.6089632 C13.3750532,11.6089632 10.5768517,14.3605861 10.5768517,17.7548849 C10.5768517,18.8796702 10.8841203,19.9338837 11.4206178,20.840785 L11.4206178,20.840785 L10.3019113,21.5595031 L7.6759563,19.8787953 L5.13365566,21.5595031 C3.62708152,20.4390312 2.7640281,19.8787953 2.54449536,19.8787953 C2.32496265,19.8787953 1.47679752,20.4390312 0,21.5595031 L0,21.5595031 L0,0.850707702 C0,0.380874793 0.380874793,0 0.850707702,0 L0.850707702,0 L19.6619745,0 Z M7.07219961,4.58701864 C6.88819114,4.36988034 6.56519636,4.30350975 6.31257591,4.42051071 L6.31257591,4.42051071 L6.26445628,4.44864 L6.23220796,4.47463874 C6.04012656,4.66394189 6.01553474,4.96813621 6.19860222,5.18488523 L6.19860222,5.18488523 L9.52269628,9.12096 L6.39643469,9.12132827 L6.32209518,9.12822854 C6.15328205,9.15991038 6.02016931,9.2970221 5.98952881,9.46317186 L5.98952881,9.46317186 L5.98286564,9.53593412 L5.98969295,9.61045998 C6.0255313,9.803873 6.19783708,9.95053987 6.39643469,9.95053987 L6.39643469,9.95053987 L9.44685628,9.9504 L9.44685628,11.60832 L6.39643469,11.6089632 L6.32209518,11.6158636 C6.15328205,11.6475454 6.02016931,11.784657 5.98952881,11.9508068 L5.98952881,11.9508068 L5.98286564,12.0235691 L5.98969295,12.098095 C6.0255313,12.2915079 6.19783708,12.4381749 6.39643469,12.4381749 L6.39643469,12.4381749 L9.44685628,12.43776 L9.44675125,15.2779427 L9.45469326,15.3636982 C9.49116875,15.5584352 9.64914549,15.7119894 9.8423451,15.7473351 L9.8423451,15.7473351 L9.85197628,15.74784 L9.86237672,15.7471007 C10.0864353,15.7055337 10.2563411,15.5058218 10.2563411,15.2779427 L10.2563411,15.2779427 L10.2570963,12.43776 L13.2615524,12.4381749 L13.3358919,12.4312745 C13.5288213,12.3950668 13.6751215,12.2211546 13.6751215,12.0235691 L13.6751215,12.0235691 L13.6682941,11.9490431 C13.6324558,11.7556302 13.46015,11.6089632 13.2615524,11.6089632 L13.2615524,11.6089632 L10.2570963,11.60832 L10.2570963,9.9504 L13.2615524,9.95053987 L13.3358919,9.94363957 C13.5288213,9.90743175 13.6751215,9.73351969 13.6751215,9.53593412 L13.6751215,9.53593412 L13.6682941,9.46140816 C13.6324558,9.26799523 13.46015,9.12132827 13.2615524,9.12132827 L13.2615524,9.12132827 L10.2513363,9.12096 L13.2390692,5.20114394 C13.4024278,4.98689664 13.3808741,4.67843138 13.190952,4.48345931 L13.190952,4.48345931 L13.1505363,4.44768 L13.103954,4.42187796 C12.8577038,4.30815667 12.5435794,4.3753419 12.3728552,4.60200315 L12.3728552,4.60200315 L9.88449869,7.90565769 L7.07219961,4.58701864 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
RequestForPayment.displayName = 'RequestForPayment';
export default RequestForPayment;
