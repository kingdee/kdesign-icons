import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const InterestRateClass = ({
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
          id="411.利率类"
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
              d="M12,0 C18.627417,0 24,5.372583 24,12 C24,18.627417 18.627417,24 12,24 C5.372583,24 0,18.627417 0,12 C0,5.372583 5.372583,0 12,0 Z M15.7177734,12.09375 C14.8238002,12.09375 14.1081195,12.3787667 13.570731,12.9488002 C13.0333426,13.5188337 12.7646484,14.2859933 12.7646484,15.250279 C12.7646484,16.1241629 13.0157645,16.8285435 13.5179967,17.3634207 C14.0202288,17.898298 14.6856864,18.1657366 15.5143695,18.1657366 C16.398298,18.1657366 17.1089565,17.8807198 17.6463448,17.3106864 C18.1837333,16.7406529 18.4524274,15.9785157 18.4524274,15.0242745 C18.4524274,14.0951451 18.2126116,13.374442 17.7329799,12.8621652 C17.2533482,12.3498884 16.5816127,12.09375 15.7177734,12.09375 Z M16.7197266,6.33063615 L14.8137556,6.33063615 L7.24260601,18.0075335 L9.13351003,18.0075335 L16.7197266,6.33063615 Z M15.6424386,13.4648438 C15.9990234,13.4648438 16.2840402,13.6067243 16.4974888,13.8904855 C16.7109375,14.1742466 16.8176619,14.5797991 16.8176619,15.1071429 C16.8176619,16.2321429 16.4158761,16.7946429 15.6123047,16.7946429 C14.8137556,16.7946429 14.414481,16.2522321 14.414481,15.1674107 C14.414481,14.0323661 14.8238002,13.4648438 15.6424386,13.4648438 Z M8.47809712,6.17243303 C7.57407925,6.17243303 6.85714286,6.45996093 6.32728795,7.0350167 C5.79743303,7.61007259 5.53250559,8.37472098 5.53250559,9.32896208 C5.53250559,10.202846 5.78236608,10.905971 6.28208706,11.4383371 C6.78180804,11.9707031 7.44852121,12.2368862 8.2822266,12.2368862 C9.17117744,12.2368862 9.88183595,11.953125 10.414202,11.3856027 C10.9465681,10.8180804 11.2127511,10.062221 11.2127511,9.11802454 C11.2127511,8.19893974 10.9729353,7.47823664 10.4933036,6.9559152 C10.0136719,6.43359376 9.34193639,6.17243303 8.47809712,6.17243303 Z M8.43289621,7.54352676 C9.20633373,7.54352676 9.59305243,8.08844862 9.59305243,9.17829241 C9.59305243,10.3032924 9.18875556,10.8657924 8.38016185,10.8657924 C7.58663504,10.8657924 7.18987167,10.3258929 7.18987167,9.24609378 C7.18987167,8.11104908 7.60421316,7.54352676 8.43289621,7.54352676 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
InterestRateClass.displayName = 'InterestRateClass';
export default InterestRateClass;
