import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const IncomeMonitoringList = ({
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
          id="297.项目收入预算执行监控列表"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="项目收入预算执行监控列表"
            transform="translate(4.000000, 5.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M7.98936128,0 C8.26260045,0 8.51783633,0.135616735 8.66983045,0.361559694 L8.66983045,0.361559694 L9.8277832,2.08288475 C9.97977733,2.30882771 10.2350132,2.44444444 10.5082524,2.44444444 L10.5082524,2.44444444 L20.7240263,2.44444444 C21.1762661,2.44444444 21.5429335,2.80924947 21.5429335,3.25925926 L21.5429335,3.25925926 L21.5429335,10.1653379 C20.4461093,9.45498799 19.1355309,9.04206959 17.7276799,9.04206959 C13.8696604,9.04206959 10.7421177,12.1429122 10.7421177,15.9679955 C10.7421177,17.2779092 11.1088988,18.5028881 11.7461921,19.547485 L0.807912255,19.5470325 C0.35571335,19.5409787 -0.0059343893,19.171299 7.37904725e-05,18.72133 L7.37904725e-05,18.72133 L0.242403818,0.803853378 C0.248429866,0.358158827 0.613238639,0 1.06118242,0 L1.06118242,0 L7.98936128,0 Z M8.67417857,15.0559504 L6.91155196,15.0559504 C6.44967309,15.0559504 6.07524627,15.4285309 6.07524627,15.8881322 C6.07524627,16.3477334 6.44967309,16.720314 6.91155196,16.720314 L6.91155196,16.720314 L8.67417857,16.720314 C9.13605742,16.720314 9.51048418,16.3477334 9.51048418,15.8881322 C9.51048418,15.4285309 9.13605742,15.0559504 8.67417857,15.0559504 L8.67417857,15.0559504 Z M4.14991104,15.0891575 C3.71416583,15.0891575 3.36092455,15.4393832 3.36092455,15.8714083 C3.36092455,16.3034336 3.71416583,16.6536592 4.14991104,16.6536592 C4.58565625,16.6536592 4.93889753,16.3034336 4.93889753,15.8714083 C4.93889753,15.4393832 4.58565625,15.0891575 4.14991104,15.0891575 Z M4.12573314,10.4487101 C3.68998793,10.4487101 3.33674665,10.7989358 3.33674665,11.230961 C3.33674665,11.6629862 3.68998793,12.0132119 4.12573314,12.0132119 C4.56147832,12.0132119 4.91471962,11.6629862 4.91471962,11.230961 C4.91471962,10.7989358 4.56147832,10.4487101 4.12573314,10.4487101 Z M9.58673797,10.4371425 L6.83948745,10.4371425 C6.41780395,10.4371425 6.07596196,10.7772989 6.07596196,11.196903 C6.07596196,11.6165071 6.41780395,11.9566635 6.83948745,11.9566635 L6.83948745,11.9566635 L9.58673797,11.9566635 C10.0084214,11.9566635 10.3502634,11.6165071 10.3502634,11.196903 C10.3502634,10.7772989 10.0084214,10.4371425 9.58673797,10.4371425 L9.58673797,10.4371425 Z M4.18577032,5.83620396 C3.72940852,5.83620396 3.39678386,6.20751458 3.39678386,6.61840976 C3.39678386,7.07084954 3.7294085,7.40070566 4.18577032,7.40070566 C4.64204126,7.40070566 4.97475683,7.03115234 4.97475683,6.61840976 C4.97475683,6.20566718 4.64204126,5.83620396 4.18577032,5.83620396 Z M16.2996343,5.79005066 L6.83658617,5.79005066 C6.39951835,5.79005066 6.04520486,6.14261699 6.04520486,6.57752957 C6.04520486,7.01244215 6.39951835,7.36500848 6.83658617,7.36500848 L6.83658617,7.36500848 L16.2996343,7.36500848 C16.7367022,7.36500848 17.0910156,7.01244215 17.0910156,6.57752957 C17.0910156,6.14261699 16.7367022,5.79005066 16.2996343,5.79005066 L16.2996343,5.79005066 Z M18.2680313,10.5925926 C21.4337102,10.5925926 24,13.1462277 24,16.2962963 C24,19.4463649 21.4337102,22 18.2680313,22 C15.1023524,22 12.5360625,19.4463649 12.5360625,16.2962963 C12.5360625,13.1462277 15.1023524,10.5925926 18.2680313,10.5925926 Z M19.1916598,12.7859506 L18.2614594,14.012495 L17.3717748,12.8188206 C17.1292096,12.4933753 16.6706358,12.4186728 16.3364435,12.6501635 C16.0268466,12.8646171 15.9505793,13.2882065 16.1660957,13.5962767 C16.17491,13.6088764 16.184151,13.6211753 16.1938024,13.6331524 L17.3436882,15.0601049 L15.9712344,15.0601049 C15.6100113,15.0601049 15.317182,15.3514901 15.317182,15.710932 C15.317182,16.070374 15.6100113,16.3617592 15.9712344,16.3617592 L17.4502942,16.3617592 L17.4502942,17.1288342 L15.93279,17.1288342 C15.5927991,17.1288342 15.317182,17.4030922 15.317182,17.7414065 C15.317182,18.0797209 15.5927991,18.3539789 15.93279,18.3539789 L17.4502942,18.3539789 L17.4502942,19.6365371 C17.4502942,20.0486675 17.7860476,20.3827652 18.2002203,20.3827652 C18.614393,20.3827652 18.9501464,20.0486675 18.9501464,19.6365371 L18.9501464,18.3539789 L20.4335428,18.3539789 C20.7735337,18.3539789 21.0491507,18.0797209 21.0491507,17.7414065 C21.0491507,17.4030922 20.7735337,17.1288342 20.4335428,17.1288342 L18.9501464,17.1288342 L18.9501464,16.3617592 L20.3950984,16.3617592 C20.7563216,16.3617592 21.0491507,16.070374 21.0491507,15.710932 C21.0491507,15.3514901 20.7563216,15.0601049 20.3950984,15.0601049 L19.111553,15.0601049 L20.2844686,13.6045735 C20.5171211,13.315863 20.4705173,12.8941448 20.1803761,12.6626396 C20.1750627,12.6583999 20.1696849,12.6542407 20.1642446,12.6501635 C19.8579414,12.4206004 19.4226482,12.4813737 19.1916598,12.7859506 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
IncomeMonitoringList.displayName = 'IncomeMonitoringList';
export default IncomeMonitoringList;