import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const NewSuppliers = ({
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
          id="937.新增供应商"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(4.000000, 2.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M12.6402903,22.5541051 L17.7319692,24.3802228 L17.7319692,21.0031752 C17.4287435,21.1767979 17.1179702,21.3368932 16.8005645,21.4829898 C15.2116135,22.2134434 13.4830934,22.5904438 11.7342876,22.5879744 C9.63124191,22.5904123 7.56394286,22.044159 5.73660602,21.0031752 L5.73660602,24.3731667 L10.7605463,22.5484603 C11.3860752,22.5980731 12.0144748,22.5999602 12.6402903,22.5541051 L12.6402903,22.5541051 Z M20.3399022,18.9724308 L20.3399022,27.9943551 L11.6933622,24.8910841 L3.12867295,28 L3.12867295,18.9710196 C1.18683534,16.9572098 -3.9169201e-16,14.2589587 -3.9169201e-16,11.2953984 C-3.9169201e-16,5.05639837 5.25396905,2.75408445e-16 11.7342876,2.75408445e-16 C18.2160173,2.75408445e-16 23.4685752,5.05639837 23.4685752,11.292576 C23.4685752,14.2575475 22.2831511,16.9557986 20.3399022,18.9696084 L20.3399022,18.9724308 Z M5.3456983,17.5668565 C7.07579526,19.1901004 9.3619359,20.0890026 11.7342876,20.0789121 C14.1066393,20.0890026 16.3927799,19.1901004 18.1228769,17.5668565 C19.8135175,15.9721788 20.8606421,13.752331 20.8606421,11.2939872 C20.8606421,6.44362683 16.7751625,2.51197016 11.7342876,2.51197016 C6.69341263,2.51197016 2.60793307,6.44362683 2.60793307,11.2939872 C2.60793307,13.752331 3.65646893,15.97359 5.3456983,17.5668565 Z M11.7342876,16.5648909 C8.71004486,16.5648909 6.25875712,14.2053324 6.25875712,11.2939872 C6.25875712,8.38405322 8.71004486,6.02449473 11.7342876,6.02449473 C14.7585303,6.02449473 17.2098181,8.38405322 17.2098181,11.2939872 C17.2098181,14.2053324 14.7585303,16.5648909 11.7342876,16.5648909 Z M11.7342876,14.0557432 C13.3190867,14.0557432 14.6032962,12.8195151 14.6032962,11.2939872 C14.6032962,9.76987047 13.3190867,8.53364246 11.7342876,8.53364246 C10.1508997,8.53364246 8.86669019,9.76987047 8.86669019,11.2939872 C8.86669019,12.8181039 10.1508997,14.0557432 11.7342876,14.0557432 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
NewSuppliers.displayName = 'NewSuppliers';
export default NewSuppliers;
